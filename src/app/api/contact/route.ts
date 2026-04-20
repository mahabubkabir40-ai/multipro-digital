import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Forwarding the data to FormSubmit via server-side fetch
    // This bypasses any client-side ISP blocks or SSL interception on formsubmit.co
    const response = await fetch('https://formsubmit.co/ajax/mahabubkabir@multiprodigital.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        _subject: "New Website Audit Request via Private Tunnel",
      })
    });

    const result = await response.json();

    if (response.ok) {
      return NextResponse.json({ success: true, message: "Email sent successfully" });
    } else {
      console.error("FormSubmit Error:", result);
      return NextResponse.json({ success: false, error: "Failed to forward email" }, { status: 500 });
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
