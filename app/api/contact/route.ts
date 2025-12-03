import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create a transporter using Gmail
    // You'll need to use App Password for Gmail (not your regular password)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    // Email content to send to YOU
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email where you want to receive messages
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #00f0ff; padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: #0a192f; margin: 0;">New Contact Form Message</h2>
          </div>
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #00f0ff; border-bottom: 2px solid #00f0ff; padding-bottom: 10px;">Contact Details</h3>
            <p style="margin: 15px 0;"><strong style="color: #0a192f;">Name:</strong> <span style="color: #333;">${name}</span></p>
            <p style="margin: 15px 0;"><strong style="color: #0a192f;">Email:</strong> <a href="mailto:${email}" style="color: #00f0ff; text-decoration: none;">${email}</a></p>
            
            <h3 style="color: #00f0ff; border-bottom: 2px solid #00f0ff; padding-bottom: 10px; margin-top: 30px;">Message</h3>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin-top: 15px;">
              <p style="color: #333; line-height: 1.6; margin: 0;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 12px;">
              <p>This message was sent from your portfolio website contact form.</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
