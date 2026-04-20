import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Clean up data for FormSubmit AJAX API
    // We remove _next because it's for browser redirects, not AJAX
    const cleanData: Record<string, any> = {};
    for (const [key, value] of Object.entries(formData)) {
      if (!key.startsWith('_') || key === '_subject') {
        cleanData[key] = value;
      }
    }

    // Forwarding the data to FormSubmit via server-side fetch
    const response = await fetch('https://formsubmit.co/ajax/mahabubkabir@multiprodigital.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://www.multiprodigital.com',
        'Referer': 'https://www.multiprodigital.com/contact',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      body: JSON.stringify({
        ...cleanData,
        _subject: cleanData._subject || "New Website Audit Request",
      })
    });

    // Check if the response is actually JSON before parsing
    const contentType = response.headers.get("content-type");
    let result;
    if (contentType && contentType.includes("application/json")) {
      result = await response.json();
    } else {
      const text = await response.text();
      result = { message: text };
    }

    if (response.ok) {
      return NextResponse.json({ success: true, message: "Email sent successfully" });
    } else {
      console.error("FormSubmit Error:", result);
      return NextResponse.json({ 
        success: false, 
        error: "The email service is temporarily unavailable. Please try again in 5 minutes." 
      }, { status: response.status });
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ 
      success: false, 
      error: "Technical error connecting to the mail server. Please try again." 
    }, { status: 500 });
  }
}
