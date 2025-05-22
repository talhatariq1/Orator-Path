import os
import sys
import json
import subprocess
import numpy as np
import tempfile
import time
from flask import Flask, request, jsonify
from flask_cors import CORS
from vosk import Model, KaldiRecognizer
import wave
import librosa
import librosa.display
import textblob
from textblob import TextBlob
import nltk
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.corpus import stopwords
from nltk.corpus import sentiwordnet as swn
from nltk.stem import WordNetLemmatizer
import re
import matplotlib.pyplot as plt
import soundfile as sf
from scipy.io import wavfile
from scipy import signal
from pydub import AudioSegment
import spacy
from collections import Counter
from pymongo import MongoClient
import traceback
# from bson import ObjectId # Only if you plan to work with ObjectId strings from client
from datetime import datetime
from dotenv import load_dotenv

print("--- PYTHON SERVER SCRIPT STARTING ---")


load_dotenv()

# os.path.dirname(__file__) is the directory containing server.py
# os.path.join(os.path.dirname(__file__), '.env') is the full path to .env in the same dir
# Path to the directory containing server.py
script_dir = os.path.dirname(os.path.abspath(__file__))
# Path to the parent directory (oratorpath)
parent_dir = os.path.abspath(os.path.join(script_dir, '..'))
# Full path to your .env.local file
dotenv_path = os.path.join(parent_dir, '.env.local')

print(f"Attempting to load .env file from specific path: {dotenv_path}")

if os.path.exists(dotenv_path):
    print(f".env file found at '{dotenv_path}'. Loading variables...")
    # Tell load_dotenv the exact path and to override existing system env vars if any conflict
    load_dotenv(dotenv_path=dotenv_path, override=True)
else:
    print(f"CRITICAL WARNING: .env file NOT FOUND at the specified path: {dotenv_path}")
    print(f"Please ensure the file exists and the path is correct.")
    # You might still want to check system environment variables as a last resort
    print("Relying on system environment variables as a fallback (if any).")

# Download NLTK resources (uncomment first time)
# nltk.download('punkt')
# nltk.download('stopwords')
# nltk.download('averaged_perceptron_tagger_eng')
# nltk.download('wordnet')

# Load spaCy model
try:
    nlp = spacy.load("en_core_web_sm")
except:
    print("You need to download the spaCy model. Run: python -m spacy download en_core_web_sm")

# Explicitly set FFmpeg path
FFMPEG_PATH = r"C:\ffmpeg-7.1.1-essentials_build\bin\ffmpeg.exe"

# Verify FFmpeg path exists
if not os.path.exists(FFMPEG_PATH):
    print(f"ERROR: FFmpeg not found at {FFMPEG_PATH}")
    sys.exit(1)

# Update system PATH
os.environ['PATH'] += f";{os.path.dirname(FFMPEG_PATH)}"

# Configure pydub to use full FFmpeg path
AudioSegment.converter = FFMPEG_PATH

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Vosk Model Path
MODEL_PATH = "E:\\University\\FYP\\OP\\\FYP-Design\\Orator-Path\\oratorpath\\src\lib\\models\\Vosk-model-en-us-0.42-gigaspeech"
if not os.path.exists(MODEL_PATH):
    raise Exception(f"Vosk model not found at path: {MODEL_PATH}")

# Load Vosk Model
model = Model(MODEL_PATH)

# Define filler words and transition words
FILLER_WORDS = set([
    "um", "uh", "hmm", "like", "actually", "basically", "literally", 
    "you know", "i mean", "so", "well", "right", "okay", "like", 
    "sort of", "kind of", "i guess", "anyway", "whatever"
])

TRANSITION_WORDS = set([
    "additionally", "consequently", "firstly", "secondly", "finally", 
    "therefore", "however", "nevertheless", "moreover", "furthermore",
    "in conclusion", "to summarize", "in contrast", "similarly", "in particular", 
    "for example", "for instance", "in other words", "specifically", "meanwhile"
])



# Now you can access os.getenv as before
MONGODB_URI_FROM_ENV = os.getenv("MONGODB_URI")

print(f"Value of MONGODB_URI from environment after attempting to load .env: '{MONGODB_URI_FROM_ENV}'")

# --- MongoDB Configuration ---
MONGODB_URI = MONGODB_URI_FROM_ENV
if not MONGODB_URI:
    print("CRITICAL WARNING: MONGODB_URI is NOT set in the environment even after attempting to load .env.local.")
    print("Falling back to default localhost, which is likely incorrect for Atlas.")
    MONGODB_URI = "mongodb://localhost:27017/"

DB_NAME = "orator-path" # Ensure this matches the DB name in your MONGODB_URI if specified there
ANALYSIS_COLLECTION = "audioanalyses"

mongo_client = None
db = None
audio_analysis_collection = None

print(f"Attempting MongoDB connection with URI: '{MONGODB_URI}'")

try:
    mongo_client = MongoClient(MONGODB_URI, serverSelectionTimeoutMS=10000)
    print("Pinging MongoDB server...")
    mongo_client.admin.command('ping')
    print("MongoDB ping successful!")
    db = mongo_client[DB_NAME]
    audio_analysis_collection = db[ANALYSIS_COLLECTION]
    print("Creating indexes...")
    audio_analysis_collection.create_index([("clerkId", 1)])
    audio_analysis_collection.create_index([("clerkId", 1), ("analysisDate", -1)])
    print(f"Successfully connected to MongoDB and configured collection: {ANALYSIS_COLLECTION}")
