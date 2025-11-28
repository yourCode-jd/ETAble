import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to escape HTML
function escapeHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, role, country, state, city, notes } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Get admin email from environment variable
    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail) {
      return NextResponse.json(
        { error: 'Admin email not configured' },
        { status: 500 }
      );
    }

  

    // Escape user input for safe HTML rendering
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : '';
    const safeRole = role ? escapeHtml(role) : '';
    const safeCountry = country ? escapeHtml(country) : '';
    const safeState = state ? escapeHtml(state) : '';
    const safeCity = city ? escapeHtml(city) : '';
    const safeNotes = notes ? escapeHtml(notes).replace(/\n/g, '<br>') : '';

    // Format the email content
    const emailContent = `
New Waitlist Submission

Name: ${safeName}
Email: ${safeEmail}
Phone: ${safePhone || 'Not provided'}
Role: ${safeRole || 'Not provided'}
Country: ${safeCountry || 'Not provided'}
State: ${safeState || 'Not provided'}
City: ${safeCity || 'Not provided'}
Notes: ${safeNotes || 'No notes provided'}

---
Submitted at: ${new Date().toLocaleString()}
    `.trim();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Waitlist <onboarding@resend.dev>', 
      to: [adminEmail],
      subject: `New Waitlist Submission from ${safeName}`,
      text: emailContent,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #000000; font-family: 'DM Sans', Arial, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #000000;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #000000; border: 1px solid #d4af37; border-radius: 8px;">
          <!-- Header with Logo -->
          <tr>
            <td align="center" style="padding: 40px 30px 30px 30px; border-bottom: 1px solid rgba(212, 175, 55, 0.3);">
              <div style="margin: 0 auto; text-align: center;">
                <h1 style="margin: 0; font-size: 42px; font-weight: 700; letter-spacing: 3px; color: #d4af37; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; text-transform: uppercase; display: inline-block; text-shadow: 0 2px 4px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.2);">
                  ETAbleAI
                </h1>
              </div>
              <p style="margin: 20px 0 0 0; font-size: 11px; letter-spacing: 2px; color: rgba(212, 175, 55, 0.9); text-transform: uppercase;">WELCOME TO</p>
            </td>
          </tr>
          
          <!-- Title -->
          <tr>
            <td align="center" style="padding: 30px 30px 20px 30px;">
              <h2 style="margin: 0; font-size: 28px; font-weight: 500; color: #d4af37; text-align: center; letter-spacing: -0.5px;">New Waitlist Submission</h2>
            </td>
          </tr>
          
          <!-- Content Card -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: rgba(212, 175, 55, 0.05); border: 1px solid rgba(212, 175, 55, 0.2); border-radius: 6px; padding: 20px;">
                <tr>
                  <td>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(212, 175, 55, 0.2);">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="padding: 0; font-weight: 600; color: #d4af37; font-size: 14px; width: 120px; vertical-align: top;">Name:</td>
                              <td style="padding: 0; color: #FFE7AC; font-size: 14px; vertical-align: top;">${safeName}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(212, 175, 55, 0.2);">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="padding: 0; font-weight: 600; color: #d4af37; font-size: 14px; width: 120px; vertical-align: top;">Email:</td>
                              <td style="padding: 0; color: #FFE7AC; font-size: 14px; vertical-align: top;"><a href="mailto:${safeEmail}" style="color: #d4af37; text-decoration: none;">${safeEmail}</a></td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(212, 175, 55, 0.2);">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="padding: 0; font-weight: 600; color: #d4af37; font-size: 14px; width: 120px; vertical-align: top;">Phone:</td>
                              <td style="padding: 0; color: #FFE7AC; font-size: 14px; vertical-align: top;">${safePhone || '<span style="color: rgba(255, 231, 172, 0.6);">Not provided</span>'}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(212, 175, 55, 0.2);">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="padding: 0; font-weight: 600; color: #d4af37; font-size: 14px; width: 120px; vertical-align: top;">Role:</td>
                              <td style="padding: 0; color: #FFE7AC; font-size: 14px; vertical-align: top;">${safeRole || '<span style="color: rgba(255, 231, 172, 0.6);">Not provided</span>'}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(212, 175, 55, 0.2);">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="padding: 0; font-weight: 600; color: #d4af37; font-size: 14px; width: 120px; vertical-align: top;">Country:</td>
                              <td style="padding: 0; color: #FFE7AC; font-size: 14px; vertical-align: top;">${safeCountry || '<span style="color: rgba(255, 231, 172, 0.6);">Not provided</span>'}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(212, 175, 55, 0.2);">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="padding: 0; font-weight: 600; color: #d4af37; font-size: 14px; width: 120px; vertical-align: top;">State:</td>
                              <td style="padding: 0; color: #FFE7AC; font-size: 14px; vertical-align: top;">${safeState || '<span style="color: rgba(255, 231, 172, 0.6);">Not provided</span>'}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(212, 175, 55, 0.2);">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="padding: 0; font-weight: 600; color: #d4af37; font-size: 14px; width: 120px; vertical-align: top;">City:</td>
                              <td style="padding: 0; color: #FFE7AC; font-size: 14px; vertical-align: top;">${safeCity || '<span style="color: rgba(255, 231, 172, 0.6);">Not provided</span>'}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      ${notes ? `
                      <tr>
                        <td style="padding: 12px 0;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="padding: 0; font-weight: 600; color: #d4af37; font-size: 14px; width: 120px; vertical-align: top;">Notes:</td>
                              <td style="padding: 0; color: #FFE7AC; font-size: 14px; vertical-align: top; white-space: pre-wrap;">${safeNotes}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td align="center" style="padding: 20px 30px 30px 30px; border-top: 1px solid rgba(212, 175, 55, 0.3);">
              <p style="margin: 0; color: rgba(212, 175, 55, 0.6); font-size: 12px; text-align: center;">
                Submitted at: ${new Date().toLocaleString()}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

