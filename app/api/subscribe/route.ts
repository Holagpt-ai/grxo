import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Zod schema for email validation (trim whitespace)
const subscribeSchema = z.object({
  email: z.string().trim().min(1, 'Email is required').email('Invalid email address'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validationResult = subscribeSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.issues[0]?.message || 'Invalid email address' },
        { status: 400 }
      );
    }

    const { email } = validationResult.data;

    // Log to console (dev). For production, set RESEND_API_KEY and use Resend, or integrate Mailchimp/etc.
    console.log('[Subscribe] New subscription:', email);

    // Optional: Resend welcome email when RESEND_API_KEY is set
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ from: '...', to: email, subject: '...', html: '...' });

    return NextResponse.json(
      { message: 'Successfully subscribed', email },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscribe API error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0]?.message || 'Validation error' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to process subscription. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
