import React from "react";
import Image from "next/image";

export function SignatureServices() {
  const services = [
    { src: "/images/new/bamboo_pen_close.jpeg", alt: "Bamboo Pens" },
    { src: "/images/new/eco_collection_pro.png", alt: "Nature Essentials" },
    { src: "/images/new/wooden_cups.jpeg", alt: "Wooden Cups Set" },
  ];

  return (
    <section className="w-full py-20 px-6 bg-[#dbe1d6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-[#2b4433] font-bold mb-12 text-center">
          Signature services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] w-full bg-black/5 overflow-hidden rounded-md group"
            >
              <Image
                src={service.src}
                alt={service.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
