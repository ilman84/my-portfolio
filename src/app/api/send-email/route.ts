import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import environmentConfig from '../../../../environment.config.js';

export async function POST(request: NextRequest) {
  try {
    // Check if API key exists
    const apiKey = process.env.RESEND_API_KEY || environmentConfig.emailService.config.resend.apiKey;
    if (!apiKey || apiKey.includes('your_')) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please set RESEND_API_KEY in environment variables.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get recipient email from environment or use default
    const recipientEmail = process.env.YOUR_EMAIL || environmentConfig.emailService.config.resend.toEmail;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Ganti dengan domain Anda
      to: [recipientEmail],
      subject: `New Contact from Portfolio: ${name}`,
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

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
