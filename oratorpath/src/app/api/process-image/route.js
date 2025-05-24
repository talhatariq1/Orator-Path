// Temporarily disabled image processing to fix deployment issues
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    success: false, 
    message: 'Image processing temporarily disabled for deployment' 
  }, { status: 503 });
}

/* Original implementation
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { createCanvas, loadImage } from 'canvas';

export async function GET() {
  try {
    // Source and destination paths
    const sourcePath = path.join(process.cwd(), 'public', 'Hero_3d.png');
    const destPath = path.join(process.cwd(), 'public', 'Hero_3d_transparent.png');
    
    // Load the image
    const image = await loadImage(sourcePath);
    
    // Create a canvas with the same dimensions as the image
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    
    // Draw the image on the canvas
    ctx.drawImage(image, 0, 0);
    
    // Get the image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    // Loop through the pixels and make black pixels transparent
    for (let i = 0; i < data.length; i += 4) {
      // If pixel is black or close to black (allowing some tolerance)
      if (data[i] < 20 && data[i + 1] < 20 && data[i + 2] < 20) {
        // Set alpha channel to 0 (transparent)
        data[i + 3] = 0;
      }
    }
    
    // Put the modified image data back on the canvas
    ctx.putImageData(imageData, 0, 0);
    
    // Save the modified image
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(destPath, buffer);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Image processed successfully', 
      path: '/Hero_3d_transparent.png' 
    });
  } catch (error) {
    console.error('Error processing image:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Error processing image', 
      error: error.message 
    }, { status: 500 });
  }
}
*/