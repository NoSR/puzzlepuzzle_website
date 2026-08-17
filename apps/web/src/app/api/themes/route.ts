import { NextResponse } from 'next/server';

export async function GET() {
  // TODO: 실제 DB 연동
  return NextResponse.json([
    {
      id: '1',
      title: '비밀의 화원',
      difficulty: 4,
      image: 'https://placehold.co/800x600/333/FFF?text=Theme+1',
    },
    {
      id: '2',
      title: '폐병원 탈출',
      difficulty: 5,
      image: 'https://placehold.co/800x600/444/FFF?text=Theme+2',
    }
  ]);
}
