import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(200, 'Name is too long'),
  email: z.string().trim().min(1, 'Email is required').email('Invalid email address'),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, 'Message is required').max(5000, 'Message is too long'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const first = result.error.issues[0];
      return NextResponse.json(
        { error: first?.message ?? 'Validation failed' },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    // Log to console (dev). For production, send email via Resend/etc.
    console.log('[Contact] New message:', { name, email, subject, message });

    // Optional: send email when RESEND_API_KEY is set
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ from: '...', to: process.env.CONTACT_EMAIL, replyTo: email, subject: subject ?? 'Contact form', html: `From: ${name}<br>${message}` });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
