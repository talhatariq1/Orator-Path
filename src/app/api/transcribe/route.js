// Path: oratorpath/src/app/api/transcribe/route.js
import { NextResponse } from 'next/server';
// No need for Readable or streamToBuffer if directly using file.arrayBuffer() for Blob.

export async function POST(req) {
  try {
    console.log("📡 Receiving request at /api/transcribe...");

    const formData = await req.formData();
    const audioFile = formData.get("audio");
    const userId = formData.get("userId"); // Get the userId (clerkId) from the form data

    if (!audioFile) {
      console.error("❌ No audio file received in Next.js API!");
      return NextResponse.json({ error: "No audio file provided" }, { status: 400 });
    }

    if (!userId) {
      console.error("❌ No userId (clerkId) received in Next.js API!");
      return NextResponse.json({ error: "No userId (clerkId) provided" }, { status: 400 });
    }

    console.log(`📄 Received audio file: ${audioFile.name}, for userId: ${userId}`);
    console.log("🚀 Preparing to send file to Python backend...");

    const backendFormData = new FormData();
    // Convert the File object from formData directly to a Blob for forwarding
    // This is more straightforward than stream conversions if the input is already a File/Blob.
    const audioBlob = new Blob([await audioFile.arrayBuffer()], { type: audioFile.type });
    backendFormData.append("audio", audioBlob, audioFile.name);
    backendFormData.append("userId", userId); // Add userId to the form data for the Python backend

    const pythonBackendUrl = process.env.PYTHON_BACKEND_URL || "http://127.0.0.1:5000/transcribe";
    console.log(`➡️ Forwarding request to Python backend: ${pythonBackendUrl}`);

    // Timeout configuration (10 minutes as in your original file: 600000ms)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
        console.warn(`⏰ Request to Python backend timed out after ${600000 / 1000} seconds.`);
        controller.abort();
    }, 600000);

    const backendResponse = await fetch(pythonBackendUrl, {
      method: "POST",
      body: backendFormData, // FormData is sent with appropriate 'multipart/form-data' headers by fetch
      signal: controller.signal,
    });

    clearTimeout(timeoutId); // Clear the timeout if fetch completes or fails before timeout

    if (!backendResponse.ok) {
      const errorText = await backendResponse.text(); // Get raw error text for better debugging
      console.error(`❌ Error from Python backend (status ${backendResponse.status}):`, errorText);
      // Attempt to parse as JSON if possible, otherwise use raw text
      let errorJson = { error: `Python backend failed with status ${backendResponse.status}`, details: errorText };
      try {
        errorJson = JSON.parse(errorText);
      } catch (parseError) {
        // Keep the text-based error if JSON parsing fails
      }
      return NextResponse.json(errorJson, { status: backendResponse.status });
    }

    const result = await backendResponse.json();
    console.log("✅ Successfully received response from Python backend.");

    return NextResponse.json(result, { status: 200 }); // Use NextResponse for consistency

  } catch (error) {
    console.error("❌ Critical error in /api/transcribe Next.js route:", error);
    
    let errorMessage = "Internal Server Error in Next.js API.";
    let errorStatus = 500;

    if (error.name === 'AbortError') {
      errorMessage = "Processing timed out. Your audio file may be too large or the analysis is taking too long.";
      errorStatus = 504; // Gateway Timeout
    } else if (error.code === 'UND_ERR_HEADERS_TIMEOUT') { // Specific error for fetch header timeout
        errorMessage = "Connection to backend timed out while sending request.";
        errorStatus = 504;
    } else if (error.message) {
        errorMessage = error.message;
    }
    
    return NextResponse.json({ error: errorMessage, details: error.stack }, { status: errorStatus });
  }
}
