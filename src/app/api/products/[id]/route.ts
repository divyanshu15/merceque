import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import prisma from '@/lib/prisma';


export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const body = await request.json();
    const { id } = await params;
    
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name: body.name,
        handle: body.handle,
        price: body.price,
        description: body.description,
        image: body.image,
        images: body.images,
        quantity: body.quantity !== undefined ? parseInt(body.quantity, 10) : undefined,
        category: body.category,
        offerName: body.offerName !== undefined ? body.offerName : undefined,
        discountPercentage: body.discountPercentage !== undefined ? (body.discountPercentage ? parseInt(body.discountPercentage, 10) : null) : undefined,
      }
    });
    
    // Bust Next.js cache in production so the storefront updates immediately
    revalidatePath('/', 'layout');
    
    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json({ error: 'Failed to update product data' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    
    await prisma.product.delete({
      where: { id }
    });
    
    // Bust Next.js cache
    revalidatePath('/', 'layout');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
