import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // TODO: Submit to Google Sheets
    // This is where you would integrate with Google Sheets API
    // Example implementation:
    //
    // const auth = new google.auth.GoogleAuth({
    //   credentials: {
    //     client_email: process.env.GOOGLE_CLIENT_EMAIL,
    //     private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    //   },
    //   scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    // });
    //
    // const sheets = google.sheets({ version: 'v4', auth });
    //
    // await sheets.spreadsheets.values.append({
    //   spreadsheetId: process.env.GOOGLE_SHEET_ID,
    //   range: 'Sheet1!A:F',
    //   valueInputOption: 'USER_ENTERED',
    //   requestBody: {
    //     values: [[
    //       new Date().toISOString(),
    //       data.name,
    //       data.email,
    //       data.phone || '',
    //       data.subject,
    //       data.message,
    //     ]],
    //   },
    // });

    // For now, just log the data
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      ...data,
    });

    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
