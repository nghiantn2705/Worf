import prisma from '@/shared/libs/prismadb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name } = body;
    const res = await prisma.categorys.create({
      data: {
        name,
      },
    });

    return NextResponse.json('Thêm cate thành công');
  } catch (e) {
    return NextResponse.json({ error: 'abccc' }, { status: 400 });
  }
}
