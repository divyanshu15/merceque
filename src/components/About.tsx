import React from "react";

export function About() {
  return (
    <section 
      id="about" 
      className="min-h-screen py-32 px-6 flex flex-col justify-center border-t border-border-subtle relative bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-primary mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          // The Vision
        </h2>
        
        <div className="flex flex-col gap-4 text-4xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none text-foreground">
          <div className="font-black hover:text-primary transition-colors duration-500 cursor-default">
            Sustainable
          </div>
          <div className="font-black text-accent hover:text-primary transition-colors duration-500 cursor-default">
            Bamboo
          </div>
          <div className="font-black hover:text-primary transition-colors duration-500 cursor-default">
            Aesthetics.
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <p className="text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
            We merge modern design principles with organic, eco-friendly materials to create products that stand the test of time. Smooth curves. Natural utility.
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
            Our bamboo products are crafted with precision, reducing environmental footprint while elevating your daily rituals.
          </p>
        </div>
      </div>
    </section>
  );
}
