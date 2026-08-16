import React from "react";
import Image from "next/image";

export function QuoteSection() {
  return (
    <section className="w-full bg-transparent py-12">
      <div className="max-w-7xl bg-[#2B483B7D] mx-auto flex flex-col md:flex-row items-stretch overflow-hidden">
        {/* Image: stretches to full card height naturally */}
        <div className="relative flex-shrink-0 w-full md:w-80 lg:w-96 min-h-[300px]">
          <Image
            src="/figma-images/quoteimg.jpg"
            alt="Bamboo Cutlery Set"
            fill
            className="object-cover"
          />
        </div>

        {/* Quote text — padding only here */}
        <div className="flex items-center px-10 py-12">
          <blockquote
            className="text-white text-2xl md:text-3xl lg:text-6xl font-cursive leading-relaxed text-left drop-shadow-sm font-normal"
            style={{ fontFamily: "var(--font-italianno)", fontWeight: 500 }}
          >
            &ldquo;The future isn&apos;t built in a day—it&apos;s built by the
            choices we make every day. <br /> Small changes become lifelong
            habits, and together those habits have the power to change the
            world.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
