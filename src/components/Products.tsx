"use client";

import React from "react";
import { Button } from "./ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Define a local Product interface instead of importing from static file
export interface Product {
  id: string;
  name: string;
  handle: string;
  price: string;
  description: string;
  image: string;
  images: string[];
  quantity: number;
  category: string;
}

interface ProductsProps {
  products: Product[];
  limit?: number;
  title?: React.ReactNode;
  category?: "combo" | "individual";
  hidePaddingTop?: boolean;
}

export function Products({ products, limit, title, category, hidePaddingTop }: ProductsProps) {
  let displayProducts = products;
  if (category) {
    displayProducts = displayProducts.filter(p => p.category === category);
  }
  if (limit) {
    displayProducts = displayProducts.slice(0, limit);
  }
  const router = useRouter();

  return (
    <section id="products" className={`px-6 bg-background relative overflow-hidden ${hidePaddingTop ? 'pb-32' : 'py-32'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground">
            {title ? title : limit ? (
              <>Featured<br/>Goods</>
            ) : (
              <>Our<br/>Products</>
            )}
          </h2>
          {limit && <Button variant="outline">View All Products</Button>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product, index) => (
            <div
              key={product.id}
              onClick={() => router.push(`/product/${product.handle}`)}
              className="group border border-gray-200 rounded-md overflow-hidden flex flex-col h-auto cursor-pointer bg-white transition-all duration-300 hover:shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              {/* Image Section */}
              <div className="relative w-full h-[220px] bg-gray-50 flex-shrink-0">
                {product.image ? (
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xs text-gray-500 uppercase">No Image</span>
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="p-4 flex flex-col flex-1 bg-white text-left">
                <h3 className="text-sm md:text-base font-medium text-[#007185] line-clamp-2 hover:text-[#C7511F] transition-colors mb-1">
                  {product.name}
                </h3>
                
                {product.category === 'combo' ? (
                  <div className="flex items-baseline gap-1 mb-1 mt-auto">
                    <span className="text-sm font-medium text-gray-600">Pricing upon request</span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1 mb-1 mt-auto text-black">
                    <span className="text-xs align-top pt-1">$</span>
                    <span className="text-2xl font-semibold">{product.price.replace('$', '').split('.')[0] || '0'}</span>
                    <span className="text-xs align-top pt-1">{product.price.split('.')[1] || '00'}</span>
                  </div>
                )}
                
                <div 
                  className="text-xs text-gray-500 line-clamp-3 mb-4 mt-2 [&>p]:inline"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    if (product.category === 'combo') {
                      window.location.href = '/for-businesses#catalog-request-form';
                    }
                  }}
                  className="w-full py-2 bg-[#2b4433] hover:bg-[#1a2b1f] rounded-md text-sm font-medium text-white transition-colors shadow-sm mt-auto"
                >
                  {product.category === 'combo' ? 'Request Catalogue' : 'Add to cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
