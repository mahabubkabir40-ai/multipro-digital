import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    // Initialize Resend inside the request handler to prevent build-time crashes
    const resend = new Resend(process.env.RESEND_API_KEY);
    const formData = await request.json();

    // Clean and normalize the incoming keys
    const cleanData: Record<string, any> = {};
    for (const [key, value] of Object.entries(formData)) {
      if (!key.startsWith('_') || key === '_subject') {
        const normalizedKey = key.toLowerCase().replace(/\s+/g, '');
        cleanData[normalizedKey] = typeof value === 'string' ? value.trim() : value;
      }
    }

    const name = cleanData.name || '';
    const phone = cleanData.phonenumber || cleanData.phone || '';
    const email = cleanData.email || '';
    const company = cleanData.businessname || cleanData.company || '';
    const cityState = cleanData.cityandstate || '';
    const website = 
      cleanData.website || 
      cleanData.websiteorgooglebusinessprofile || 
      cleanData.websiteorinstagramurl || 
      cleanData.googlebusinessprofile || 
      cleanData.gbp || 
      '';
    const space = cleanData.space || '';
    const system = cleanData.system || '';
    const estimate = cleanData.estimate || '';
    const prep = cleanData.prep || '';
    const source = cleanData.source || 'Website Lead';

    // Determine subject line
    let defaultSubject = '⚡ New Epoxy Lead Captured!';
    if (source === 'homepage-floor-calculator') {
      defaultSubject = `🔥 New Floor Estimator Lead: ${name || phone || 'Customer'}`;
    } else if (company || name) {
      defaultSubject = `⚡ New Visibility Audit Request: ${company || name}`;
    }
    const subject = cleanData._subject || defaultSubject;

    // Build lead details list (only non-empty fields)
    const items: { label: string; valueHtml: string }[] = [];

    if (name) {
      items.push({ label: 'Name', valueHtml: `<strong>${escapeHtml(name)}</strong>` });
    }
    if (company) {
      items.push({ label: 'Company / Business', valueHtml: `<strong>${escapeHtml(company)}</strong>` });
    }
    if (phone) {
      items.push({
        label: 'Phone Number',
        valueHtml: `<a href="tel:${escapeHtml(phone)}" style="color: #0b57d0; font-weight: bold; text-decoration: none; font-size: 15px;">${escapeHtml(phone)}</a>`
      });
    }
    if (email) {
      items.push({
        label: 'Email',
        valueHtml: `<a href="mailto:${escapeHtml(email)}" style="color: #0b57d0; text-decoration: none;">${escapeHtml(email)}</a>`
      });
    }
    if (cityState) {
      items.push({ label: 'City & State', valueHtml: escapeHtml(cityState) });
    }
    if (website) {
      const isLikelyUrl = website.startsWith('http://') || website.startsWith('https://') || website.includes('.');
      const formattedHref = (website.startsWith('http://') || website.startsWith('https://'))
        ? website 
        : `https://${website}`;

      items.push({
        label: 'Website / Google Business Profile',
        valueHtml: isLikelyUrl 
          ? `<a href="${escapeHtml(formattedHref)}" target="_blank" rel="noopener noreferrer" style="color: #0b57d0; text-decoration: underline; font-weight: 600;">${escapeHtml(website)}</a>`
          : `<strong>${escapeHtml(website)}</strong>`
      });
    }
    if (space) {
      items.push({ label: 'Project Space / Size', valueHtml: escapeHtml(space) });
    }
    if (system) {
      items.push({ label: 'Coating System', valueHtml: escapeHtml(system) });
    }
    if (estimate) {
      items.push({
        label: 'Instant Estimate Shown',
        valueHtml: `<span style="display: inline-block; background-color: #ecfdf5; color: #047857; font-weight: 800; padding: 4px 10px; border-radius: 6px; font-size: 15px; border: 1px solid #a7f3d0;">${escapeHtml(estimate)}</span>`
      });
    }
    if (prep) {
      const prepText = prep.toLowerCase() === 'yes' ? 'Yes (Moisture Barrier / Repairs Recommended)' : 'Standard Surface Prep';
      items.push({ label: 'Moisture Barrier / Prep', valueHtml: escapeHtml(prepText) });
    }
    if (source) {
      items.push({
        label: 'Lead Source',
        valueHtml: `<code style="background-color: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 12px; color: #475569;">${escapeHtml(source)}</code>`
      });
    }

    const rowsHtml = items.map((item, idx) => `
      <tr style="background-color: ${idx % 2 === 0 ? '#ffffff' : '#f8fafc'}; border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 12px 16px; font-weight: 600; color: #475569; width: 38%; vertical-align: top; font-size: 14px;">${item.label}</td>
        <td style="padding: 12px 16px; color: #0f172a; vertical-align: top; font-size: 14px;">${item.valueHtml}</td>
      </tr>
    `).join('');

    const callCtaHtml = phone ? `
      <div style="text-align: center; margin: 24px 0 12px 0;">
        <a href="tel:${escapeHtml(phone)}" style="display: inline-block; background-color: #0b1f38; color: #9afb16; font-weight: 700; font-size: 15px; padding: 12px 28px; border-radius: 8px; text-decoration: none; border: 1px solid rgba(154, 251, 22, 0.4);">
          📞 Call ${escapeHtml(name || 'Lead')} Directly
        </a>
      </div>
    ` : '';

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8" /></head>
      <body style="margin: 0; padding: 20px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
          
          <!-- Header -->
          <div style="background-color: #0b1f38; padding: 22px 24px; text-align: left; border-bottom: 3px solid #9afb16;">
            <div style="display: inline-block; background-color: rgba(154, 251, 22, 0.15); color: #9afb16; border: 1px solid rgba(154, 251, 22, 0.4); padding: 3px 8px; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px;">
              MultiPro Digital • Epoxy Lead Engine
            </div>
            <h1 style="color: #ffffff; margin: 4px 0 0 0; font-size: 19px; font-weight: 800; letter-spacing: -0.01em;">
              ${escapeHtml(subject)}
            </h1>
          </div>

          <!-- Body Content -->
          <div style="padding: 24px;">
            <table style="width: 100%; border-collapse: collapse; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
              <tbody>
                ${rowsHtml}
              </tbody>
            </table>

            ${callCtaHtml}
          </div>

          <!-- Footer -->
          <div style="background-color: #f8fafc; padding: 14px 24px; border-top: 1px solid #e2e8f0; text-align: center;">
            <p style="margin: 0; color: #64748b; font-size: 12px;">
              Sent instantly from the <strong>MultiPro Digital</strong> high-converting lead engine.
            </p>
          </div>

        </div>
      </body>
      </html>
    `;

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Multipro Digital <leads@multiprodigital.com>',
      to: 'mahabubkabir@multiprodigital.com',
      subject: subject,
      html: emailHtml,
      ...(email ? { replyTo: String(email) } : {}),
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ 
        success: false, 
        error: 'Our secure email engine is temporarily unavailable. We have been notified.' 
      }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Lead sent successfully' });

  } catch (error: any) {
    console.error('API Connection Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Technical error connecting to the mail server. Please try again.' 
    }, { status: 500 });
  }
}
