import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import { ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
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

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link
            href="/for-businesses"
            className="hover:text-primary transition-colors"
          >
            For Businesses
          </Link>
          <Link
            href="/our-products"
            className="hover:text-primary transition-colors"
          >
            Our Products
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-primary transition-colors pb-6 -mb-6">
              About us{" "}
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-4 w-48 bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden text-foreground">
              <div className="flex flex-col py-2">
                <Link
                  href="/about-us#story"
                  className="px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-colors"
                >
                  Our Story
                </Link>
                <Link
                  href="/about-us#sustainability"
                  className="px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-colors"
                >
                  Sustainability
                </Link>
                <Link
                  href="/about-us#careers"
                  className="px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="primary" className="hidden sm:block">
            Shop Now
          </Button>
          <button className="lg:hidden flex flex-col gap-1.5 p-2">
            <div className="w-6 h-px bg-foreground" />
            <div className="w-6 h-px bg-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}
