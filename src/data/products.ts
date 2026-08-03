import productsData from './products.json';

export interface Product {
  id: number;
  name: string;
  handle: string;
  price: string;
  description: string;
  image: string;
  images: string[];
  quantity: number;
  category?: string;
}

export const products: Product[] = productsData as Product[];
