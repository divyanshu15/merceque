"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className={`relative w-full overflow-hidden px-4 sm:px-6 md:px-12 lg:px-24 xl:px-28 2xl:px-36 py-8 sm:py-12 ${!isHome ? "bg-[#2B483B]" : ""}`}>
      {/* bg-image only on homepage */}
      {isHome && (
        <Image
          src="/images/new/bg-image.png"
          alt=""
          fill
          className="object-cover object-bottom"
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-6">
        {/* Nav links row */}
        <div className="flex flex-wrap items-center justify-start sm:justify-between gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-2.5 sm:gap-y-3">
          <Link href="/about-us" className="text-white/80 text-sm sm:text-base font-semibold hover:text-white transition-colors">About us</Link>
          <Link href="/for-businesses" className="text-white/80 text-sm sm:text-base font-semibold hover:text-white transition-colors">For Businesses &amp; Institutions</Link>
          <Link href="/our-products" className="text-white/80 text-sm sm:text-base font-semibold hover:text-white transition-colors">Products</Link>
          <Link href="/about-us#vision" className="text-white/80 text-sm sm:text-base font-semibold hover:text-white transition-colors">Vision</Link>
          <Link href="/privacy-policy" className="text-white/80 text-sm sm:text-base font-semibold hover:text-white transition-colors">Our policies</Link>
          <Link href="/contact#faq" className="text-white/80 text-sm sm:text-base font-semibold hover:text-white transition-colors">FAQ</Link>
          <Link href="/contact" className="text-white/80 text-sm sm:text-base font-semibold hover:text-white transition-colors">Help &amp; Support</Link>
          <Link href="#" className="text-white/80 text-sm sm:text-base font-semibold hover:text-white transition-colors">Blogs</Link>
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-start gap-x-4 sm:gap-x-6 gap-y-1.5 text-white/50 text-xs">
          <span>© {new Date().getFullYear()}, Merceque</span>
          <span>Powered by Merceque</span>
          <Link href="/privacy-policy" className="hover:text-white/80 transition-colors">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
