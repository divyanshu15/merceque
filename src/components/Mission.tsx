import React from "react";
import { Leaf, Recycle, Heart } from "lucide-react";

const impacts = [
  {
    icon: <Leaf className="w-8 h-8 mb-4 text-primary" />,
    title: "100% Biodegradable",
    description: "Returns to the earth without a trace.",
  },
  {
    icon: <Recycle className="w-8 h-8 mb-4 text-primary" />,
    title: "Plastic-Free Packaging",
    description: "Zero-waste, eco-conscious solutions.",
  },
  {
    icon: <Heart className="w-8 h-8 mb-4 text-primary" />,
    title: "Ethically Sourced",
    description: "Responsibly harvested. Ecosystems preserved.",
  }
];

export function Mission() {
  return (
    <section className="py-24 px-6 bg-primary/5 dark:bg-primary/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          Why <span className="text-primary italic font-serif">Merceque?</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          Aesthetics that respect the planet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {impacts.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 rounded-3xl bg-background border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow duration-500 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 150 + 300}ms`, animationFillMode: 'both' }}
            >
              <div className="p-4 rounded-full bg-primary/10 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
