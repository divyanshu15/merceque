import React from "react";
import Image from "next/image";
import Link from "next/link";

export function FigmaHero() {
  return (
    <section className="relative w-full min-h-[100vh] flex flex-col justify-between overflow-hidden pt-32 pb-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <Image
          src="/images/new/hero-desktop.png"
          alt="Bamboo Bath Kit"
          fill
          className="object-cover object-center hidden lg:block"
          priority
        />
        {/* Tablet Image */}
        <Image
          src="/images/new/hero-tab.png"
          alt="Bamboo Bath Kit"
          fill
          className="object-cover object-center hidden md:block lg:hidden"
          priority
        />
        {/* Mobile Image */}
        <Image
          src="/images/new/hero-mobile.png"
          alt="Bamboo Bath Kit"
          fill
          className="object-cover object-center block md:hidden"
          priority
        />
        {/* Light dark overlay */}
        <div className="absolute inset-0 bg-black/10" />
        {/* Figma: gradient fades from transparent at top to solid dark green at bottom ~50% */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2d3d2e]/80" />
      </div>

      {/* Top Content */}
      <div className="z-10 w-full px-8 md:px-16 flex justify-end mt-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-lg max-w-none text-right leading-tight">
          Discover Our Amazing Products
        </h1>
      </div>

      {/* Bottom Content — dark olive strip matching Figma */}
      <div className="z-10 w-full bg-[#3a4f3c]/40 backdrop-blur-sm flex flex-col items-center py-10 px-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white/95 font-cursive drop-shadow-md w-full px-4 mx-auto text-center font-normal tracking-wide mb-8 italic">
          Elevate Your Lifestyle with Sustainable Bamboo &amp; Natural
          Essentials
        </h2>

        <div className="flex gap-6 flex-wrap justify-center">
          <Link
            href="/our-products"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2d3d2e] text-white px-12 py-3 font-cursive text-2xl md:text-3xl hover:bg-[#1e2e20] transition-colors shadow-md"
          >
            Shop now
          </Link>
          <Link
            href="/about-us"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2d3d2e] text-white px-12 py-3 font-cursive text-2xl md:text-3xl hover:bg-[#1e2e20] transition-colors shadow-md"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
