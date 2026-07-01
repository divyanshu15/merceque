import React from "react";
import Image from "next/image";

const collections = [
  {
    title: "Personal Care",
    image: "/product/personal-care-kit/1.png",
    description: "Sustainable self-care essentials",
  },
  {
    title: "Drinkware",
    image: "/product/ecofriendly-bamboo-water-bottle-sustainable-stylish-hydration/1.png",
    description: "Eco-friendly hydration and mugs",
  },
  {
    title: "Office & Stationery",
    image: "/product/bamboo-pens/1.png",
    description: "Natural bamboo writing tools",
  },
  {
    title: "Corporate Gifts",
    image: "/product/premium-bamboo-corporate-gift-set/1.png",
    description: "Premium eco-friendly gift sets",
  }
];

export function Collections() {
  return (
    <section id="collections" className="py-24 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          Shop by <span className="text-primary italic font-serif">Category</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <div 
              key={index} 
              className="group relative h-96 w-full rounded-2xl overflow-hidden cursor-pointer animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-10 duration-500" />
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <h3 className="text-2xl font-bold text-foreground drop-shadow-md mb-2 bg-white/80 dark:bg-black/80 inline-block px-3 py-1 rounded">
                  {collection.title}
                </h3>
                <p className="text-foreground bg-white/90 dark:bg-black/90 px-3 py-1 rounded text-sm font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
