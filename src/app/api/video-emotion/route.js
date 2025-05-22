export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("video");

    if (!file) {
      return new Response(JSON.stringify({ error: "No video file provided" }), { status: 400 });
    }

    // Prepare form data for backend
    const backendFormData = new FormData();
    backendFormData.append("video", file, file.name);

    // Set timeout to 10 minutes for video processing
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 600000);

    try {
      const backendResponse = await fetch("http://127.0.0.1:5001/analyze_video", {
        method: "POST",
        body: backendFormData,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!backendResponse.ok) {
        const errorData = await backendResponse.text();
        return new Response(JSON.stringify({ error: errorData }), { status: backendResponse.status });
      }

      const result = await backendResponse.json();
      return new Response(JSON.stringify(result), { status: 200 });
    } catch (fetchError) {
      if (fetchError.name === 'AbortError') {
        return new Response(JSON.stringify({
          error: "Processing timed out. Your video file may be too large or complex to process."
        }), { status: 504 });
      }
      throw fetchError;
    }
  } catch (error) {
    return new Response(JSON.stringify({
      error: error.message || "Internal Server Error"
    }), { status: 500 });
  }
}