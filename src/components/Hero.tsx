import React from "react";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background border-b border-border-subtle pt-20">
      {/* Abstract minimal decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-tight text-foreground drop-shadow-sm mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Sustainable Bamboo<br />
          <span className="text-primary italic font-serif">Gift Boxes.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto drop-shadow-sm mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          Eco-friendly, customizable bamboo gift boxes for every occasion.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Button variant="primary" className="px-8 py-4 text-lg">Shop Collections</Button>
        </div>
      </div>
    </section>
  );
}
