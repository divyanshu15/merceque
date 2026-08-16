import React from "react";
import Image from "next/image";
import Link from "next/link";

export function CollectionsGrid() {
  const collections = [
    {
      title: "Executive Collection",
      src: "/figma-images/collection1.jpg",
    },
    {
      title: "Eco Care Collection",
      src: "/figma-images/collection2.jpg",
    },
    { title: "Student Essentials", src: "/figma-images/collection3.png" },
    {
      title: "Sustainable Travel Essentials",
      src: "/figma-images/collection4.jpg",
    },
  ];

  return (
    <section className="w-full">
      {/* Elevate banner — above the grid, transparent bg */}
      <div className="w-full bg-transparent py-20">
        <div className="flex flex-col items-center gap-6">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white/95 drop-shadow-md text-center tracking-wide"
            style={{ fontFamily: "var(--font-italianno)", fontWeight: 500 }}
          >
            Elevate Your Lifestyle with Sustainable Bamboo &amp; Natural
            Essentials
          </h2>
          <div className="flex gap-6 flex-wrap justify-center">
            <Link
              href="/our-products"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1e2e20]/80 backdrop-blur-sm text-white px-12 py-3 font-cursive text-2xl md:text-3xl hover:bg-[#1e2e20] transition-colors shadow-md border border-white/20"
            >
              Shop now
            </Link>
            <Link
              href="/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1e2e20]/80 backdrop-blur-sm text-white px-12 py-3 font-cursive text-2xl md:text-3xl hover:bg-[#1e2e20] transition-colors shadow-md border border-white/20"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>

      {/* Collection grid — full-width green strip, content max-w-7xl */}
      <div className="w-full bg-[#385642] px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((item, i) => (
              <Link
                href="/our-products"
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                className="group flex flex-col gap-3"
              >
                <h2
                  className="text-white font-semibold whitespace-nowrap"
                  style={{ fontSize: "clamp(0.75rem, 1.15vw, 1.5rem)" }}
                >
                  {item.title}
                </h2>
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
        </div>
      </div>
    </section>
  );
}
