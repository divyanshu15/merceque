import React from 'react';
import Link from 'next/link';

export function ElevateBanner() {
  return (
    <section className="w-full py-16 px-6 bg-gradient-to-r from-[#4d6955] to-[#7b9c84] text-center flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-medium mb-8 drop-shadow-sm max-w-3xl mx-auto">
        Elevate Your Lifestyle with Sustainable Bamboo & Natural Essentials
      </h2>
      <div className="flex gap-4">
        <Link
          href="/our-products"
          className="bg-[#385642] text-white px-8 py-3 font-semibold hover:bg-[#2b4433] transition-colors border border-white/20"
        >
          Shop now
        </Link>
        <Link
          href="/about-us"
          className="bg-[#385642] text-white px-8 py-3 font-semibold hover:bg-[#2b4433] transition-colors border border-white/20"
        >
          Learn more
        </Link>
      </div>
    </section>
  );
}
