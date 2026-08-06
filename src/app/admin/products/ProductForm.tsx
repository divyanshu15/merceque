'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/data/products';
import Link from 'next/link';
import { ArrowLeft, Save, Upload, X } from 'lucide-react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

// Load ReactQuill dynamically to prevent SSR hydration errors
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

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
      category: 'individual',
      quantity: 0,
      offerName: '',
      discountPercentage: null,
    }
  );

  const [uploadingImage, setUploadingImage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: (name === 'quantity' || name === 'discountPercentage') ? (value ? parseInt(value) : null) : value,
    }));
  };

  const handleDescriptionChange = (content: string) => {
    setFormData((prev) => ({
      ...prev,
      description: content,
    }));
  };

  // Helper for generating handle automatically
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setFormData((prev) => ({
      ...prev,
      name,
      // Auto-generate handle only for new products if handle isn't manually changed much
      ...(isNew && { handle: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') }),
    }));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, isMain: boolean = false) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    
    setUploadingImage(true);
    const data = new FormData();
    data.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data,
      });

      if (res.ok) {
        const json = await res.json();
        const url = json.url;
        
        if (isMain) {
          setFormData((prev) => ({ ...prev, image: url }));
        } else {
          setFormData((prev) => ({ 
            ...prev, 
            images: [...(prev.images || []), url]
          }));
        }
      } else {
        alert('Failed to upload image.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred during upload.');
    } finally {
      setUploadingImage(false);
      // Reset input
      e.target.value = '';
    }
  };

  const removeAdditionalImage = (idx: number) => {
    setFormData((prev) => {
      const newImages = [...(prev.images || [])];
      newImages.splice(idx, 1);
      return { ...prev, images: newImages };
    });
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
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8 pb-20">
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
          disabled={loading || uploadingImage}
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
            <label className="text-sm font-medium">Description</label>
            <div className="bg-white rounded-md border border-neutral-200">
              <ReactQuill
                theme="snow"
                value={formData.description}
                onChange={handleDescriptionChange}
                className="h-64 mb-12"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-neutral-950 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <label htmlFor="isKit" className="text-sm font-medium cursor-pointer">Is this a Kit Product?</label>
              <button
                type="button"
                id="isKit"
                role="switch"
                aria-checked={formData.category === 'combo'}
                onClick={() => setFormData(prev => ({ ...prev, category: prev.category === 'combo' ? 'individual' : 'combo' }))}
                className={`${
                  formData.category === 'combo' ? 'bg-black dark:bg-white' : 'bg-neutral-200 dark:bg-neutral-700'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white`}
              >
                <span
                  className={`${
                    formData.category === 'combo' ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white dark:bg-black transition-transform`}
                />
              </button>
            </div>

            {formData.category !== 'combo' && (
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
            )}

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
              <label className="text-sm font-medium">Main Image</label>
              {formData.image ? (
                <div className="relative mt-2 aspect-square rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={formData.image} alt="Main Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                      className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-2">
                  <label className="flex flex-col items-center justify-center w-full aspect-square border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg cursor-pointer bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 text-neutral-500">
                      <Upload size={24} className="mb-2" />
                      <p className="text-sm text-center px-4">{uploadingImage ? 'Uploading...' : 'Click to upload main image'}</p>
                    </div>
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, true)} disabled={uploadingImage} />
                  </label>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Additional Images</label>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {formData.images?.map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-md overflow-hidden border border-neutral-200 dark:border-neutral-800 group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={`Preview ${idx}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeAdditionalImage(idx)}
                      className="absolute top-1 right-1 bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
                
                <label className="flex items-center justify-center aspect-square border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-md cursor-pointer bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                   <Upload size={16} className="text-neutral-500" />
                   <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, false)} disabled={uploadingImage} />
                </label>
              </div>
            </div>

            <div className="space-y-2 pt-4">
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

          {/* Product Offer Section */}
          <div className="bg-white dark:bg-neutral-950 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Special Offer</label>
              <button
                type="button"
                onClick={() => {
                  if (formData.offerName || formData.discountPercentage) {
                    setFormData(prev => ({ ...prev, offerName: '', discountPercentage: null }));
                  } else {
                    setFormData(prev => ({ ...prev, offerName: 'Special Deal', discountPercentage: 10 }));
                  }
                }}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                {(formData.offerName || formData.discountPercentage) ? 'Remove Offer' : 'Add Offer'}
              </button>
            </div>
            
            {(formData.offerName || formData.discountPercentage) && (
              <div className="space-y-4 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                <div className="space-y-2">
                  <label htmlFor="offerName" className="text-sm font-medium">Offer Name (Badge text)</label>
                  <input
                    type="text"
                    id="offerName"
                    name="offerName"
                    value={formData.offerName || ''}
                    onChange={handleChange}
                    className="w-full p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm"
                    placeholder="e.g., Summer Sale"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="discountPercentage" className="text-sm font-medium">Discount Percentage (%)</label>
                  <input
                    type="number"
                    id="discountPercentage"
                    name="discountPercentage"
                    min="1"
                    max="100"
                    value={formData.discountPercentage || ''}
                    onChange={handleChange}
                    className="w-full p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm"
                    placeholder="e.g., 20"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