except Exception as e:
    print(f"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    print(f"ERROR: Could not connect to MongoDB or configure collection.")
    print(f"URI Used: '{MONGODB_URI}'")
    print(f"Specific Error: {e}")
    import traceback
    print("Full Traceback:")
    traceback.print_exc()
    print(f"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

print("--- MongoDB Setup Attempt Complete ---")
def convert_audio_to_wav(input_path, output_path):
    """
    Convert audio file to a Vosk-compatible WAV format
    - Single channel (mono)
    - 16-bit PCM
    - 16kHz sample rate
    """
    try:
        # Check the input file
        input_size = os.path.getsize(input_path)
        print(f"Converting file: {input_path}, Size: {input_size} bytes")
        
        # For browser recorded audio, we need to explicitly check the header
        is_webm_or_wav_recording = False
        with open(input_path, 'rb') as f:
            header = f.read(12)  # Read first 12 bytes for format detection
            # Reset file pointer
            f.seek(0)
            
            # Check if the file is WebM (often used in browser recordings)
            if header.startswith(b'\x1a\x45\xdf\xa3') or header.startswith(b'RIFF'):
                is_webm_or_wav_recording = True
        
        # Read audio file using pydub, with special handling for browser recordings
        try:
            if is_webm_or_wav_recording and input_path.endswith('.wav'):
                # For WAV recordings from browser, use direct reading with wave module first
                # This helps handle browser-recorded WAV files that might have special headers
                try:
                    with wave.open(input_path, 'rb') as wf:
                        # Already a WAV, check if it needs conversion
                        if wf.getnchannels() == 1 and wf.getsampwidth() == 2 and wf.getframerate() == 16000:
                            # Already in correct format, just copy
                            import shutil
                            shutil.copy(input_path, output_path)
                            return True
                except wave.Error:
                    # Not a valid WAV or has issues, fall back to pydub
                    pass
            
            # Default approach using pydub
            audio = AudioSegment.from_file(input_path)
        except Exception as pydub_error:
            print(f"Pydub error: {pydub_error}, trying FFMPEG directly")
            # If pydub fails, try direct FFMPEG command
            try:
                subprocess.run([
                    FFMPEG_PATH,
                    '-i', input_path,
                    '-ar', '16000',
                    '-ac', '1',
                    '-c:a', 'pcm_s16le',
                    output_path
                ], check=True, capture_output=True)
                return True
            except subprocess.CalledProcessError as ffmpeg_error:
                print(f"FFMPEG direct error: {ffmpeg_error}")
                print(f"FFMPEG stdout: {ffmpeg_error.stdout.decode('utf-8')}")
                print(f"FFMPEG stderr: {ffmpeg_error.stderr.decode('utf-8')}")
                raise Exception(f"Failed to convert audio with direct FFMPEG: {ffmpeg_error}")
        
        # Convert to mono
        audio = audio.set_channels(1)
        
        # Resample to 16kHz
        audio = audio.set_frame_rate(16000)
        
        # Export as WAV (16-bit PCM)
        audio.export(output_path, format="wav", parameters=["-acodec", "pcm_s16le"])
        
        # Verify the output
        if os.path.exists(output_path) and os.path.getsize(output_path) > 0:
            print(f"Conversion successful: {output_path}, Size: {os.path.getsize(output_path)} bytes")
            return True
        else:
            print(f"Output file is empty or missing")
            return False
            
    except Exception as e:
        print(f"Conversion error: {e}")
        print(f"Input path: {input_path}")
        print(f"Output path: {output_path}")
        print(f"FFmpeg path: {AudioSegment.converter}")
        return False
def process_transcript(text):
    """
    Process raw transcript to:
    1. Segment into meaningful sentences
    2. Analyze for contextual relevance
    
    Args:
        text (str): Raw transcript text from speech recognition
    
    Returns:
        dict: Processed transcript data including:
            - segmented_text: Transcript with proper sentence breaks
            - contextual_issues: List of detected irrelevant or nonsensical phrases
            - coherence_score: Overall coherence score of the transcript (0-100)
    """
    # If text is empty, return basic structure
    if not text or text.strip() == "":
        return {
            "segmented_text": "",
            "contextual_issues": [],
            "coherence_score": 0
        }
    
    # Clean input text
    text = text.strip()
    
    # Step 1: Use spaCy for advanced NLP-based sentence segmentation
    doc = nlp(text)
    sentences = [sent.text.strip() for sent in doc.sents]
    
    # Step 2: Further refine sentence breaks based on speech patterns
    refined_sentences = []
    for sentence in sentences:
        # Split long sentences at common speech breaks like "and", "but", etc.
        if len(sentence.split()) > 25:  # If sentence is too long
            # Use regex to split at common conjunction patterns with lookahead/lookbehind
            parts = re.split(r'(?<=[.!?])\s+(?=[A-Z])|(?<=\w)\s+(?:and|but|or|so|because|however)\s+(?=[a-z])', sentence)
            refined_sentences.extend([p.strip() for p in parts if p.strip()])
        else:
            refined_sentences.append(sentence)
    
    # Step 3: Check if each sentence ends with proper punctuation
    properly_terminated = []
    for sentence in refined_sentences:
        if not sentence[-1] in ['.', '!', '?']:
            sentence += '.'
        # Ensure first letter is capitalized
        if sentence and sentence[0].islower():
            sentence = sentence[0].upper() + sentence[1:]
        properly_terminated.append(sentence)
    
    # Step 4: Contextual relevance analysis
    contextual_issues = []
    
    # 4.1: Check for incoherent phrases (nonsensical n-grams)
    incoherent_phrases = []
    
    # Split text into n-grams and check their probability
    words = word_tokenize(text.lower())
    
    # Check bigrams and trigrams for nonsensical combinations
    from nltk.collocations import BigramAssocMeasures, BigramCollocationFinder
    bigram_measures = BigramAssocMeasures()
    finder = BigramCollocationFinder.from_words(words)
    
    # Low PMI (Pointwise Mutual Information) suggests word combinations that don't belong together
    low_pmi_bigrams = []
    try:
        scored_bigrams = finder.score_ngrams(bigram_measures.pmi)
        # Filter out low PMI scores (potentially incoherent)
        for bigram, score in scored_bigrams:
            if score < 0:  # Negative PMI indicates words that don't typically co-occur
                low_pmi_bigrams.append((" ".join(bigram), score))
    except:
        pass  # In case of errors with sparse data
    
    # 4.2: Check for isolated irrelevant words
    doc = nlp(text)
    irrelevant_words = []
    
    # Use named entity recognition and word vectors to find outliers
    main_entities = set()
    main_topics = []
    
    # Gather named entities
    for ent in doc.ents:
        main_entities.add(ent.text.lower())
    
    # Get the most frequent non-stop words as topic indicators
    word_freq = Counter([token.text.lower() for token in doc if not token.is_stop and not token.is_punct and len(token.text) > 2])
    main_topics = [word for word, count in word_freq.most_common(5)]
    
    # Find words that have low similarity with the main topics
    for token in doc:
        if (not token.is_stop and not token.is_punct and len(token.text) > 2 
            and token.has_vector and token.text.lower() not in main_topics):
            
            # Calculate average similarity with main topics
            similarities = []
            for topic_word in main_topics:
                topic_token = nlp(topic_word)[0]
                if topic_token.has_vector:
                    similarity = token.similarity(topic_token)
                    similarities.append(similarity)
            
            avg_similarity = sum(similarities) / len(similarities) if similarities else 0
            
            # If word has very low similarity to all main topics, mark as potentially irrelevant
            if avg_similarity < 0.2 and token.text.lower() not in main_entities:
                irrelevant_words.append((token.text, token.i))
    
    # Add both types of issues to the contextual issues list
    for phrase, score in low_pmi_bigrams[:5]:  # Limit to top 5
        contextual_issues.append({
            "type": "incoherent_phrase",
            "text": phrase,
            "score": score,
            "explanation": "This phrase appears unusual in this context."
        })
    
    for word, position in irrelevant_words[:5]:  # Limit to top 5
        contextual_issues.append({
            "type": "irrelevant_word",
            "text": word,
            "position": position,
            "explanation": "This word appears disconnected from the main topic."
        })
    
    # Calculate overall coherence score (0-100)
    # Factors:
    # 1. Presence of contextual issues
    # 2. Sentence structure quality
    # 3. Topic consistency
    
    issue_penalty = min(50, len(contextual_issues) * 10)
    sentence_structure_score = 100 - min(50, max(0, sum(len(s.split()) for s in properly_terminated) / len(properly_terminated) - 15) * 2)
    
    # Calculate topic consistency using text similarity between first and last third of text
    if len(doc) > 15:
        first_third = doc[:len(doc)//3]
        last_third = doc[-len(doc)//3:]
        topic_consistency = first_third.similarity(last_third) * 100
    else:
        topic_consistency = 85  # Default for short texts
    
    coherence_score = max(0, min(100, (100 - issue_penalty + sentence_structure_score + topic_consistency) / 3))
    
    # Combine properly terminated sentences into final output
    segmented_text = " ".join(properly_terminated)
    
    return {
        "segmented_text": segmented_text,
        "contextual_issues": contextual_issues,
        "coherence_score": float(coherence_score)
    }


# Update the analyze_voice_characteristics function to fix the peak_pick error:

def analyze_voice_characteristics(audio_path):
    """Analyze voice characteristics like pitch, tone, etc."""
    try:
        # Load audio file
        y, sr = librosa.load(audio_path, sr=None)
        
        # Get duration
        duration = librosa.get_duration(y=y, sr=sr)
        
        # Extract Pitch (Fundamental Frequency) with improved method
        pitch_data = []
        frame_length = 2048
        hop_length = 512

        # Try to use PYIN if available (without checking for _HAS_RESAMPY)
        try:
            # Use PYIN (Probabilistic YIN) for more accurate pitch detection
            f0, voiced_flag, voiced_probs = librosa.pyin(
                y, 
                fmin=65,  # Lower bound - around 65 Hz for male voices
                fmax=400,  # Upper bound - reasonable limit for human speech
                sr=sr,
                frame_length=frame_length,
                hop_length=hop_length
            )
            
            # Filter out NaN values and only include reasonably confident pitch values
            for i, prob in enumerate(voiced_probs):
                if prob > 0.7 and not np.isnan(f0[i]) and f0[i] > 50:  # Only include confident pitch detections
                    pitch_data.append(float(f0[i]))
        except Exception as pyin_error:
            print(f"PYIN pitch detection failed, falling back to piptrack: {pyin_error}")
            # Fallback to the original method
            pitches, magnitudes = librosa.piptrack(y=y, sr=sr)
            for i in range(pitches.shape[1]):
                index = magnitudes[:, i].argmax()
                pitch = pitches[index, i]
                if 50 < pitch < 400:  # More realistic pitch range for human speech
                    pitch_data.append(float(pitch))
        
        # Calculate pitch statistics
        if pitch_data:
            avg_pitch = np.mean(pitch_data)
            min_pitch = np.min(pitch_data)
            max_pitch = np.max(pitch_data)
            pitch_variability = np.std(pitch_data)
        else:
            avg_pitch = min_pitch = max_pitch = pitch_variability = 0
        
        # Improve gender estimation based on average pitch
        # Common ranges: Male: 85-180 Hz, Female: 165-255 Hz
        likely_gender = "unknown"
        gender_confidence = 0.0

        if pitch_data:
            if avg_pitch < 145:  # Definitely male
                likely_gender = "male"
                gender_confidence = min(1.0, (145 - avg_pitch) / 60)
            elif avg_pitch > 175:  # Definitely female
                likely_gender = "female"
                gender_confidence = min(1.0, (avg_pitch - 175) / 80)
            else:  # Ambiguous range
                # In the overlap range, use the proximity to the typical male/female means
                male_likelihood = max(0, 1 - abs(avg_pitch - 120) / 60)
                female_likelihood = max(0, 1 - abs(avg_pitch - 210) / 60)
                
                if male_likelihood > female_likelihood:
                    likely_gender = "male"
                    gender_confidence = male_likelihood
                else:
                    likely_gender = "female"
                    gender_confidence = female_likelihood
        
        # Extract speaking rate (syllables per second)
        onset_env = librosa.onset.onset_strength(y=y, sr=sr)
        
        # Use librosa's onset detection instead of peak_pick
        onset_frames = librosa.onset.onset_detect(onset_envelope=onset_env, sr=sr)
        speaking_rate = len(onset_frames) / duration if duration > 0 else 0
        
        # Tempo estimation
        tempo, _ = librosa.beat.beat_track(y=y, sr=sr)
        
        # Volume (RMS energy)
        rms = librosa.feature.rms(y=y)[0]
        avg_volume = float(np.mean(rms))
        volume_variability = float(np.std(rms))
        
        # Pauses - gaps of silence longer than 0.5 seconds
        # We'll define silence as sections with RMS energy below 10% of the max
        silence_threshold = 0.1 * np.max(rms)
        is_silence = rms < silence_threshold
        
        # Convert to time frames
        silence_frames = np.where(is_silence)[0]
        frame_duration = hop_length / sr
        
        # Find contiguous silence segments
        silence_segments = []
        if len(silence_frames) > 0:
            # Convert frames to time
            silence_times = silence_frames * frame_duration
            
            # Find breaks to separate silence segments
            silence_diff = np.diff(silence_times)
            breaks = np.where(silence_diff > 2 * frame_duration)[0]
            
            # Extract silence segments
            start_idx = 0
            for break_idx in breaks:
                silence_segments.append((silence_times[start_idx], silence_times[break_idx]))
                start_idx = break_idx + 1
                
            # Add the last segment
            if start_idx < len(silence_times):
                silence_segments.append((silence_times[start_idx], silence_times[-1]))
        
        # Filter for pauses longer than 0.5 second
        pauses = [seg for seg in silence_segments if (seg[1] - seg[0]) > 0.5]
        num_pauses = len(pauses)
        avg_pause_duration = np.mean([p[1] - p[0] for p in pauses]) if pauses else 0
        
        # Voice quality - spectral characteristics
        spectral_contrast = librosa.feature.spectral_contrast(y=y, sr=sr)
        spectral_centroid = librosa.feature.spectral_centroid(y=y, sr=sr)
        spectral_bandwidth = librosa.feature.spectral_bandwidth(y=y, sr=sr)
        
        # Average values for spectral features
        avg_contrast = float(np.mean(spectral_contrast))
        avg_centroid = float(np.mean(spectral_centroid))
        avg_bandwidth = float(np.mean(spectral_bandwidth))
        
        return {
            "duration": float(duration),
            "pitch": {
                "average": float(avg_pitch),
                "min": float(min_pitch),
                "max": float(max_pitch),
                "variability": float(pitch_variability)
            },
            "volume": {
                "average": float(avg_volume),
                "variability": float(volume_variability)
            },
            "speaking_rate": float(speaking_rate),
            "tempo": float(tempo),
            "pauses": {
                "count": num_pauses,
                "average_duration": float(avg_pause_duration)
            },
            "voice_quality": {
                "spectral_contrast": float(avg_contrast),
                "spectral_centroid": float(avg_centroid),
                "spectral_bandwidth": float(avg_bandwidth)
            },
            "gender_estimation": {
                "likely_gender": likely_gender,
                "confidence": float(gender_confidence)
            }
        }
    except Exception as e:
        print(f"Voice analysis error: {e}")
        import traceback
        traceback.print_exc()
        # Return a safe default object with all expected properties
        return {
            "duration": 0.0,
            "pitch": {
                "average": 0.0,
                "min": 0.0,
                "max": 0.0,
                "variability": 0.0
            },
            "volume": {
                "average": 0.0,
                "variability": 0.0
            },
            "speaking_rate": 0.0,
            "tempo": 0.0,
            "pauses": {
                "count": 0,
                "average_duration": 0.0
            },
            "voice_quality": {
                "spectral_contrast": 0.0,
                "spectral_centroid": 0.0,
                "spectral_bandwidth": 0.0
            },
            "gender_estimation": {
                "likely_gender": "unknown",
                "confidence": 0.0
            },
            "error": str(e)
        }


def analyze_text(text):
    """Perform NLP analysis on the transcribed text"""
    try:
        # Parse JSON if the input is a JSON string
        if isinstance(text, str) and text.strip().startswith('{'):
            try:
                data = json.loads(text)
                if 'text' in data:
                    text = data['text']
            except:
                pass  # Keep text as is if JSON parsing fails
        
        # Clean text
        text = text.lower()
        
        # Basic statistics
        words = word_tokenize(text)
        sentences = sent_tokenize(text)
        word_count = len(words)
        sentence_count = len(sentences)
        avg_words_per_sentence = word_count / sentence_count if sentence_count > 0 else 0
        
        # Filler words analysis
        filler_word_counts = {}
        for word in words:
            if word.lower() in FILLER_WORDS:
                filler_word_counts[word] = filler_word_counts.get(word, 0) + 1
        
        # Check multi-word filler phrases
        for filler in FILLER_WORDS:
            if ' ' in filler and filler in text:
                occurrences = text.count(filler)
                if occurrences > 0:
                    filler_word_counts[filler] = occurrences
        
        total_filler_words = sum(filler_word_counts.values())
        filler_words_percentage = (total_filler_words / word_count) * 100 if word_count > 0 else 0
        
        # Transition words analysis
        transition_word_counts = {}
        for word in words:
            if word.lower() in TRANSITION_WORDS:
                transition_word_counts[word] = transition_word_counts.get(word, 0) + 1
        
        # Check multi-word transition phrases
        for transition in TRANSITION_WORDS:
            if ' ' in transition and transition in text:
                occurrences = text.count(transition)
                if occurrences > 0:
                    transition_word_counts[transition] = occurrences
        
        total_transition_words = sum(transition_word_counts.values())
        transition_words_percentage = (total_transition_words / word_count) * 100 if word_count > 0 else 0
        
        # Sentiment analysis
        blob = TextBlob(text)
        sentiment_polarity = blob.sentiment.polarity  # -1 to 1 (negative to positive)
        sentiment_subjectivity = blob.sentiment.subjectivity  # 0 to 1 (objective to subjective)
        
        # Classify sentiment
        if sentiment_polarity > 0.05:
            sentiment_label = "Positive"
        elif sentiment_polarity < -0.05:
            sentiment_label = "Negative"
        else:
            sentiment_label = "Neutral"
        
        # Word frequency excluding stopwords
        stop_words = set(stopwords.words('english'))
        content_words = [word.lower() for word in words if word.lower() not in stop_words and len(word) > 2]
        word_freq = Counter(content_words)
        most_common_words = word_freq.most_common(10)
        
        # Vocabulary richness - unique words percentage
        unique_words = set(words)
        vocabulary_richness = (len(unique_words) / word_count) * 100 if word_count > 0 else 0
        
        # Repetition patterns - find words that appear in sequence
        repetitions = []
        for i in range(len(words) - 1):
            if words[i] == words[i+1] and words[i] not in stop_words:
                repetitions.append(words[i])
        
        # POS tagging for grammar analysis
        pos_tags = nltk.pos_tag(words)
        pos_counts = Counter([tag for word, tag in pos_tags])
        
        # Calculate noun-verb ratio (content density)
        noun_count = sum([pos_counts.get(tag, 0) for tag in ['NN', 'NNS', 'NNP', 'NNPS']])
        verb_count = sum([pos_counts.get(tag, 0) for tag in ['VB', 'VBD', 'VBG', 'VBN', 'VBP', 'VBZ']])
        noun_verb_ratio = noun_count / verb_count if verb_count > 0 else 0
        
        # Hesitation patterns - repeated words that are typically filler words
        hesitation_pattern = re.findall(r'\b(\w+)\s+\1\b', text.lower())
        hesitation_count = len(hesitation_pattern)
        
        # Use spaCy for advanced NLP
        doc = nlp(text)
        
        # Named entity recognition
        entities = {}
        for ent in doc.ents:
            entity_type = ent.label_
            if entity_type not in entities:
                entities[entity_type] = []
            entities[entity_type].append(ent.text)
        
        # Readability metrics (Flesch Reading Ease)
        # Simplified calculation
        if sentence_count > 0:
            avg_sentence_length = word_count / sentence_count
            syllable_count = sum([len([y for y in re.findall(r'[aeiouy]+', x.lower())]) for x in words])
            avg_syllables_per_word = syllable_count / word_count if word_count > 0 else 0
            flesch_reading_ease = 206.835 - (1.015 * avg_sentence_length) - (84.6 * avg_syllables_per_word)
        else:
            flesch_reading_ease = 0
        
        # Determine reading level
        if flesch_reading_ease >= 90:
            reading_level = "Very Easy"
        elif flesch_reading_ease >= 80:
            reading_level = "Easy"
        elif flesch_reading_ease >= 70:
            reading_level = "Fairly Easy"
        elif flesch_reading_ease >= 60:
            reading_level = "Standard"
        elif flesch_reading_ease >= 50:
            reading_level = "Fairly Difficult"
        elif flesch_reading_ease >= 30:
            reading_level = "Difficult"
        else:
            reading_level = "Very Difficult"
        
        # Emotion analysis
        from nltk.stem import WordNetLemmatizer
        
        lemmatizer = WordNetLemmatizer()
        
        # Define emotion categories and their associated lexicons
        emotion_lexicon = {
            'joy': ['happy', 'joy', 'delight', 'pleased', 'glad', 'cheerful', 'content', 'satisfied', 'merry', 'thrilled', 'elated'],
            'sadness': ['sad', 'unhappy', 'sorrow', 'depression', 'miserable', 'heartbroken', 'gloomy', 'downcast', 'grieving', 'blue'],
            'anger': ['angry', 'mad', 'rage', 'furious', 'annoyed', 'irritated', 'outraged', 'hostile', 'resentment', 'enraged'],
            'fear': ['afraid', 'fear', 'scared', 'panic', 'terror', 'worry', 'anxious', 'frightened', 'nervous', 'dread'],
            'surprise': ['surprised', 'amazed', 'astonished', 'shocked', 'startled', 'unexpected', 'wonder', 'speechless'],
            'disgust': ['disgusted', 'repulsed', 'revolted', 'gross', 'nauseated', 'loathing', 'distaste', 'appalled'],
            'trust': ['trust', 'believe', 'faith', 'confident', 'assured', 'reliable', 'dependable', 'honest', 'loyal'],
            'anticipation': ['expect', 'anticipate', 'await', 'looking forward', 'hopeful', 'eager', 'excited'],
            'neutral': ['normal', 'standard', 'typical', 'regular', 'ordinary', 'usual', 'common']  # Add neutral category
        }
        
        # Count emotions
        emotion_counts = {emotion: 0 for emotion in emotion_lexicon.keys()}
        lemmatized_words = [lemmatizer.lemmatize(word.lower()) for word in content_words]
        
        # Extract adjectives which often carry emotional content
        adjectives = [word for word, tag in pos_tags if tag.startswith('JJ')]
        adj_lemmas = [lemmatizer.lemmatize(adj.lower()) for adj in adjectives]
        
        # Add adjectives to the analysis for better emotion detection
        all_analysis_words = lemmatized_words + adj_lemmas
        
        # Count emotions based on lexicon
        for word in all_analysis_words:
            for emotion, emotion_words in emotion_lexicon.items():
                if word in emotion_words or any(ew in word for ew in emotion_words):
                    emotion_counts[emotion] += 1
        
        # Also analyze phrases
        for emotion, emotion_words in emotion_lexicon.items():
            for phrase in emotion_words:
                if ' ' in phrase and phrase in text:
                    emotion_counts[emotion] += text.count(phrase)
        
        # Enhance emotion detection with sentiment polarity
        if sentiment_polarity > 0.3:  # Strong positive
            emotion_counts['joy'] += 1
            emotion_counts['trust'] += 1
        elif sentiment_polarity < -0.3:  # Strong negative
            emotion_counts['anger'] += 1
            emotion_counts['sadness'] += 1
        else:  # Neutral sentiment
            emotion_counts['neutral'] = emotion_counts.get('neutral', 0) + 1
        
        # Calculate emotion percentages
        total_emotion_mentions = sum(emotion_counts.values())
        emotion_percentages = {
            emotion: (count / total_emotion_mentions * 100) if total_emotion_mentions > 0 else 0 
            for emotion, count in emotion_counts.items()
        }
        
        # Determine primary emotion
        if total_emotion_mentions > 0:
            primary_emotion = max(emotion_counts.items(), key=lambda x: x[1])[0]
            secondary_emotion = sorted(emotion_counts.items(), key=lambda x: x[1], reverse=True)[1][0] if len(emotion_counts) > 1 else primary_emotion
        else:
            # If no emotions detected, explicitly set both to neutral and add to emotion_counts
            primary_emotion = "neutral"
            secondary_emotion = "neutral"
            emotion_counts["neutral"] = 1  # Add neutral to emotion_counts so it exists
        
        # Create emotion summary based on primary and secondary emotions
        if primary_emotion == "neutral" and secondary_emotion == "neutral":
            emotion_summary = "Neutral"
        else:
            emotion_summary = f"{primary_emotion.capitalize()}"
            if secondary_emotion in emotion_counts and emotion_counts[secondary_emotion] > 0 and secondary_emotion != primary_emotion:
                emotion_summary += f" with elements of {secondary_emotion}"
            
        return {
            "text_statistics": {
                "word_count": word_count,
                "sentence_count": sentence_count,
                "average_words_per_sentence": float(avg_words_per_sentence),
                "vocabulary_richness": float(vocabulary_richness)
            },
            "filler_words": {
                "total_count": total_filler_words,
                "percentage": float(filler_words_percentage),
                "occurrences": filler_word_counts
            },
            "transition_words": {
                "total_count": total_transition_words,
                "percentage": float(transition_words_percentage),
                "occurrences": transition_word_counts
            },
            "sentiment_analysis": {
                "polarity": float(sentiment_polarity),
                "subjectivity": float(sentiment_subjectivity),
                "label": sentiment_label
            },
            "emotion_analysis": {
                "primary_emotion": primary_emotion,
                "secondary_emotion": secondary_emotion,
                "emotion_summary": emotion_summary,
                "emotion_distribution": emotion_percentages,
                "emotion_counts": emotion_counts
            },
            "content_analysis": {
                "most_common_words": most_common_words,
                "noun_verb_ratio": float(noun_verb_ratio),
                "repetitions": repetitions,
                "hesitation_patterns": hesitation_count
            },
            "readability": {
                "flesch_reading_ease": float(flesch_reading_ease),
                "reading_level": reading_level
            },
            "named_entities": entities
        }
    except Exception as e:
        print(f"Text analysis error: {e}")
        import traceback
        traceback.print_exc()
        return {"error": str(e)}
        
def generate_speech_recommendations(voice_analysis, text_analysis):
    """Generate personalized recommendations based on voice and text analysis"""
    recommendations = []
    strengths_details = []
    growth_areas = []
    
    # Voice-related recommendations
    pitch = voice_analysis.get("pitch", {})
    pitch_variability = pitch.get("variability", 0)
    pitch_avg = pitch.get("average", 0)
    
    # Pitch variability analysis
    if pitch_variability < 15:
        recommendations.append({
            "category": "Voice",
            "issue": "Low pitch variability",
            "description": "Your voice has limited pitch variation which may sound monotonous.",
            "suggestion": "Try to add more vocal variety by emphasizing important words and phrases with a change in pitch. Practice by reading text aloud and deliberately varying your pitch on key words.",
            "exercises": [
                "Mark up a script with arrows indicating where to raise or lower your pitch",
                "Record yourself reading a children's story with exaggerated expression, then tone it down for normal speech",
                "Practice saying the same sentence with different emotions to naturally vary pitch"
            ]
        })
        growth_areas.append("Pitch variability")
    elif 15 <= pitch_variability < 25:
        strengths_details.append({
            "category": "Voice",
            "strength": "Moderate pitch variability",
            "description": "You have a good foundation in vocal variety with moderate pitch changes.",
            "enhancement": "To further improve, try mapping the emotional journey of your speech and match your pitch patterns accordingly."
        })
    else:
        strengths_details.append({
            "category": "Voice",
            "strength": "Excellent pitch variability",
            "description": "Your dynamic pitch range creates engaging and expressive speech patterns.",
            "enhancement": "To maintain this strength, continue practicing with various speaking styles while ensuring pitch changes sound natural and purposeful."
        })
    
    # Pitch range analysis 
    if pitch.get("range", 0) < 30:
        recommendations.append({
            "category": "Voice",
            "issue": "Limited pitch range",
            "description": "Your voice stays within a narrow pitch range, which may limit expressiveness.",
            "suggestion": "Expand your comfortable pitch range through vocal exercises. Try speaking at slightly higher and lower pitches than you normally use.",
            "exercises": [
                "Practice scale slides (gliding from low to high pitch and back)",
                "Read passages using different character voices",
                "Try humming at different pitches before speaking"
            ]
        })
    
    # Speaking rate analysis
    speaking_rate = voice_analysis.get("speaking_rate", 0)
    if speaking_rate > 4.5:  # Fast speech
        recommendations.append({
            "category": "Pace",
            "issue": "Rapid speech rate",
            "description": f"You're speaking at {speaking_rate:.1f} words per second, which might make it difficult for listeners to follow.",
            "suggestion": "Practice slowing down, especially when explaining complex ideas. Try using more strategic pauses.",
            "exercises": [
                "Record yourself reading text while following along with a metronome set to a slower pace",
                "Place punctuation marks on your script and pause briefly at each one",
                "Practice breathing techniques to naturally slow your pace"
            ]
        })
        growth_areas.append("Speaking pace")
    elif speaking_rate < 2.5:  # Slow speech
        recommendations.append({
            "category": "Pace",
            "issue": "Slow speech rate",
            "description": f"Your pace is {speaking_rate:.1f} words per second, which might cause listeners to lose interest.",
            "suggestion": "Try to increase your speaking tempo slightly while maintaining clarity. Focus on reducing unnecessary pauses between words.",
            "exercises": [
                "Practice with tongue twisters to improve articulation at faster speeds",
                "Read familiar texts aloud at gradually increasing speeds",
                "Record yourself and set time goals for passages"
            ]
        })
        growth_areas.append("Speaking pace")
    else:
        strengths_details.append({
            "category": "Pace",
            "strength": "Optimal speaking rate",
            "description": f"Your pace of {speaking_rate:.1f} words per second is well-balanced for listener comprehension.",
            "enhancement": "Continue varying your pace strategically - slow down for complex points and speed up slightly for engaging stories or established concepts."
        })
    
    # Pauses analysis
    pauses = voice_analysis.get("pauses", {})
    pause_count = pauses.get("count", 0)
    avg_pause_duration = pauses.get("average_duration", 0)
    duration = voice_analysis.get("duration", 0)
    
    # Calculate pauses per minute
    pauses_per_minute = (pause_count / duration) * 60 if duration > 0 else 0
    
    if pauses_per_minute < 5 and duration > 60:
        recommendations.append({
            "category": "Pauses",
            "issue": "Insufficient pausing",
            "description": f"You're averaging only {pauses_per_minute:.1f} pauses per minute, which can make your speech feel rushed.",
            "suggestion": "Add strategic pauses after important points to give listeners time to process information.",
            "exercises": [
                "Mark your script with '//' where you should pause",
                "Practice the 'Think and speak' technique: pause, think about what you'll say, then speak",
                "Count '1-2' silently after making important points before continuing"
            ]
        })
        growth_areas.append("Strategic pausing")
    elif avg_pause_duration > 2:
        recommendations.append({
            "category": "Pauses",
            "issue": "Long pauses",
            "description": f"Your pauses average {avg_pause_duration:.1f} seconds, which might disrupt the flow of your speech.",
            "suggestion": "Work on reducing pause duration while maintaining a natural speaking rhythm. Aim for purposeful pauses of 0.5-1.5 seconds.",
            "exercises": [
                "Practice with a timer to develop a sense of appropriate pause length",
                "Record yourself and listen for overly long pauses",
                "Use brief breathing pauses instead of extended stops"
            ]
        })
        growth_areas.append("Pause duration")
    elif 5 <= pauses_per_minute <= 12 and avg_pause_duration <= 2:
        strengths_details.append({
            "category": "Pauses",
            "strength": "Effective use of pauses",
            "description": f"You use {pauses_per_minute:.1f} pauses per minute with an average duration of {avg_pause_duration:.1f} seconds, creating natural rhythm.",
            "enhancement": "Experiment with 'dramatic pauses' before key revelations or after provocative questions to heighten audience engagement."
        })
    
    # Volume analysis
    volume = voice_analysis.get("volume", {})
    volume_variability = volume.get("variability", 0)
    volume_avg = volume.get("average", 0)
    
    if volume_variability < 0.05:
        recommendations.append({
            "category": "Volume",
            "issue": "Limited volume variation",
            "description": "Your volume remains mostly constant throughout your speech.",
            "suggestion": "Add emphasis by varying your volume - increase volume for important points and reduce for thoughtful moments.",
            "exercises": [
                "Practice speaking with deliberate volume changes - whisper, normal voice, projection",
                "Mark key points in your script to emphasize with increased volume",
                "Record yourself reading a dramatic passage with volume variations"
            ]
        })
        growth_areas.append("Volume dynamics")
    elif volume_variability >= 0.1:
        strengths_details.append({
            "category": "Volume",
            "strength": "Good volume dynamics",
            "description": "You effectively vary your volume to create emphasis and maintain listener interest.",
            "enhancement": "Match your volume patterns to content purpose - louder for excitement/important points, softer for reflection/personal insights."
        })
    
    if volume_avg < 0.3:
        recommendations.append({
            "category": "Volume",
            "issue": "Low overall volume",
            "description": "Your speech volume is generally low, which may make it difficult for listeners to hear you clearly.",
            "suggestion": "Work on projecting your voice from your diaphragm rather than your throat to increase overall volume without strain.",
            "exercises": [
                "Practice diaphragmatic breathing exercises",
                "Stand up straight and imagine speaking to someone at the back of the room",
                "Use the 'counting exercise': count from 1-10 with increasing volume"
            ]
        })
    
    # Voice quality analysis
    voice_quality = voice_analysis.get("voice_quality", {})
    breathiness = voice_quality.get("breathiness", 0)
    vocal_fry = voice_quality.get("vocal_fry", 0)
    
    if breathiness > 0.6:
        recommendations.append({
            "category": "Voice Quality",
            "issue": "Breathy voice",
            "description": "Your voice has a breathy quality which may reduce authority and clarity.",
            "suggestion": "Focus on proper breath support and vocal cord closure for a more resonant sound.",
            "exercises": [
                "Practice the 'hissing exercise': exhale on a continuous 'sss' sound for as long as possible",
                "Try gentle glottal onsets with vowel sounds (ah, eh, ee)",
                "Record yourself pronouncing plosive consonants (p, t, k) with clarity"
            ]
        })
    
    if vocal_fry > 0.5:
        recommendations.append({
            "category": "Voice Quality",
            "issue": "Vocal fry",
            "description": "You're using vocal fry (creaky voice) frequently, which can reduce speech clarity and authority.",
            "suggestion": "Maintain better breath support throughout your sentences and aim for a more resonant tone.",
            "exercises": [
                "Start sentences with a slightly higher pitch and maintain breath through the end",
                "Practice speaking with a 'forward placement' focusing on resonance",
                "Do vocal warm-ups before speaking"
            ]
        })
    
    # Text-related recommendations
    filler_words = text_analysis.get("filler_words", {})
    filler_percentage = filler_words.get("percentage", 0)
    filler_occurrences = filler_words.get("occurrences", {})
    
    if filler_percentage > 5:
        common_fillers = list(filler_occurrences.keys())[:3] if filler_occurrences else ["um", "uh", "like"]
        recommendations.append({
            "category": "Filler Words",
            "issue": "Excessive filler words",
            "description": f"Filler words make up {filler_percentage:.1f}% of your speech, particularly '{', '.join(common_fillers)}'.",
            "suggestion": "Practice being comfortable with silence instead of using filler words. Record yourself and identify your most common fillers.",
            "exercises": [
                "Practice 'pause and think' rather than filling silence",
                "Have a friend signal when you use fillers during practice",
                "Record short talks and count your fillers to track improvement over time"
            ]
        })
        growth_areas.append("Filler word reduction")
    elif filler_percentage <= 2:
        strengths_details.append({
            "category": "Fluency",
            "strength": "Minimal filler words",
            "description": f"Your speech contains only {filler_percentage:.1f}% filler words, demonstrating strong verbal fluency.",
            "enhancement": "Continue practicing prepared speaking to maintain this strength and extend it to impromptu situations."
        })
    
    # Transition words analysis
    transition_words = text_analysis.get("transition_words", {})
    transition_percentage = transition_words.get("percentage", 0)
    transition_occurrences = transition_words.get("occurrences", {})
    
    sentence_count = text_analysis.get("text_statistics", {}).get("sentence_count", 0)
    if transition_percentage < 2 and sentence_count > 10:
        recommendations.append({
            "category": "Structure",
            "issue": "Few transition words",
            "description": f"Transition words make up only {transition_percentage:.1f}% of your speech, making it harder to follow your logical flow.",
            "suggestion": "Incorporate words like 'firstly', 'additionally', 'however', and 'in conclusion' to make your speech structure more clear.",
            "exercises": [
                "Create a list of transition words for different purposes (sequence, contrast, conclusion)",
                "Outline your speech with transitions marked between major points",
                "Practice impromptu speaking using at least 3 transition words per minute"
            ]
        })
        growth_areas.append("Transition words")
    elif transition_percentage >= 4:
        strengths_details.append({
            "category": "Structure",
            "strength": "Excellent use of transitions",
            "description": f"Your speech contains {transition_percentage:.1f}% transition words, creating clear connections between ideas.",
            "enhancement": "To further improve, vary your transition phrases beyond your favorites - group similar transitions and try alternatives."
        })
    
    # Readability analysis
    readability = text_analysis.get("readability", {})
    reading_level = readability.get("reading_level", "")
    readability_score = readability.get("score", 0)
    
    if reading_level in ["Difficult", "Very Difficult"]:
        recommendations.append({
            "category": "Clarity",
            "issue": "Complex language",
            "description": f"Your speech has a {reading_level} reading level ({readability_score:.1f}), which might be challenging for some listeners.",
            "suggestion": "Consider simplifying vocabulary and shortening sentences for better comprehension.",
            "exercises": [
                "Rewrite sentences with more than 15 words into shorter segments",
                "Replace specialized terminology with simpler alternatives when possible",
                "Test your content with a reading level analyzer and aim for 'moderate' difficulty"
            ]
        })
        growth_areas.append("Language simplicity")
    elif reading_level in ["Easy", "Moderate"]:
        strengths_details.append({
            "category": "Clarity",
            "strength": "Accessible language",
            "description": f"Your {reading_level} reading level ({readability_score:.1f}) makes your content accessible to a wide audience.",
            "enhancement": "Maintain this balance between simplicity and substance, while occasionally introducing more advanced vocabulary with clear context when needed."
        })
    
    # Content analysis
    content_analysis = text_analysis.get("content_analysis", {})
    hesitation_patterns = content_analysis.get("hesitation_patterns", 0)
    
    if hesitation_patterns > 5:
        recommendations.append({
            "category": "Fluency",
            "issue": "Word repetition and hesitation",
            "description": f"You display {hesitation_patterns} instances of hesitation patterns such as repeating words or phrases.",
            "suggestion": "Practice your speech beforehand to reduce word repetition and improve fluency.",
            "exercises": [
                "Record and transcribe your speech to identify repetition patterns",
                "Practice speaking more slowly and deliberately to reduce nervous repetition",
                "Use progressive relaxation techniques before speaking to reduce anxiety"
            ]
        })
        growth_areas.append("Speech fluency")
    elif hesitation_patterns <= 2:
        strengths_details.append({
            "category": "Fluency",
            "strength": "Smooth delivery",
            "description": "Your speech flows naturally with minimal hesitation or repetition.",
            "enhancement": "Continue building confidence through regular practice, especially with impromptu speaking situations."
        })

    repetitions = content_analysis.get("repetitions", [])
    if len(repetitions) > 3:
        recommendations.append({
            "category": "Clarity",
            "issue": "Word repetition",
            "description": f"You're repeating words like '{', '.join(repetitions[:3])}' unnecessarily.",
            "suggestion": "Expand your vocabulary and practice synonyms for commonly used words.",
            "exercises": [
                "Keep a thesaurus handy when preparing speeches",
                "Create a list of your most overused words and their alternatives",
                "Practice describing an object or concept using different words each time"
            ]
        })
    
    # Sentiment analysis
    sentiment = text_analysis.get("sentiment_analysis", {})
    subjectivity = sentiment.get("subjectivity", 0.5)
    sentiment_score = sentiment.get("polarity", 0)
    
    if subjectivity > 0.8:
        recommendations.append({
            "category": "Content",
            "issue": "Highly subjective language",
            "description": f"Your speech contains highly subjective language (score: {subjectivity:.2f}) which may reduce perceived objectivity.",
            "suggestion": "Balance personal opinions with factual statements for more credible communication.",
            "exercises": [
                "For every opinion stated, include a supporting fact or evidence",
                "Use phrases like 'research suggests' instead of 'I believe' when appropriate",
                "Practice reframing subjective statements into more neutral language"
            ]
        })
    
    # Analyze emotional tone appropriateness
    if abs(sentiment_score) > 0.7:
        tone = "very positive" if sentiment_score > 0 else "very negative"
        recommendations.append({
            "category": "Tone",
            "issue": f"Strongly {tone} tone",
            "description": f"Your speech has a strongly {tone} emotional tone (score: {abs(sentiment_score):.2f}).",
            "suggestion": f"Consider if this {tone} tone is appropriate for your content and audience. Sometimes a more balanced approach is more effective.",
            "exercises": [
                "Practice delivering the same content with different emotional tones",
                "Record variations of your speech with different levels of emotional intensity",
                "Ask for feedback on which tone resonates best with your target audience"
            ]
        })
    
    # Text structure analysis
    text_stats = text_analysis.get("text_statistics", {})
    avg_words_per_sentence = text_stats.get("average_words_per_sentence", 0)
    
    if avg_words_per_sentence > 25:
        recommendations.append({
            "category": "Structure",
            "issue": "Long sentences",
            "description": f"Your sentences average {avg_words_per_sentence:.1f} words, which can be difficult to follow when listening.",
            "suggestion": "Break down complex ideas into shorter, clearer sentences for better comprehension.",
            "exercises": [
                "Practice splitting sentences at conjunctions (and, but, or)",
                "Aim for a mix of sentence lengths, with an average of 15-20 words",
                "Read your speech aloud and note where you naturally pause to breathe - these may be good places to end sentences"
            ]
        })
        growth_areas.append("Sentence structure")
    elif 15 <= avg_words_per_sentence <= 20:
        strengths_details.append({
            "category": "Structure",
            "strength": "Optimal sentence length",
            "description": f"Your average sentence length of {avg_words_per_sentence:.1f} words strikes a good balance between complexity and clarity.",
            "enhancement": "Continue varying sentence length for rhythm - use shorter sentences for emphasis and slightly longer ones for explanation."
        })
    
    # Analyze speech structure
    has_clear_intro = text_analysis.get("structure_analysis", {}).get("has_introduction", False)
    has_clear_conclusion = text_analysis.get("structure_analysis", {}).get("has_conclusion", False)
    
    if not has_clear_intro and sentence_count > 10:
        recommendations.append({
            "category": "Structure",
            "issue": "Weak introduction",
            "description": "Your speech lacks a clear introduction to set context and grab attention.",
            "suggestion": "Start with a hook (question, statistic, story) followed by a clear statement of your main point.",
            "exercises": [
                "Practice crafting 30-second introductions that include a hook and thesis",
                "Study effective speech openings and adapt them to your style",
                "Try different introduction styles (narrative, shocking fact, question) to see which works best"
            ]
        })
    
    if not has_clear_conclusion and sentence_count > 10:
        recommendations.append({
            "category": "Structure",
            "issue": "Weak conclusion",
            "description": "Your speech ends without a strong concluding statement or call to action.",
            "suggestion": "End with a summary of key points and a memorable final thought or call to action.",
            "exercises": [
                "Practice the 'full circle' technique by connecting your conclusion to your introduction",
                "Create a list of powerful closing phrases to adapt for different speeches",
                "Record different conclusion options and select the most impactful"
            ]
        })
    
    # Advanced analysis - eloquence factors
    eloquence_markers = text_analysis.get("eloquence_markers", {})
    rhetorical_devices = eloquence_markers.get("rhetorical_devices", 0)
    metaphors = eloquence_markers.get("metaphors", 0)
    
    if rhetorical_devices < 2 and sentence_count > 15:
        recommendations.append({
            "category": "Eloquence",
            "issue": "Few rhetorical devices",
            "description": "Your speech could benefit from more rhetorical techniques to enhance persuasiveness.",
            "suggestion": "Incorporate techniques like repetition (anaphora), rhetorical questions, and rule of three for more impact.",
            "exercises": [
                "Study great speeches and identify their rhetorical techniques",
                "Practice rewriting key points using different rhetorical devices",
                "Add at least one rhetorical question and one 'rule of three' to your next speech"
            ]
        })
    
    if metaphors < 1 and sentence_count > 15:
        recommendations.append({
            "category": "Eloquence",
            "issue": "Limited use of imagery",
            "description": "Your speech uses few metaphors or analogies to illustrate concepts.",
            "suggestion": "Add vivid comparisons to make abstract ideas more concrete and memorable.",
            "exercises": [
                "For each main point, brainstorm a relevant metaphor or analogy",
                "Practice describing complex concepts using everyday comparisons",
                "Create a personal 'metaphor bank' for topics you frequently discuss"
            ]
        })
    elif metaphors >= 3:
        strengths_details.append({
            "category": "Eloquence",
            "strength": "Effective use of imagery",
            "description": f"You use {metaphors} metaphors/analogies that make your content more vivid and memorable.",
            "enhancement": "Ensure your metaphors are consistent throughout your speech to create a cohesive theme."
        })
        
    # Overall speech quality assessment
    score_factors = {
        "pitch_variability": min(1, pitch_variability / 30) * 10,
        "speaking_rate": (10 - abs(speaking_rate - 3.5) * 2) if 2 <= speaking_rate <= 5 else 5,
        "pauses_quality": min(10, max(0, 10 - abs(pauses_per_minute - 8) - max(0, avg_pause_duration - 1) * 2)),
        "volume_variation": min(10, volume_variability * 100),
        "voice_quality": max(0, 10 - (breathiness * 5) - (vocal_fry * 5)),
        "filler_words": max(0, 10 - filler_percentage),
        "transition_usage": min(10, transition_percentage * 2),
        "fluency": max(0, 10 - hesitation_patterns / 2),
        "sentence_structure": max(0, 10 - abs(avg_words_per_sentence - 15) / 3),
        "content_clarity": max(0, 10 - abs(readability_score - 50) / 10),
        "speech_structure": (5 if has_clear_intro else 0) + (5 if has_clear_conclusion else 0),
        "eloquence": min(10, (rhetorical_devices + metaphors) * 2)
    }
    
    # Calculate overall score (out of 100)
    overall_score = sum(score_factors.values()) / len(score_factors) * 10
    
    # Performance level based on score
    if overall_score >= 90:
        performance_level = "Excellent"
        performance_description = "You demonstrate outstanding speaking skills across multiple dimensions. Your speech is engaging, clear, and professionally delivered."
    elif overall_score >= 80:
        performance_level = "Very Good"
        performance_description = "You show strong speaking abilities with just a few areas for improvement. Your speech is effective and well-delivered overall."
    elif overall_score >= 70:
        performance_level = "Good"
        performance_description = "You have good speaking fundamentals with several notable strengths. Focused improvement in specific areas will elevate your speaking to the next level."
    elif overall_score >= 60:
        performance_level = "Above Average"
        performance_description = "Your speaking skills are better than average, with some particular strengths. Working on your weaker areas will help you become a more well-rounded speaker."
    elif overall_score >= 50:
        performance_level = "Average"
        performance_description = "You demonstrate typical speaking abilities with both strengths and areas needing improvement. Focus on your recommendations to stand out more effectively."
    elif overall_score >= 40:
        performance_level = "Below Average"
        performance_description = "Your speaking has some challenges that may impact effectiveness. Consistent practice of the recommended exercises will yield significant improvements."
    elif overall_score >= 30:
        performance_level = "Needs Improvement"
        performance_description = "Your speaking skills require focused development in several key areas. Regular practice with the suggested exercises will help you build a stronger foundation."
    else:
        performance_level = "Needs Significant Work"
        performance_description = "Your speaking skills need substantial development. Consider working with a speech coach alongside implementing the recommendations provided."
    
    # Strengths assessment if not already identified
    if not strengths_details:
        for factor, score in score_factors.items():
            if score >= 8 and factor not in [s["category"].lower().replace(" ", "_") for s in strengths_details]:  # 80% or higher for this factor
                if factor == "pitch_variability":
                    strengths_details.append({
                        "category": "Voice",
                        "strength": "Good vocal variety",
                        "description": "You use pitch variation effectively to emphasize points and maintain audience interest.",
                        "enhancement": "Continue developing your vocal range through regular practice with varied content styles."
                    })
                elif factor == "speaking_rate":
                    strengths_details.append({
                        "category": "Pace",
                        "strength": "Appropriate speaking pace",
                        "description": f"Your speaking rate of {speaking_rate:.1f} words per second is well-balanced for listener comprehension.",
                        "enhancement": "Practice strategic variations in pace to highlight important points."
                    })
                elif factor == "pauses_quality":
                    strengths_details.append({
                        "category": "Pauses",
                        "strength": "Effective use of pauses",
                        "description": "You use pauses strategically to emphasize points and allow processing time.",
                        "enhancement": "Continue refining the length and placement of pauses for maximum impact."
                    })
                elif factor == "volume_variation":
                    strengths_details.append({
                        "category": "Volume",
                        "strength": "Good volume dynamics",
                        "description": "You vary your volume effectively to create emphasis and maintain interest.",
                        "enhancement": "Continue practicing volume changes that match the emotional content of your message."
                    })
                elif factor == "voice_quality":
                    strengths_details.append({
                        "category": "Voice Quality",
                        "strength": "Clear vocal tone",
                        "description": "Your voice has a pleasant resonance with good clarity and minimal strain.",
                        "enhancement": "Maintain this quality through proper vocal warm-ups and hydration before speaking."
                    })
                elif factor == "filler_words":
                    strengths_details.append({
                        "category": "Fluency",
                        "strength": "Minimal use of filler words",
                        "description": "You rarely use filler words, making your speech more professional and authoritative.",
                        "enhancement": "Continue practicing pause-and-think rather than filling silence with sounds."
                    })
                elif factor == "transition_usage":
                    strengths_details.append({
                        "category": "Structure",
                        "strength": "Good use of transitions",
                        "description": "You effectively use transition words to connect ideas and guide your audience.",
                        "enhancement": "Expand your transition vocabulary for even smoother connections between concepts."
                    })
                elif factor == "fluency":
                    strengths_details.append({
                        "category": "Fluency",
                        "strength": "Smooth delivery",
                        "description": "Your speech flows well with minimal hesitation or repetition.",
                        "enhancement": "Continue building this strength through regular impromptu speaking practice."
                    })
                elif factor == "sentence_structure":
                    strengths_details.append({
                        "category": "Structure",
                        "strength": "Well-structured sentences",
                        "description": f"Your average sentence length of {avg_words_per_sentence:.1f} words is ideal for spoken content.",
                        "enhancement": "Continue varying sentence length for rhythm and emphasis."
                    })
                elif factor == "content_clarity":
                    strengths_details.append({
                        "category": "Clarity",
                        "strength": "Accessible language",
                        "description": "Your content strikes a good balance between simplicity and sophistication.",
                        "enhancement": "Continue tailoring your language complexity to your specific audience."
                    })
                elif factor == "speech_structure":
                    strengths_details.append({
                        "category": "Structure",
                        "strength": "Well-organized content",
                        "description": "Your speech has a clear structure with effective opening and closing sections.",
                        "enhancement": "Further refine your introductions to more quickly engage your audience."
                    })
                elif factor == "eloquence":
                    strengths_details.append({
                        "category": "Eloquence",
                        "strength": "Rhetorical effectiveness",
                        "description": "You use rhetorical devices and imagery that enhance your message impact.",
                        "enhancement": "Study master speakers in your field to discover additional techniques."
                    })
    
    # Identify priority improvements
    if recommendations:
        priority_improvements = []
        
        # First check for fundamental issues
        fundamental_categories = ["Filler Words", "Pace", "Volume", "Fluency"]
        for category in fundamental_categories:
            for rec in recommendations:
                if rec["category"] == category and len(priority_improvements) < 3:
                    priority_improvements.append({
                        "category": rec["category"],
                        "issue": rec["issue"],
                        "impact": "High - This fundamentally affects how your message is received"
                    })
        
        # Then check for structural issues
        structural_categories = ["Structure", "Clarity", "Pauses"]
        for category in structural_categories:
            for rec in recommendations:
                if rec["category"] == category and len(priority_improvements) < 3:
                    priority_improvements.append({
                        "category": rec["category"],
                        "issue": rec["issue"],
                        "impact": "Medium - This affects how well your content is understood and organized"
                    })
        
        # Finally add any other issues to reach 3 priorities
        for rec in recommendations:
            if len(priority_improvements) < 3 and not any(p["category"] == rec["category"] and p["issue"] == rec["issue"] for p in priority_improvements):
                priority_improvements.append({
                    "category": rec["category"],
                    "issue": rec["issue"],
                    "impact": "Important for overall speech quality improvement"
                })
    else:
        priority_improvements = []
    
    # Development pathway - progressive improvement steps
    development_pathway = []
    
    # Stage 1: Foundation - always include even if speaker is advanced
    development_pathway.append({
        "stage": "Foundation",
        "focus_areas": ["Eliminate major distractions (excessive fillers, extreme pace issues)", 
                       "Develop basic speech structure (clear intro and conclusion)"],
        "exercises": [
            "Record short 1-minute speeches daily focusing on eliminating your most common fillers",
            "Practice speaking with a metronome to regulate pace",
            "Create and use speech outlines with clear introduction, body, and conclusion sections"
        ],
        "milestone": "Deliver a 3-minute speech with less than 3% filler words and clear structure"
    })
    
    # Stage 2: Enhancement - technical improvement
    if overall_score < 70:  # Only include for speakers who need this level
        development_pathway.append({
            "stage": "Enhancement",
            "focus_areas": ["Improve vocal variety (pitch, volume, pace variation)", 
                           "Develop strategic pausing", 
                           "Refine sentence structure for clarity"],
            "exercises": [
                "Practice reading expressive texts with exaggerated vocal variation then tone down to natural levels",
                "Mark pauses in scripts and practice different pause durations",
                "Rewrite complex sentences into clearer, more concise versions before speaking"
            ],
            "milestone": "Record a 5-minute speech applying vocal variety and strategic pauses"
        })
    
    # Stage 3: Refinement - style and eloquence
    if overall_score < 85:  # Only include for speakers who need this level
        development_pathway.append({
            "stage": "Refinement",
            "focus_areas": ["Add rhetorical techniques for emphasis", 
                           "Use metaphors and analogies to illustrate points", 
                           "Improve transitions between sections"],
            "exercises": [
                "Study speeches you admire and identify rhetorical devices they use",
                "Practice creating metaphors for abstract concepts in your field",
                "Build a transition phrase library for different purposes (comparison, contrast, sequence)"
            ],
            "milestone": "Deliver a speech incorporating at least 3 rhetorical devices and 2 memorable metaphors"
        })
    
    # Stage 4: Mastery - advanced skills for high-level speakers
    if overall_score >= 70:  # Only include for more advanced speakers
        development_pathway.append({
            "stage": "Mastery",
            "focus_areas": ["Develop authentic personal style", 
                           "Master audience adaptation", 
                           "Refine impromptu speaking abilities"],
            "exercises": [
                "Record speeches in different styles and analyze which elements feel most authentic",
                "Practice adjusting the same content for different audience types",
                "Participate in impromptu speaking exercises with increasingly challenging topics"
            ],
            "milestone": "Successfully deliver specialized content to diverse audiences with consistently positive feedback"
        })
    
    # Tailor the pathway based on key weaknesses
    if "Filler word reduction" in growth_areas:
        for stage in development_pathway:
            if stage["stage"] == "Foundation":
                if "Eliminate filler words" not in stage["focus_areas"]:
                    stage["focus_areas"].append("Eliminate filler words")
                if not any("filler" in ex for ex in stage["exercises"]):
                    stage["exercises"].append("Count filler words in recorded practice sessions and track improvement")
    
    if "Pitch variability" in growth_areas:
        for stage in development_pathway:
            if stage["stage"] == "Enhancement":
                if "Improve vocal variety" not in ' '.join(stage["focus_areas"]):
                    stage["focus_areas"].append("Develop pitch variation")
                if not any("pitch" in ex for ex in stage["exercises"]):
                    stage["exercises"].append("Practice reading the same text with different emotional tones to develop pitch range")
    
    # Add personalized next steps based on performance level
    if overall_score < 50:
        next_steps = [
            "Focus first on eliminating the most distracting elements in your speech (excessive fillers, inappropriate pace)",
            "Record yourself for 1-2 minutes daily speaking on a familiar topic to build awareness of your patterns",
            "Consider joining a speaking club like Toastmasters for regular practice and feedback"
        ]
    elif overall_score < 70:
        next_steps = [
            "Practice the specific exercises recommended for your top 3 priority improvement areas",
            "Record a speech before and after implementing recommendations to track progress",
            "Focus on incorporating one new technique per week rather than trying to fix everything at once"
        ]
    else:
        next_steps = [
            "Continue refining your already strong speaking foundation with advanced techniques",
            "Consider recording yourself in different speaking contexts to ensure consistency",
            "Seek opportunities for speaking to diverse audiences to further develop adaptability"
        ]
    
    # Create a personalized progress tracking template
    tracking_template = {
        "weekly_focus": "Select one recommendation to focus on each week",
        "metrics_to_track": []
    }
    
    # Add relevant metrics based on recommendations
    if any(r["category"] == "Filler Words" for r in recommendations):
        tracking_template["metrics_to_track"].append("Filler word percentage (aim to reduce by 50% initially)")
    
    if any(r["category"] == "Pace" for r in recommendations):
        tracking_template["metrics_to_track"].append("Speaking rate (target: 2.5-4.0 words per second)")
    
    if any(r["category"] == "Pauses" for r in recommendations):
        tracking_template["metrics_to_track"].append("Pauses per minute (target: 8-12 pauses)")
    
    if any(r["category"] == "Structure" for r in recommendations):
        tracking_template["metrics_to_track"].append("Transition word usage (aim for 3-5% of total words)")
    
    # Add general metrics everyone should track
    tracking_template["metrics_to_track"].extend([
        "Practice frequency (target: at least 3 sessions per week)",
        "Speech duration (gradually increase as you improve)",
        "Audience feedback ratings (collect ratings on a 1-10 scale for clarity and engagement)"
    ])
    
    return {
        "recommendations": recommendations,
        "performance_assessment": {
            "overall_score": float(overall_score),
            "performance_level": performance_level,
            "performance_description": performance_description,
            "strengths": [s["strength"] for s in strengths_details],
            "detailed_strengths": strengths_details,
            "growth_areas": growth_areas,
            "score_breakdown": {k: float(v) for k, v in score_factors.items()},
            "priority_improvements": priority_improvements
        },
        "development_plan": {
            "next_steps": next_steps,
            "development_pathway": development_pathway,
            "tracking_template": tracking_template
        }
    }


@app.route("/transcribe", methods=["POST"])
def transcribe_and_analyze_route():
    print(f"\n--- New Request to /transcribe at {datetime.now()} ---")
    print(f"Request Headers: {request.headers}")
    # print(f"Request Form Data: {request.form}") # Be careful logging form data if it contains sensitive info

    if "audio" not in request.files:
        print("ERROR: No 'audio' file part in request.files")
        return jsonify({"error": "No audio file provided in 'audio' part"}), 400

    clerk_id = request.form.get("userId")
    if not clerk_id:
        print("ERROR: 'userId' not found in form data.")
        return jsonify({"error": "userId (clerkId) is required in form data"}), 400
    
    print(f"Processing request for userId (clerkId): {clerk_id}")

    audio_file = request.files["audio"]
    original_filename = audio_file.filename if audio_file.filename and audio_file.filename.strip() else "uploaded_audio"
    
    # Sanitize filename slightly (basic example)
    original_filename = re.sub(r'[^\w\._-]', '', original_filename) 
    file_ext = original_filename.split(".")[-1].lower() if "." in original_filename else "tmp"

    timestamp_ms = int(time.time() * 1000)
    # Ensure temp directory exists or handle creation
    temp_dir = tempfile.gettempdir()
    os.makedirs(temp_dir, exist_ok=True)

    temp_input_path = os.path.join(temp_dir, f"input_{timestamp_ms}_{original_filename}.{file_ext}")
    output_wav_path = os.path.join(temp_dir, f"processed_{timestamp_ms}_{original_filename}.wav")

    # Initialize the document structure that will be saved to MongoDB
    analysis_doc = {
        "clerkId": clerk_id,
        "fileName": original_filename,
        "analysisDate": datetime.utcnow(),
        "transcription": None,
        "transcriptAnalysis": {"raw_transcription": None, "contextual_issues": [], "coherence_score": 0.0, "error": None},
        "voiceAnalysis": {"error": None},
        "textAnalysis": {"error": None},
        "recommendations": {"error": None},
        "processingErrors": [] # List to store errors from various stages
    }

    try:
        audio_file.save(temp_input_path)
        print(f"Temp input file saved: {temp_input_path} (Size: {os.path.getsize(temp_input_path)} bytes)")

        if not model: # Check if Vosk model loaded
            error_msg = "Vosk speech recognition model is not available on the server."
            print(f"ERROR: {error_msg}")
            analysis_doc["processingErrors"].append(error_msg)
            # Attempt to save error doc before returning
            if audio_analysis_collection: audio_analysis_collection.insert_one(analysis_doc)
            return jsonify({"error": error_msg}), 503 # Service Unavailable

        if not convert_audio_to_wav(temp_input_path, output_wav_path):
            error_msg = "Audio to WAV conversion failed."
            print(f"ERROR: {error_msg}")
            analysis_doc["processingErrors"].append(error_msg)
            if audio_analysis_collection: audio_analysis_collection.insert_one(analysis_doc)
            return jsonify({"error": error_msg}), 422 # Unprocessable Entity

        print(f"Audio converted to WAV: {output_wav_path}")

        # --- Transcription ---
        raw_transcription_text = ""
        try:
            with wave.open(output_wav_path, "rb") as wf:
                if wf.getnchannels() != 1 or wf.getsampwidth() != 2 or wf.getcomptype() != "NONE":
                    error_msg = "Converted WAV is not in the expected format (mono, 16-bit PCM)."
                    print(f"ERROR: {error_msg}")
                    analysis_doc["processingErrors"].append(error_msg)
                    if audio_analysis_collection: audio_analysis_collection.insert_one(analysis_doc)
                    return jsonify({"error": error_msg}), 500

                rec = KaldiRecognizer(model, wf.getframerate())
                rec.SetWords(True) # For word timestamps, if your process_transcript uses it

                parts = []
                while True:
                    data = wf.readframes(4000)
                    if len(data) == 0:
                        break
                    if rec.AcceptWaveform(data):
                        res = json.loads(rec.Result())
                        parts.append(res.get("text", ""))
                
                final_res = json.loads(rec.FinalResult())
                parts.append(final_res.get("text", ""))
                raw_transcription_text = " ".join(filter(None, parts)).strip()
            analysis_doc["transcriptAnalysis"]["raw_transcription"] = raw_transcription_text
            print(f"Raw transcription successful (first 100 chars): {raw_transcription_text[:100]}")
        except Exception as vosk_error:
            error_msg = f"Vosk transcription error: {vosk_error}"
            print(f"ERROR: {error_msg}\n{traceback.format_exc()}")
            analysis_doc["processingErrors"].append(error_msg)
            analysis_doc["transcriptAnalysis"]["error"] = str(vosk_error)
            # Continue if possible, or decide to return error

        # --- Transcript Processing ---
        if raw_transcription_text and not analysis_doc["transcriptAnalysis"].get("error"):
            processed_transcript_data = process_transcript(raw_transcription_text)
            analysis_doc["transcription"] = processed_transcript_data.get("segmented_text", raw_transcription_text)
            analysis_doc["transcriptAnalysis"].update(processed_transcript_data) # Merge results
            if processed_transcript_data.get("error"):
                analysis_doc["processingErrors"].append(f"TranscriptProcessingError: {processed_transcript_data['error']}")
        elif not raw_transcription_text:
             analysis_doc["processingErrors"].append("Transcription resulted in empty text.")
             analysis_doc["transcription"] = "" # Ensure it's an empty string

        # --- Voice Analysis ---
        voice_analysis_data = analyze_voice_characteristics(output_wav_path)
        analysis_doc["voiceAnalysis"] = voice_analysis_data
        if voice_analysis_data.get("error"):
            analysis_doc["processingErrors"].append(f"VoiceAnalysisError: {voice_analysis_data['error']}")

        # --- Text Analysis ---
        # Use the processed (segmented) transcript if available and no error, otherwise raw
        text_for_nlp = analysis_doc["transcription"] if analysis_doc["transcription"] and not analysis_doc["transcriptAnalysis"].get("error") else raw_transcription_text
        if text_for_nlp:
            text_analysis_data = analyze_text(text_for_nlp)
            analysis_doc["textAnalysis"] = text_analysis_data
            if text_analysis_data.get("error"):
                analysis_doc["processingErrors"].append(f"TextAnalysisError: {text_analysis_data['error']}")
        else:
            analysis_doc["textAnalysis"] = {"error": "No text available for analysis."}
            analysis_doc["processingErrors"].append("Text analysis skipped: No transcript available.")


        # --- Recommendations ---
        if not analysis_doc["voiceAnalysis"].get("error") and \
           not analysis_doc["textAnalysis"].get("error") and \
           analysis_doc["voiceAnalysis"] and analysis_doc["textAnalysis"]: # Ensure data objects exist
            recommendations_data = generate_speech_recommendations(analysis_doc["voiceAnalysis"], analysis_doc["textAnalysis"])
            analysis_doc["recommendations"] = recommendations_data
            if recommendations_data.get("error"):
                analysis_doc["processingErrors"].append(f"RecommendationError: {recommendations_data['error']}")
        else:
            err_msg = "Recommendations skipped due to prior errors or missing data in voice/text analysis."
            analysis_doc["recommendations"] = {"error": err_msg}
            analysis_doc["processingErrors"].append(err_msg)

        # --- Save to MongoDB ---
        if audio_analysis_collection is not None:
            try:
                # Ensure all main analysis fields are present, even if null, before insertion
                for key in ["transcription", "transcriptAnalysis", "voiceAnalysis", "textAnalysis", "recommendations"]:
                    if key not in analysis_doc or analysis_doc[key] is None:
                        # Initialize with error if not set, or a default structure
                        if analysis_doc.get(key, {}).get("error") is None: # if no specific error for this part
                             analysis_doc[key] = analysis_doc.get(key) or {"error": "Data not generated"}

                insert_result = audio_analysis_collection.insert_one(analysis_doc.copy()) # Save a copy
                analysis_doc["_id"] = str(insert_result.inserted_id) # For the JSON response
                print(f"Analysis data saved to MongoDB with ID: {insert_result.inserted_id}")
            except Exception as db_error:
                db_error_msg = f"MongoDB save error: {db_error}"
                print(f"ERROR: {db_error_msg}\n{traceback.format_exc()}")
                analysis_doc["processingErrors"].append(db_error_msg)
                # This is a critical error if data saving is mandatory for the user flow.
                # For now, we'll still return analysis if available, but log the save failure.
        else:
            print("WARNING: MongoDB client not available. Analysis results not saved to database.")
            analysis_doc["processingErrors"].append("MongoDB client not available, data not saved.")

        print("Analysis process completed.")
        
        # Prepare response: remove internal processing errors if not needed by client
        # Or, you might want to send a summary of errors.
        client_response = {k: v for k, v in analysis_doc.items() if k != "processingErrors"}
        if "_id" in client_response and client_response["_id"] is not None:
             client_response["_id"] = str(client_response["_id"])


        return jsonify(client_response), 200

    except Exception as e:
        critical_error_msg = f"Critical unhandled error in /transcribe route: {e}"
        print(f"FATAL ERROR: {critical_error_msg}\n{traceback.format_exc()}")
        analysis_doc["processingErrors"].append(critical_error_msg)
        # Attempt to save what we have to MongoDB even in case of a major crash
        if audio_analysis_collection is not None and clerk_id:
            try:
                audio_analysis_collection.insert_one(analysis_doc.copy())
                print(f"Partially saved error document to MongoDB (critical error scenario) for clerkId: {clerk_id}")
            except Exception as db_final_error:
                print(f"Failed to save error document to MongoDB during critical error handling: {db_final_error}")
        
        return jsonify({"error": "An unexpected server error occurred.", "details": critical_error_msg}), 500
    finally:
        # --- Cleanup ---
        for path in [temp_input_path, output_wav_path]:
            if path and os.path.exists(path):
                try:
                    os.remove(path)
                    print(f"Cleaned up temp file: {path}")
                except Exception as cleanup_err:
                    print(f"Error cleaning up temp file {path}: {cleanup_err}")
        print(f"--- Request to /transcribe completed at {datetime.now()} ---")


if __name__ == "__main__":
    print("Starting Flask server for OratorPath Audio Analysis...")
    # Note: Flask's built-in server is for development only.
    # For production, use a WSGI server like Gunicorn or Waitress.
    # Example: gunicorn --workers 4 --bind 0.0.0.0:5000 server:app --timeout 300
    app.run(host="0.0.0.0", port=5000, debug=True, use_reloader=False)
    
    app.config['TIMEOUT'] = 900  # 15 minutes