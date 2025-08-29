import { NextRequest, NextResponse } from 'next/server';
import { resend, emailConfig } from '../../../lib/resend';

export async function POST(request: NextRequest) {
  try {
    console.log('=== EMAIL SEND PROCESS START ===');
    console.log('1. Starting email send process...');

    const body = await request.json();
    console.log('2. Request body received:', body);

    const { name, email, message } = body;
    console.log('3. Extracted data:', {
      name,
      email,
      message: message?.substring(0, 50) + '...',
    });

    // Validate required fields
    if (!name || !email || !message) {
      console.log('4. Validation failed: missing required fields');
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('4. Validation failed: invalid email format');
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('4. Validation passed');
    console.log('5. Preparing to send email with config:', {
      from: emailConfig.from,
      to: emailConfig.to,
      subject: `${emailConfig.subject}: ${name}`,
    });

    console.log('6. About to call Resend API...');

    // Send email using Resend with HTML template
    const { data, error } = await resend.emails.send({
      from: emailConfig.from,
      to: [emailConfig.to],
      subject: `${emailConfig.subject}: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #ee1d52; padding-bottom: 10px;">
            New Contact Message from Portfolio
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #ee1d52;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="background: #e8f4fd; padding: 15px; border-radius: 5px; border-left: 4px solid #007acc;">
            <p style="margin: 0; color: #005a8b;">
              <strong>Sent from:</strong> Your Portfolio Website<br>
              <strong>Time:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Message from Portfolio

Name: ${name}
Email: ${email}
Message: ${message}

Sent from: Your Portfolio Website
Time: ${new Date().toLocaleString()}
      `,
    });

    console.log('7. Resend API response received:', { data, error });

    if (error) {
      console.error('8. Resend API error:', error);
      return NextResponse.json(
        { error: `Failed to send email: ${error.message || 'Unknown error'}` },
        { status: 500 }
      );
    }

    console.log('8. Email sent successfully:', data);
    console.log('=== EMAIL SEND PROCESS END ===');

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('=== SERVER ERROR ===');
    console.error('Error type:', typeof error);
    console.error('Error constructor:', error?.constructor?.name);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    console.error('Full error object:', error);

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
