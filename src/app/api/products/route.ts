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

export async function GET() {
  try {
    const products = getProducts();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read products data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const products = getProducts();
    
    // Create new product with a generated ID
    const newProduct = {
      ...body,
      id: Date.now(), // simple unique id generator
    };
    
    products.push(newProduct);
    saveProducts(products);
    
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save product data' }, { status: 500 });
  }
}
