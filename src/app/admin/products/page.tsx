'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';
import { Edit, Trash2, Plus } from 'lucide-react';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setProducts(products.filter(p => p.id !== id));
      } else {
        alert('Failed to delete product.');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('An error occurred while deleting.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-neutral-500 mt-1">Manage your product listings and inventory.</p>
        </div>
        <Link 
          href="/admin/products/new" 
          className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
        >
          <Plus size={18} />
          Add Product
        </Link>
      </div>

      {loading ? (
        <div className="animate-pulse space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-16 bg-neutral-200 dark:bg-neutral-800 rounded-md"></div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800">
          <p className="text-neutral-500 mb-4">No products found.</p>
          <Link 
            href="/admin/products/new" 
            className="text-primary hover:underline font-medium"
          >
            Create your first product
          </Link>
        </div>
      ) : (
        <div className="bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                  <th className="p-4 font-medium text-neutral-500 w-16">Image</th>
                  <th className="p-4 font-medium text-neutral-500">Name</th>
                  <th className="p-4 font-medium text-neutral-500">Price</th>
                  <th className="p-4 font-medium text-neutral-500">Quantity</th>
                  <th className="p-4 font-medium text-neutral-500 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                    <td className="p-4">
                      {product.image ? (
                        <div className="w-12 h-12 rounded-md overflow-hidden bg-neutral-100 flex-shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-400">
                          No img
                        </div>
                      )}
                    </td>
                    <td className="p-4 font-medium">{product.name}</td>
                    <td className="p-4">{product.price}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        product.quantity > 10 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                          : product.quantity > 0
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {product.quantity} in stock
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Link 
                          href={`/admin/products/${product.id}`}
                          className="p-2 text-neutral-500 hover:text-black dark:hover:text-white transition-colors rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        >
                          <Edit size={18} />
                        </Link>
                        <button 
                          onClick={() => handleDelete(product.id)}
                          className="p-2 text-neutral-500 hover:text-red-600 dark:hover:text-red-400 transition-colors rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
