import { NextResponse } from 'next/server';

export async function GET() {
  // TODO: D1 DB 연동
  return NextResponse.json({
    requireSignature: true,
    requiredFields: ['name', 'phone', 'email'],
    requireAllPlayers: false,
    showBriefing: true,
    briefingMediaUrl: 'https://placehold.co/1920x1080.mp4',
    briefingHtml: '<p>안전 수칙을 준수해 주세요.</p>'
  });
}
