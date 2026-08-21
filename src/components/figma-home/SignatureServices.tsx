import React from "react";
import Image from "next/image";

export function SignatureServices() {
  const services = [
    { src: "/figma-images/signature1.jpg", alt: "Bamboo Pens" },
    { src: "/figma-images/signature2.jpg", alt: "Nature Essentials" },
    { src: "/figma-images/signature3.jpg", alt: "Wooden Cups Set" },
  ];

  return (
    <section className="w-full py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-28 2xl:px-36 bg-[#2B483B]/100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal mb-8 sm:mb-10 md:mb-12 text-left tracking-wide">
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
