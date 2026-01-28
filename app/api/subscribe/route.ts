import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Zod schema for email validation
const subscribeSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validationResult = subscribeSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.errors[0]?.message || 'Invalid email address' },
        { status: 400 }
      );
    }

    const { email } = validationResult.data;

    // TODO: Integrate with email service (Resend, Mailchimp, etc.)
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'DJ Goldie XO <newsletter@djgoldiexo.com>',
    //   to: email,
    //   subject: 'Welcome to DJ Goldie XO Newsletter!',
    //   html: '<p>Thanks for subscribing...</p>',
    // });

    // Example with Mailchimp:
    // const response = await fetch(`https://${process.env.MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.MAILCHIMP_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email_address: email,
    //     status: 'subscribed',
    //   }),
    // });

    // Placeholder: Log email for now (remove in production)
    console.log('Newsletter subscription:', email);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter', email },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscribe API error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0]?.message || 'Validation error' },
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
