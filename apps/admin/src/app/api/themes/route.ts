import { NextResponse } from 'next/server';

// GET: 테마 목록 조회
export async function GET() {
  const dummyThemes = [
    { id: 1, name: 'Horror Escape', description: 'Scary room', price: 20000 },
    { id: 2, name: 'Mystery Room', description: 'Solve the mystery', price: 15000 },
  ];
  return NextResponse.json(dummyThemes);
}

// POST: 테마 생성
export async function POST(request: Request) {
  try {
    const body = await request.json();
    // TODO: DB Insert logic here
    return NextResponse.json({ success: true, data: body }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}

// PUT: 테마 수정 (혹은 PATCH)
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    // TODO: DB Update logic here
    return NextResponse.json({ success: true, data: body });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}

// DELETE: 테마 삭제
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    // TODO: DB Delete logic here
    return NextResponse.json({ success: true, id });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}
