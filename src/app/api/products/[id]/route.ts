import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'products.json');

function getProducts() {
  const fileContent = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(fileContent);
}

function saveProducts(products: any[]) {
  fs.writeFileSync(dataFilePath, JSON.stringify(products, null, 2), 'utf8');
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const body = await request.json();
    const products = getProducts();
    const { id } = await params;
    
    const index = products.findIndex((p: any) => p.id.toString() === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    
    // Update the product
    products[index] = { ...products[index], ...body };
    saveProducts(products);
    
    return NextResponse.json(products[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update product data' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const products = getProducts();
    const { id } = await params;
    
    const filteredProducts = products.filter((p: any) => p.id.toString() !== id);
    
    if (filteredProducts.length === products.length) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    
    saveProducts(filteredProducts);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
