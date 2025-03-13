import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: Number(process.env.EMAIL_PORT) === 465, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

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

    // Prepare email content
    const emailSubject = `Neue Kontaktanfrage von ${data.name}`;
    const emailText = `
      Name: ${data.name}
      E-Mail: ${data.email}
      Unternehmen: ${data.company || 'Nicht angegeben'}
      Nachricht: ${data.message}
      Zeitpunkt: ${new Date().toLocaleString('de-DE')}
    `;
    const emailHtml = `
      <h2>Neue Kontaktanfrage über das Formular</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>E-Mail:</strong> ${data.email}</p>
      <p><strong>Unternehmen:</strong> ${data.company || 'Nicht angegeben'}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
      <p><strong>Zeitpunkt:</strong> ${new Date().toLocaleString('de-DE')}</p>
    `;

    try {
      // Send email to both recipients
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: [process.env.EMAIL_RECIPIENT1, process.env.EMAIL_RECIPIENT2].filter(Boolean).join(', '),
        replyTo: data.email,
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
      });

      console.log('Email sent successfully to recipients');
      
      // Return success response
      return NextResponse.json({ 
        success: true, 
        message: 'Vielen Dank für Deine Nachricht! Wir melden uns in Kürze bei Dir.' 
      });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      
      // Log the form data even if email sending fails
      console.log('Form submission received but email failed:', {
        name: data.name,
        email: data.email,
        company: data.company || 'Not provided',
        message: data.message,
        consent: data.consent,
        timestamp: new Date().toISOString()
      });
      
      // Return success to the user even if email fails
      // In a production environment, you might want to handle this differently
      return NextResponse.json({ 
        success: true, 
        message: 'Vielen Dank für Deine Nachricht! Wir melden uns in Kürze bei Dir.' 
      });
    }
    
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.' },
      { status: 500 }
    );
  }
}
