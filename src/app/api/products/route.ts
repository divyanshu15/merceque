import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to read products data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Create new product in Postgres
    const newProduct = await prisma.product.create({
      data: {
        name: body.name,
        handle: body.handle,
        price: body.price,
        description: body.description,
        image: body.image || "",
        images: body.images || [],
        quantity: parseInt(body.quantity, 10) || 0,
        category: body.category || "individual",
      }
    });
    
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Error saving product:', error);
    return NextResponse.json({ error: 'Failed to save product data' }, { status: 500 });
  }
}
