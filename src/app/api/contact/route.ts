import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    // Initialize Resend inside the request handler to prevent build-time crashes
    const resend = new Resend(process.env.RESEND_API_KEY);
    const formData = await request.json();

    // Clean up data for the email body
    // Clean and normalize the data
    const cleanData: Record<string, any> = {};
    for (const [key, value] of Object.entries(formData)) {
      if (!key.startsWith('_') || key === '_subject') {
        // Convert keys to lowercase to match our template (e.g., 'Name' becomes 'name')
        cleanData[key.toLowerCase()] = value;
      }
    }

    const subject = cleanData._subject || "New Website Audit Request";

    // Format the email content as professional HTML
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #102B4E; border-bottom: 2px solid #9afb16; padding-bottom: 10px;">${subject}</h2>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Name:</strong> ${cleanData.name || 'N/A'}</p>
          <p><strong>Email:</strong> ${cleanData.email || 'N/A'}</p>
          <p><strong>Company:</strong> ${cleanData.company || 'N/A'}</p>
          <p><strong>Website:</strong> ${cleanData.website || 'N/A'}</p>
          <p><strong>Monthly Moves:</strong> ${cleanData.moves || 'N/A'}</p>
          <p><strong>Challenge:</strong> ${cleanData.challenge || 'N/A'}</p>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 30px; text-align: center;">
          Sent from Multipro Digital lead capture system.
        </p>
      </div>
    `;

    // Send the email using Resend
      from: 'Multipro Digital <leads@multiprodigital.com>',
      to: "mahabubkabir@multiprodigital.com",
      subject: subject,
      html: emailHtml,
      replyTo: cleanData.email as string,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ 
        success: false, 
        error: "Our secure email engine is temporarily unavailable. We have been notified." 
      }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Lead sent successfully" });

  } catch (error: any) {
    console.error("API Connection Error:", error);
    return NextResponse.json({ 
      success: false, 
      error: "Technical error connecting to the mail server. Please try again." 
    }, { status: 500 });
  }
}
