import React from "react";
import Image from "next/image";
import Link from "next/link";

export function FigmaHero() {
  return (
    <section className="relative w-full min-h-[100vh] flex flex-col justify-center overflow-hidden pt-32 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <Image
          src="/images/new/hero-new.png"
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
        {/* Subtle dark overlay for text readability at the top */}
        <div className="absolute inset-0 bg-black/10" />
        {/* Requested gradient: 0% top to 50% bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#5b7556]/50" />
      </div>

      {/* Main Content */}
      <div className="z-10 w-full px-6 flex flex-col items-center gap-6 mt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg max-w-4xl mx-auto leading-tight text-center">
          Discover Our Amazing Products
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/95 font-cursive drop-shadow-md w-full px-4 mx-auto text-center font-normal tracking-wide">
          Elevate your lifestyle with Bamboo and Natural Essentials
        </h2>

        <div className="flex gap-8 flex-wrap justify-center mt-4">
          <Link
            href="/our-products"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#486350]/80 backdrop-blur-sm text-white px-10 py-3 rounded-md font-cursive text-2xl md:text-3xl hover:bg-[#385642]/90 transition-colors shadow-md border border-[#5d7a66]/50"
          >
            Shop now
          </Link>
          <Link
            href="/about-us"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#486350]/80 backdrop-blur-sm text-white px-10 py-3 rounded-md font-cursive text-2xl md:text-3xl hover:bg-[#385642]/90 transition-colors shadow-md border border-[#5d7a66]/50"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
