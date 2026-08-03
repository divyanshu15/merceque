import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, product, quantity } = body;

    if (!name || !email || !product || !quantity) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const order = await prisma.b2BOrder.create({
      data: {
        name,
        email,
        product,
        quantity,
      },
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error('B2B Order submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit order' },
      { status: 500 }
    );
  }
}
