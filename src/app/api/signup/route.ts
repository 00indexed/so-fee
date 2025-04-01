import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// Initialize auth
const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];

// Initialize the sheet
const initializeSheet = async () => {
  try {
    const jwt = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: SCOPES,
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, jwt);
    await doc.loadInfo();
    return doc;
  } catch (error) {
    console.error('Error initializing sheet:', error);
    return null;
  }
};

export async function POST(request: NextRequest) {
  try {
    // Parse the request body to get the email
    const { email } = await request.json();

    // Validate the email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Initialize Google Sheets
    const doc = await initializeSheet();
    if (!doc) {
      return NextResponse.json(
        { success: false, message: 'Error connecting to our system. Please try again later.' },
        { status: 500 }
      );
    }

    // Get the first sheet
    const sheet = doc.sheetsByIndex[0];

    // Check if headers exist and set them if they don't
    const rows = await sheet.getRows();
    if (rows.length === 0) {
      // Set up headers if sheet is empty
      await sheet.setHeaderRow(['email', 'signupDate', 'source']);
    }
    
    // Check for duplicate emails
    const emailExists = rows.some((row: GoogleSpreadsheetRow) => row.get('email') === email);

    if (emailExists) {
      return NextResponse.json(
        { success: false, message: 'This email is already registered' },
        { status: 400 }
      );
    }

    // Add the new row
    await sheet.addRow({
      email,
      signupDate: new Date().toISOString(),
      source: 'Landing Page'
    });

    console.log('New signup:', email);

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for signing up! We will keep you updated on our progress.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
} 