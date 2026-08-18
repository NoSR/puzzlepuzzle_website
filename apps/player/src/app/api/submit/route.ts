import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // TODO: D1 DB에 consents 및 players 저장 처리 로직 추가
    console.log('Received submission:', data);
    
    return NextResponse.json({ success: true, message: 'Submitted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
