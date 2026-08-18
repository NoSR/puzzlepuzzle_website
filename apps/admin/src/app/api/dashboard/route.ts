import { NextResponse } from 'next/server';

export async function GET() {
  // 전체 테마 리스트 및 상태 더미 데이터
  const themes = [
    { id: 1, name: 'Horror Escape', status: 'ACTIVE' },
    { id: 2, name: 'Mystery Room', status: 'INACTIVE' },
    { id: 3, name: 'Sci-Fi Adventure', status: 'ACTIVE' },
  ];

  // 일/주/월 단위 예상 매출액 더미 데이터
  const expectedRevenue = {
    daily: 500000,
    weekly: 3500000,
    monthly: 15000000,
  };

  return NextResponse.json({ themes, expectedRevenue });
}
