import React from "react";
import Image from "next/image";
import Link from "next/link";

export function ViewAllProducts() {
  const products = [
    { src: "/figma-images/product1.jpg" },
    { src: "/figma-images/product2.jpg" },
    { src: "/figma-images/product3.jpg" },
    { src: "/figma-images/product4.jpg" },
  ];

  return (
    <section className="w-full pt-16 pb-12 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1f2f21] font-normal mb-10 tracking-wide">
          View All Products
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <Link
              href="/our-products"
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className="group"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-md bg-black/5">
                <Image
                  src={p.src}
                  alt="Product"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
