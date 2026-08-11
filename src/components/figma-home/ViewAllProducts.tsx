import React from "react";
import Image from "next/image";
import Link from "next/link";

export function ViewAllProducts() {
  const products = [
    { src: "/images/new/wooden_cups.jpeg" },
    { src: "/images/new/eco_collection_pro.png" },
    { src: "/images/new/bamboo_thermos_cups.jpeg" },
    { src: "/images/new/bamboo_bottles_rocks.jpeg" },
  ];

  return (
    <section className="w-full pt-16 pb-12 px-6 bg-[#dbe1d6]">
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
