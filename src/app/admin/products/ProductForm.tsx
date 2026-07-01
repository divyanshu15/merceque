'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/data/products';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';

interface ProductFormProps {
  initialData?: Product;
  isNew?: boolean;
}

export default function ProductForm({ initialData, isNew = false }: ProductFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<Product>>(
    initialData || {
      name: '',
      handle: '',
      price: '',
      description: '',
      image: '',
      images: [],
      quantity: 0,
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) || 0 : value
    }));
  };

  // Helper for generating handle automatically
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setFormData(prev => ({
      ...prev,
      name,
      // Auto-generate handle only for new products if handle isn't manually changed much
      ...(isNew && { handle: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') })
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = isNew ? '/api/products' : `/api/products/${initialData?.id}`;
      const method = isNew ? 'POST' : 'PUT';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/admin/products');
        router.refresh();
      } else {
        alert('Failed to save product.');
      }
    } catch (error) {
      console.error('Error saving product:', error);
      alert('An error occurred while saving.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/products" 
            className="p-2 text-neutral-500 hover:text-black dark:hover:text-white transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">
            {isNew ? 'Add New Product' : 'Edit Product'}
          </h1>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-6 py-2.5 rounded-md font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          <Save size={18} />
          {loading ? 'Saving...' : 'Save Product'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6 bg-white dark:bg-neutral-950 p-6 md:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleNameChange}
              className="w-full p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
              placeholder="e.g., Premium Bamboo Toothbrush"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">Description</label>
            <textarea
              id="description"
              name="description"
              required
              rows={5}
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
              placeholder="Product description goes here..."
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-neutral-950 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <label htmlFor="price" className="text-sm font-medium">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                required
                value={formData.price}
                onChange={handleChange}
                className="w-full p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                placeholder="e.g., $15.99"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity" className="text-sm font-medium">Quantity in Stock</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                required
                value={formData.quantity}
                onChange={handleChange}
                className="w-full p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-950 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-6">
            <div className="space-y-2">
              <label htmlFor="image" className="text-sm font-medium">Main Image URL</label>
              <input
                type="text"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm"
                placeholder="/product/my-product/1.png"
              />
              {formData.image && (
                <div className="mt-4 aspect-square rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="handle" className="text-sm font-medium">URL Handle</label>
              <input
                type="text"
                id="handle"
                name="handle"
                required
                value={formData.handle}
                onChange={handleChange}
                className="w-full p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
