import React from "react";
import Image from "next/image";

export function QuoteSection() {
  return (
    <section className="w-full bg-transparent py-12">
      <div className="max-w-7xl bg-[#2B483B7D] mx-auto px-12 py-12 flex flex-col md:flex-row items-center gap-10 min-h-[400px]">
        {/* Image: centered with rounded corners */}
        <div className="relative flex-shrink-0 w-100 md:w-100 h-64 md:h-80 rounded-[10px] overflow-hidden">
          <Image
            src="/images/new/pencil-box.png"
            alt="Bamboo Cutlery Set"
            fill
            className="object-cover"
          />
        </div>

        {/* Quote text */}
        <blockquote className="text-white text-2xl md:text-3xl lg:text-4xl font-cursive leading-relaxed text-left drop-shadow-sm font-normal">
          &ldquo;The future isn&apos;t built in a day—it&apos;s built by the
          choices we make every day. Small changes become lifelong habits, and
          together those habits have the power to change the world.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
