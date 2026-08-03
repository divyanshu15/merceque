import React from "react";
import Image from "next/image";
import Link from "next/link";

export function CollectionsGrid() {
  const collections = [
    { title: "Corporate Kit", src: "/images/new/bamboo_thermos_cups.jpeg" },
    { title: "Personal Care Kit", src: "/images/new/bamboo_bath_kit.jpg" },
    { title: "Bamboo Dom Kit", src: "/images/new/toothbrush.png" },
    { title: "Coffee Kit", src: "/images/new/coffee_mug.jpeg" },
  ];

  return (
    <section className="w-full py-16 px-6 bg-[#385642]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((item, i) => (
          <Link
            href="/our-products"
            key={i}
            className="group flex flex-col gap-3"
          >
            <h3 className="text-white font-semibold text-lg">{item.title}</h3>
            <div className="relative aspect-square w-full overflow-hidden rounded-md bg-white/10">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
