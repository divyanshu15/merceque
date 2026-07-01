'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProductForm from '../ProductForm';
import { Product } from '@/data/products';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EditProductPage() {
  const params = useParams();
  const id = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('/api/products');
        if (res.ok) {
          const products: Product[] = await res.json();
          const found = products.find(p => p.id.toString() === id);
          if (found) {
            setProduct(found);
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-pulse">
        <div className="h-10 w-48 bg-neutral-200 dark:bg-neutral-800 rounded-md"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 h-96 bg-neutral-200 dark:bg-neutral-800 rounded-xl"></div>
          <div className="h-96 bg-neutral-200 dark:bg-neutral-800 rounded-xl"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-neutral-500 mb-6">The product you are trying to edit does not exist.</p>
        <Link 
          href="/admin/products" 
          className="inline-flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md font-medium"
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>
      </div>
    );
  }

  return <ProductForm initialData={product} isNew={false} />;
}
