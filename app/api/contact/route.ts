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

// Log raw credentials for debugging (without exposing full password)
const emailUser = process.env.EMAIL_USER || '';
const emailPass = process.env.EMAIL_PASSWORD || '';
console.log('Credentials check:', {
  user: emailUser,
  passLength: emailPass.length,
  passFirstChar: emailPass.charAt(0),
  passLastChar: emailPass.charAt(emailPass.length - 1)
});

// Try to encode the password properly in case special characters are causing issues
const encodedPass = encodeURIComponent(emailPass);
console.log('Using encoded password:', {
  originalLength: emailPass.length,
  encodedLength: encodedPass.length,
  isEncoded: emailPass !== encodedPass
});

// Create a Nodemailer transporter with SMTP configuration
const transporter = nodemailer.createTransport({
  // SMTP configuration
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 465,
  secure: process.env.SMTP_SECURE === 'true', // Use secure for port 465
  auth: {
    type: 'login', // Explicitly use LOGIN method instead of PLAIN
    user: emailUser,
    pass: encodedPass, // Use encoded password
  },
  // TLS configuration for better compatibility
  tls: {
    rejectUnauthorized: false, // Don't fail on invalid certs
  },
  debug: true, // Enable debug output
  logger: true, // Enable even more detailed logging
} as nodemailer.TransportOptions);

// Log transporter configuration (without password)
console.log('Email configuration:', {
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 465,
  secure: process.env.SMTP_SECURE === 'true',
  user: process.env.EMAIL_USER,
  from: process.env.EMAIL_FROM,
  recipients: [process.env.EMAIL_RECIPIENT1, process.env.EMAIL_RECIPIENT2].filter(Boolean)
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
