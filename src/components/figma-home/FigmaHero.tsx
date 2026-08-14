import React from "react";
import Image from "next/image";
import Link from "next/link";

export function FigmaHero() {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col justify-between overflow-hidden pt-32 pb-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <Image
          src="/images/new/hero-image.jpg"
          alt="Bamboo Bath Kit"
          fill
          className="object-cover object-center hidden lg:block"
          priority
        />
        {/* Tablet Image */}
        <Image
          src="/images/new/hero-image.jpg"
          alt="Bamboo Bath Kit"
          fill
          className="object-cover object-center hidden md:block lg:hidden"
          priority
        />
        {/* Mobile Image */}
        <Image
          src="/images/new/hero-image.jpg"
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
    </section>
  );
}
