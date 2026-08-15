import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#2B483B] px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-3">
        {/* Nav links row */}
        <div className="flex flex-wrap items-center justify-between gap-y-2">
          <Link
            href="/about-us"
            className="text-white/80 text-md hover:text-white transition-colors"
          >
            About us
          </Link>
          <Link
            href="/for-businesses"
            className="text-white/80 text-md hover:text-white transition-colors"
          >
            For Businesses &amp; Institutions
          </Link>
          <Link
            href="/our-products"
            className="text-white/80 text-md hover:text-white transition-colors"
          >
            Products
          </Link>
          <Link
            href="/about-us#vision"
            className="text-white/80 text-md hover:text-white transition-colors"
          >
            Vision
          </Link>
          <Link
            href="/privacy-policy"
            className="text-white/80 text-md hover:text-white transition-colors"
          >
            Our policies
          </Link>
          <Link
            href="/contact#faq"
            className="text-white/80 text-md hover:text-white transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-white/80 text-md hover:text-white transition-colors"
          >
            Help &amp; Support
          </Link>
          <Link
            href="#"
            className="text-white/80 text-md hover:text-white transition-colors"
          >
            Blogs
          </Link>
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-white/50 text-xs">
          <span>© {new Date().getFullYear()}, Merceque</span>
          <span>Powered by Merceque</span>
          <Link
            href="/privacy-policy"
            className="hover:text-white/80 transition-colors"
          >
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
