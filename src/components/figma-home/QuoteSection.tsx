import React from "react";
import Image from "next/image";

export function QuoteSection() {
  return (
    <section className="w-full bg-transparent py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-28 2xl:px-36">
      <div className="max-w-7xl bg-[#2B483B7D] mx-auto flex flex-col md:flex-row items-stretch overflow-hidden rounded-md md:rounded-none">
        {/* Image: stretches to full card height naturally */}
        <div className="relative flex-shrink-0 w-full md:w-80 lg:w-96 min-h-[240px] sm:min-h-[280px] md:min-h-[320px]">
          <Image
            src="/figma-images/quoteimg.jpg"
            alt="Bamboo Cutlery Set"
            fill
            className="object-cover"
          />
        </div>

        {/* Quote text — padding only here */}
        <div className="flex items-center px-6 py-8 sm:px-10 sm:py-12">
          <blockquote
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-cursive leading-snug sm:leading-relaxed text-left drop-shadow-sm font-normal"
            style={{ fontFamily: "var(--font-italianno)", fontWeight: 500 }}
          >
            &ldquo;The future isn&apos;t built in a day—it&apos;s built by the
            choices we make every day. <br className="hidden sm:inline" /> Small changes become lifelong
            habits, and together those habits have the power to change the
            world.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
