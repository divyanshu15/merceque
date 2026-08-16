"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinkClass = `hover:underline underline-offset-4 transition-all ${
    isHome ? "text-white/90 hover:text-white" : "text-black/80"
  }`;

  return (
    <header className="absolute top-0 left-0 w-full z-40 flex flex-col">
      <div className="w-full bg-transparent py-2 text-center px-6 relative z-50">
        <p className={`text-xs font-medium tracking-wide ${"text-black/80"}`}>
          &quot;Now Open for Business Customers Only – B2B Orders Welcome!&quot;
        </p>
      </div>
      <div className="w-full bg-transparent">
        <div className="max-w-7xl mx-auto px-6 h-16 lg:h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span
              className={`text-3xl md:text-4xl font-cursive font-bold drop-shadow-sm ${"text-[#1f3125]"}`}
            >
              Merceque
            </span>
          </Link>

          {/* Desktop Nav — right aligned */}
          <nav className="hidden lg:flex items-center gap-8 text-base font-medium ml-auto">
            <Link href="/" className={navLinkClass}>
              Home
            </Link>
            <Link href="/for-businesses" className={navLinkClass}>
              For Businesses
            </Link>
            <Link href="/our-products" className={navLinkClass}>
              Our Products
            </Link>
            <Link href="/contact" className={navLinkClass}>
              Contact
            </Link>
            <Link href="/about-us" className={navLinkClass}>
              About Us
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 z-50 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div
              className={`w-6 h-px transition-all duration-300 ${isHome ? "bg-white" : "bg-foreground"} ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <div
              className={`w-6 h-px transition-all duration-300 ${isHome ? "bg-white" : "bg-foreground"} ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#dbe1d6] z-40 transition-transform duration-500 ease-in-out lg:hidden flex flex-col items-center justify-center gap-8 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-medium text-black/80 hover:underline underline-offset-4"
        >
          Home
        </Link>
        <Link
          href="/for-businesses"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-medium text-black/80 hover:underline underline-offset-4"
        >
          For Businesses
        </Link>
        <Link
          href="/our-products"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-medium text-black/80 hover:underline underline-offset-4"
        >
          Our Products
        </Link>
        <Link
          href="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-medium text-black/80 hover:underline underline-offset-4"
        >
          Contact
        </Link>
        <Link
          href="/about-us"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-medium text-black/80 hover:underline underline-offset-4"
        >
          About Us
        </Link>
      </div>
    </header>
  );
}
