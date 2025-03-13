import { NextRequest, NextResponse } from 'next/server';

// Define the expected request body structure
interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  consent: boolean;
}

// Simple email validation regex
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export async function POST(request: NextRequest) {
  try {
    // Get the request body
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.name.trim()) {
      return NextResponse.json(
        { error: 'Name ist erforderlich' },
        { status: 400 }
      );
    }

    if (!data.email || !emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Gültige E-Mail-Adresse ist erforderlich' },
        { status: 400 }
      );
    }

    if (!data.message || !data.message.trim()) {
      return NextResponse.json(
        { error: 'Nachricht ist erforderlich' },
        { status: 400 }
      );
    }

    if (!data.consent) {
      return NextResponse.json(
        { error: 'Zustimmung zur Datenschutzerklärung ist erforderlich' },
        { status: 400 }
      );
    }

    // In a real implementation, you would send an email here
    // For example, using nodemailer, SendGrid, or another email service
    
    // For now, we'll log the data to the console
    console.log('Form submission received:', {
      name: data.name,
      email: data.email,
      company: data.company || 'Not provided',
      message: data.message,
      consent: data.consent,
      timestamp: new Date().toISOString()
    });
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Vielen Dank für Deine Nachricht! Wir melden uns in Kürze bei Dir.' 
    });
    
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.' },
      { status: 500 }
    );
  }
}
