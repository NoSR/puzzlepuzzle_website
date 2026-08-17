import { NextResponse } from 'next/server';

export async function GET() {
  // TODO: 실제 DB 연동
  return NextResponse.json({
    heroImage: 'https://placehold.co/1920x1080/222/FFF?text=Hero+Banner',
    brandName: 'PuzzlePuzzle',
  });
}
