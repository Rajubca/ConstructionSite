import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request: Request) {
  const data = await request.formData();
  const file: File | null = data.get('file') as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false, message: 'No file uploaded' }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Generate unique filename
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
  // Sanitize filename
  const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, '-');
  const filename = `${uniqueSuffix}-${originalName}`;

  const uploadDir = join(process.cwd(), 'public/uploads');
  const filepath = join(uploadDir, filename);

  try {
    await writeFile(filepath, buffer);
    const url = `/uploads/${filename}`;
    return NextResponse.json({ success: true, url });
  } catch (error) {
    console.error('Error saving file:', error);
    return NextResponse.json({ success: false, message: 'Error saving file' }, { status: 500 });
  }
}
