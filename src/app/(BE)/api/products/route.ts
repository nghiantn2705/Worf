import prisma from '@/shared/libs/prismadb';
import { NextResponse } from 'next/server';

export async function GET() {
  const products = await prisma.products.findMany();

  return NextResponse.json(products);
}
