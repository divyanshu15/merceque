"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full flex-1 aspect-square rounded-2xl overflow-hidden bg-neutral-100 flex items-center justify-center">
        <span className="text-sm text-gray-500 uppercase">No Image</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 shadow-sm">
        <Image 
          src={mainImage} 
          alt={productName}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 px-1">
          {images.map((imgUrl, idx) => (
            <button
              key={idx}
              onClick={() => setMainImage(imgUrl)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer border-2 transition-all ${
                mainImage === imgUrl ? 'border-[#2b4433] opacity-100 shadow-md' : 'border-transparent opacity-70 hover:opacity-100 hover:border-neutral-300'
              }`}
            >
              <Image 
                src={imgUrl}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
