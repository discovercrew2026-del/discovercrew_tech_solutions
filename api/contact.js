import { Resend } from 'resend';
import 'dotenv/config'; // Ensures .env is loaded during local dev

if (!process.env.RESEND_API_KEY || !process.env.RESEND_API_KEY.startsWith("re_")) {
  console.error("Invalid or missing RESEND_API_KEY");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    const { name, email, company, message } = req.body;

    // Log the request payload securely (omit sensitive keys if any existed)
    console.log("Processing contact form submission:", { name, email, company, message });

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    // 1. Send notification to DiscoverCrew
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
       return res.status(500).json({ success: false, error: adminEmail.error.message || 'Failed to send admin email' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Internal API crash/error:', error);
    return res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
  }
}

