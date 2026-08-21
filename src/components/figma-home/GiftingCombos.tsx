import React from "react";
import Image from "next/image";
import Link from "next/link";

export function GiftingCombos() {
  const combos = [
    {
      title: "Corporate Gifting",
      src: "/images/new/bamboo_thermos_box.jpeg",
      desc: "Sustainable solutions for your business",
    },
    {
      title: "Wedding Gifting",
      src: "/images/new/bamboo_thermos_box.png",
      desc: "Meaningful gifts for special days",
    },
    {
      title: "Festive Gifting",
      src: "/images/new/bamboo_bath_kit.jpg",
      desc: "Celebrate with nature's touch",
    },
  ];

  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-[#2b4433] font-bold mb-4 text-center">
          Gifting Combos
        </h2>
        <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-12">
          Explore our premium eco-friendly gifting options, perfectly curated
          for every occasion and business need.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {combos.map((item, i) => (
            <Link
              href="/for-businesses"
              key={i}
              className="group flex flex-col items-center text-center gap-4"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md bg-neutral-100 shadow-md">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-[#2b4433] font-semibold text-xl">
                  {item.title}
                </h3>
                <p className="text-neutral-500 mt-1">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/for-businesses"
            className="bg-[#2b4433] text-white px-8 py-3 font-semibold rounded-md hover:bg-[#1a2b1f] transition-colors shadow-md"
          >
            Explore B2B Orders
          </Link>
        </div>
      </div>
    </section>
  );
}
