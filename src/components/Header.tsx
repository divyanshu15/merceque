"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import { ChevronDown } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-40 flex flex-col">
      <div className="w-full bg-transparent py-2 text-center px-6 relative z-50">
        <p className="text-black/80 text-xs font-medium tracking-wide">
          "Now Open for Business Customers Only – B2B Orders Welcome!"
        </p>
      </div>
      <div className="w-full bg-transparent">
        <div className="max-w-7xl mx-auto px-6 h-16 lg:h-24 flex items-center justify-between">
          <Link href="/" target="_blank" rel="noopener noreferrer" className="flex items-center group">
          <span className="text-3xl md:text-4xl font-cursive font-bold text-[#1f3125] drop-shadow-sm">
            Merceque
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-base font-medium text-black/80">
          <Link href="/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 transition-all">
            Home
          </Link>
          <Link
            href="/for-businesses"
            target="_blank" rel="noopener noreferrer"
            className="hover:underline underline-offset-4 transition-all"
          >
            For Businesses
          </Link>
          <Link
            href="/our-products"
            target="_blank" rel="noopener noreferrer"
            className="hover:underline underline-offset-4 transition-all"
          >
            Our Products
          </Link>
          <Link
            href="/contact"
            target="_blank" rel="noopener noreferrer"
            className="hover:underline underline-offset-4 transition-all"
          >
            Contact
          </Link>

          <Link
            href="/about-us"
            target="_blank" rel="noopener noreferrer"
            className="hover:underline underline-offset-4 transition-all"
          >
            About Us
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="primary" className="hidden">
            Shop Now
          </Button>
          <button 
            className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-[#dbe1d6] z-40 transition-transform duration-500 ease-in-out lg:hidden flex flex-col items-center justify-center gap-8 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Link 
          href="/" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-medium text-black/80 hover:underline underline-offset-4 transition-all"
        >
          Home
        </Link>
        <Link
          href="/for-businesses"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-medium text-black/80 hover:underline underline-offset-4 transition-all"
        >
          For Businesses
        </Link>
        <Link
          href="/our-products"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-medium text-black/80 hover:underline underline-offset-4 transition-all"
        >
          Our Products
        </Link>
        <Link
          href="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-medium text-black/80 hover:underline underline-offset-4 transition-all"
        >
          Contact
        </Link>
        <Link
          href="/about-us"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-medium text-black/80 hover:underline underline-offset-4 transition-all"
        >
          About Us
        </Link>
      </div>
    </header>
  );
}
