"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI speaking coach. How can I help you improve your communication skills today?",
      sender: "ai",
      timestamp: new Date().toISOString(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim() === "") return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date().toISOString(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    
    // Simulate AI response
    setIsTyping(true);
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: getAIResponse(inputValue),
        sender: "ai",
        timestamp: new Date().toISOString(),
      };
      
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };
  
  const getAIResponse = (userInput) => {
    // This is a simple simulation - in a real app, this would call an API
    const userInputLower = userInput.toLowerCase();
    
    if (userInputLower.includes("nervous") || userInputLower.includes("anxiety")) {
      return "It's completely normal to feel nervous before speaking. Try deep breathing exercises: inhale for 4 counts, hold for 2, and exhale for 6. This activates your parasympathetic nervous system and helps calm your body. Also, reframe your nervousness as excitement - the physiological response is similar!";
    } else if (userInputLower.includes("filler words") || userInputLower.includes("um") || userInputLower.includes("uh")) {
      return "To reduce filler words like 'um' and 'uh', try these techniques: 1) Practice pausing instead of filling silence, 2) Record yourself speaking and note when you use fillers, 3) Slow down your speech slightly, and 4) Prepare thoroughly so you're more confident with your content.";
    } else if (userInputLower.includes("pace") || userInputLower.includes("speed") || userInputLower.includes("fast")) {
      return "The ideal speaking pace is around 150-160 words per minute for most contexts. If you speak too quickly, try marking pauses in your notes, practicing with a metronome, or recording yourself and consciously slowing down during practice sessions. Remember that pauses feel longer to you than to your audience.";
    } else if (userInputLower.includes("eye contact") || userInputLower.includes("looking")) {
      return "For effective eye contact, follow the 'lighthouse method': scan the room slowly, making eye contact with different people for 3-5 seconds each. In virtual settings, look directly at your camera to create the impression of eye contact. This builds trust and connection with your audience.";
    } else if (userInputLower.includes("structure") || userInputLower.includes("organize")) {
      return "A well-structured speech typically follows: 1) An attention-grabbing opening, 2) A clear preview of main points, 3) The body with 2-4 main points, each with supporting evidence, 4) Transitions between sections, and 5) A conclusion that summarizes and leaves a lasting impression. The classic advice is: 'Tell them what you'll tell them, tell them, then tell them what you told them.'";
    } else {
      return "That's a great question about improving your speaking skills. Would you like me to provide specific techniques, examples, or exercises you can practice? The more details you share about your speaking goals, the more tailored advice I can offer.";
    }
  };
  
  const suggestedQuestions = [
    "How can I overcome speaking anxiety?",
    "What's the best way to reduce filler words?",
    "How do I improve my speaking pace?",
    "Tips for maintaining eye contact?",
    "How should I structure my presentation?",
  ];
  
  const handleSuggestedQuestion = (question) => {
    setInputValue(question);
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-900">AI Speaking Coach</h1>
            <p className="text-gray-600 mt-1">Get personalized coaching and answers to your speaking questions</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Chat Interface */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg shadow-sm border border-gray-100 h-[calc(100vh-12rem)] flex flex-col"
              >
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`mb-4 flex ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {message.sender === "ai" && (
                        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                          </svg>
                        </div>
                      )}
                      
                      <div
                        className={`max-w-[80%] rounded-lg p-4 ${
                          message.sender === "user"
                            ? "bg-purple-600 text-white"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === "user"
                              ? "text-purple-200"
                              : "text-gray-500"
                          }`}
                        >
                          {new Date(message.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      
                      {message.sender === "user" && (
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center ml-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start mb-4">
                      <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-4 max-w-[80%]">
                        <div className="flex space-x-2">
                          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
                
                {/* Input Area */}
                <div className="border-t border-gray-200 p-4">
                  <form onSubmit={handleSubmit} className="flex items-center">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      placeholder="Type your question here..."
                      className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Suggested Questions */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Suggested Questions</h2>
                <div className="space-y-3">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm text-gray-700"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Coach Info */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">About Your Coach</h2>
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">OratorAI</h3>
                    <p className="text-sm text-gray-600">Your personal speaking coach</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  I'm trained on communication best practices, public speaking techniques, and presentation skills. Ask me anything about improving your speaking abilities!
                </p>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                  <h4 className="text-sm font-medium text-purple-800 mb-2">What I can help with:</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Public speaking techniques</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Presentation structure advice</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Overcoming speaking anxiety</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Voice and delivery improvement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
