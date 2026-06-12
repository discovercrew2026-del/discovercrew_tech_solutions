import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, company, message } = await request.json();

    // Log the request payload securely
    console.log("Processing contact form submission:", { name, email, company, message });

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Send notification to DiscoverCrew
    const adminEmail = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'discovercrew2026@gmail.com',
      subject: 'New Contact Form Submission - DiscoverCrew',
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (adminEmail.error) {
       console.error('Resend Admin Email Error:', adminEmail.error);
       return NextResponse.json({ success: false, error: adminEmail.error.message || 'Failed to send admin email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Internal API crash/error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
