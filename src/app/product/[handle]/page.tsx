import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import { ProductGallery } from '@/components/ProductGallery';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  const products = await prisma.product.findMany({
    select: { handle: true }
  });
  
  return products.map((product) => ({
    handle: product.handle,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const product = await prisma.product.findUnique({
    where: { handle }
  });

  if (!product) {
    notFound();
  }

  const allImages = [];
  if (product.image) allImages.push(product.image);
  if (product.images && product.images.length > 0) {
    allImages.push(...product.images);
  }

  // Deduplicate images just in case
  const uniqueImages = Array.from(new Set(allImages));

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 pt-32 md:pt-40 pb-12 md:pb-24">
        {/* Breadcrumb / Back button */}
        <Link 
          href="/our-products" 
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#2b4433] transition-colors mb-12 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Products
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column: Image Gallery */}
          <div className="w-full lg:w-1/2">
            <ProductGallery images={uniqueImages} productName={product.name} />
          </div>

          {/* Right Column: Product Details */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="inline-block px-4 py-1.5 bg-[#dbe1d6] text-[#2b4433] text-xs font-bold uppercase tracking-wider rounded-full w-fit mb-6">
              {product.category === 'combo' ? 'Combo Kit' : 'Premium Product'}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900 mb-6">
              {product.name}
            </h1>

            {product.category !== 'combo' ? (
              <div className="text-3xl font-bold text-neutral-900 mb-8">
                {product.price}
              </div>
            ) : (
              <div className="text-xl font-medium text-neutral-600 mb-8">
                Pricing upon request
              </div>
            )}

            <div className="prose prose-lg prose-neutral max-w-none mb-12">
              <div 
                className="text-neutral-600 leading-relaxed text-lg [&>p]:mb-4 [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-4 [&>strong]:text-neutral-900"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <div className="mt-auto pt-8 border-t border-neutral-200">
              {product.category === 'combo' ? (
                <Link
                  href="/for-businesses#catalog-request-form"
                  className="flex items-center justify-center w-full py-4 px-8 bg-[#2b4433] hover:bg-[#1a2b1f] rounded-xl text-lg font-bold text-white transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Request Catalogue
                </Link>
              ) : (
                <button
                  className="flex items-center justify-center w-full py-4 px-8 bg-[#2b4433] hover:bg-[#1a2b1f] rounded-xl text-lg font-bold text-white transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Add to Cart
                </button>
              )}
            </div>
            
            {/* Value Props */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              <div className="flex flex-col gap-2 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm">
                <span className="text-[#2b4433] font-bold">✓ Sustainable</span>
                <span className="text-sm text-neutral-500">100% eco-friendly materials</span>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm">
                <span className="text-[#2b4433] font-bold">✓ Fast Delivery</span>
                <span className="text-sm text-neutral-500">Free on first order</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
