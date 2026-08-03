import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import { ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-40 flex flex-col">
      <div className="w-full bg-transparent py-2 text-right px-6 absolute top-0 right-0 z-50">
        <p className="text-black/80 text-xs font-medium tracking-wide">
          "Now Open for Business Customers Only – B2B Orders Welcome!"
        </p>
      </div>
      <div className="w-full bg-transparent pt-4 pb-2">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo/merceque-logo-2.png"
            alt="Merceque Logo"
            width={48}
            height={48}
            className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-4xl font-cursive font-medium text-black/80">
            Merceque
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-black/80">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <Link
            href="/for-businesses"
            className="hover:text-black transition-colors"
          >
            For Businesses
          </Link>
          <Link
            href="/our-products"
            className="hover:text-black transition-colors"
          >
            Our Products
          </Link>
          <Link
            href="/contact"
            className="hover:text-black transition-colors"
          >
            Contact
          </Link>

          <Link
            href="/about-us"
            className="hover:text-black transition-colors"
          >
            About Us
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="primary" className="hidden">
            Shop Now
          </Button>
          <button className="lg:hidden flex flex-col gap-1.5 p-2">
            <div className="w-6 h-px bg-foreground" />
            <div className="w-6 h-px bg-foreground" />
          </button>
        </div>
        </div>
      </div>
    </header>
  );
}
