"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import Image from "next/image";
import { products, Product } from "@/data/products";
import { X } from "lucide-react";

interface ProductsProps {
  limit?: number;
}

export function Products({ limit }: ProductsProps) {
  const displayProducts = limit ? products.slice(0, limit) : products;
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  return (
    <section id="products" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground">
            {limit ? (
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
              onClick={() => setSelectedProduct(product)}
              className="group border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden flex flex-col h-[380px] cursor-pointer bg-white/5 dark:bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_30px_rgba(0,255,127,0.15)] animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              {/* Image Section */}
              <div className="relative w-full flex-1 bg-white/10 overflow-hidden">
                {product.image ? (
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xs text-gray-500 uppercase">No Image</span>
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="p-6 h-[100px] flex flex-col justify-center bg-white dark:bg-transparent">
                <div className="flex justify-between items-center w-full gap-4">
                  <h3 className="text-lg font-black uppercase tracking-wide text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <span className="font-bold text-lg text-primary">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
          {/* Backdrop */}
          <div
            onClick={() => setSelectedProduct(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border border-black/10 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-300"
          >
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-1/2 min-h-[300px] md:h-auto relative bg-white/5 flex flex-col p-4">
              <div className="relative w-full flex-1 aspect-square rounded-2xl overflow-hidden mb-4">
                {selectedProduct.image ? (
                  <Image 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-white/10">
                    <span className="text-sm text-gray-500 uppercase">No Image</span>
                  </div>
                )}
              </div>
              
              {/* Thumbnails */}
              {selectedProduct.images && selectedProduct.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {selectedProduct.images.map((imgUrl, idx) => (
                    <div key={idx} className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer border-2 border-transparent hover:border-primary transition-colors">
                      <Image 
                        src={imgUrl}
                        alt={`${selectedProduct.name} ${idx + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Details */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-primary/20 text-primary-dark dark:text-primary text-xs font-bold uppercase tracking-wider rounded-full w-fit mb-4">
                Premium Bamboo
              </div>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-4">
                {selectedProduct.name}
              </h3>
              <span className="text-2xl font-bold text-foreground mb-6">
                {selectedProduct.price}
              </span>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {selectedProduct.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Button variant="primary" className="w-full sm:w-auto px-8">
                  Add to Cart
                </Button>
                <Button variant="outline" className="w-full sm:w-auto" onClick={() => setSelectedProduct(null)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
