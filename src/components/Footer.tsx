import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black/5 dark:bg-[#0a0a0a] border-t border-black/10 dark:border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24">
        {/* Brand Column */}
        <div className="flex flex-col gap-6 md:w-1/3">
          <Link href="/" className="flex items-center gap-2 group w-fit">
            <Image
              src="/logo/logo-light.png"
              alt="Merceque Logo"
              width={180}
              height={48}
              className="dark:hidden h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <Image
              src="/logo/logo-dark.png"
              alt="Merceque Logo"
              width={180}
              height={48}
              className="hidden dark:block h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Merging brutalist aesthetics with organic sustainability. We curate
            premium bamboo essentials designed to elevate your daily rituals
            while minimizing environmental impact.
          </p>
        </div>

        {/* Links Columns */}
        <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-24 w-full md:w-2/3 justify-start md:justify-end">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold uppercase tracking-widest text-foreground text-sm mb-2">
              Explore
            </h4>
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              href="/our-products"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm"
            >
              Products
            </Link>
            <Link
              href="/about-us"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm"
            >
              Our Story
            </Link>
            <Link
              href="/for-businesses"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm"
            >
              For Business
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold uppercase tracking-widest text-foreground text-sm mb-2">
              Support
            </h4>
            <Link
              href="/contact"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm"
            >
              Contact Us
            </Link>
            <Link
              href="/contact#faq"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm"
            >
              FAQ
            </Link>
            <Link
              href="/shipping-and-returns"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm"
            >
              Shipping & Returns
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold uppercase tracking-widest text-foreground text-sm mb-2">
              Socials
            </h4>
            <Link
              href="#"
              className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm group"
            >
              Instagram{" "}
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm group"
            >
              Twitter{" "}
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm group"
            >
              LinkedIn{" "}
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Merceque. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 font-mono">SUSTAINABLE // DESIGN</p>
      </div>
    </footer>
  );
}
