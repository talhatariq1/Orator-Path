import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Removed image processing code using canvas
    return NextResponse.json({ 
      success: false, 
      message: 'Image processing is currently disabled.' 
    }, { status: 503 }); // Service Unavailable
  } catch (error) {
    console.error('Error processing image:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Error processing image', 
      error: error.message 
    }, { status: 500 });
  }
}