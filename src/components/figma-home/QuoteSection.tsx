import React from 'react';
import Image from 'next/image';

export function QuoteSection() {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[400px]">
      {/* Left side: Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <Image
          src="/images/new/wooden_cups.jpeg"
          alt="Bamboo Cutlery Set"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Right side: Gradient and Quote */}
      <div className="w-full md:w-1/2 bg-gradient-to-r from-[#4d6955] to-[#7b9c84] flex items-center justify-center p-12">
        <blockquote className="text-white text-2xl md:text-3xl lg:text-4xl font-cursive leading-relaxed max-w-lg text-center md:text-left drop-shadow-sm font-normal">
          "The future isn't built in a day—it's built by the choices we make every day. Small changes become lifelong habits, and together those habits have the power to change the world."
        </blockquote>
      </div>
    </section>
  );
}
