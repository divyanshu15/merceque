import React from "react";
import { Leaf, Recycle, Wind, ShieldCheck } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    title: "Zero Plastic Promise",
    description: "Our entire supply chain is designed to be 100% plastic-free, from harvesting to packaging, ensuring a cleaner planet.",
    icon: <Recycle className="w-8 h-8 text-primary" />,
    className: "md:col-span-2 md:row-span-2",
    iconClassName: "bg-primary/20",
    image: "/images/bento_plastic_free_1777865837539.png",
  },
  {
    title: "Carbon Neutral",
    description: "Every product is offset. We invest in global reforestation projects.",
    icon: <Wind className="w-6 h-6 text-blue-400" />,
    className: "md:col-span-1 md:row-span-1",
    iconClassName: "bg-blue-400/20",
    image: "/images/bento_carbon_neutral_1777865858040.png",
  },
  {
    title: "Ethical Sourcing",
    description: "Sustainably harvested bamboo, empowering local communities.",
    icon: <Leaf className="w-6 h-6 text-green-400" />,
    className: "md:col-span-1 md:row-span-1",
    iconClassName: "bg-green-400/20",
    image: "/images/bento_ethical_sourcing_1777865873606.png",
  },
  {
    title: "Premium Durability",
    description: "Nature's strongest materials crafted to last a lifetime, replacing fragile synthetic alternatives.",
    icon: <ShieldCheck className="w-6 h-6 text-yellow-400" />,
    className: "md:col-span-2 md:row-span-1",
    iconClassName: "bg-yellow-400/20",
    image: "/images/bento_premium_durability_1777865890319.png",
  },
];

export function BentoBenefits() {
  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Nature's Blueprint. <span className="text-primary">Modern Living.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience the harmony of sustainable materials and cutting-edge design. Our bamboo products aren't just an alternative; they're an upgrade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 auto-rows-[250px]">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 
                backdrop-blur-sm p-8 flex flex-col justify-between
                transition-all duration-500 hover:border-black/20 dark:hover:border-white/20 hover:-translate-y-1
                hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)]
                animate-in fade-in zoom-in-95 duration-700
                ${benefit.className}
              `}
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
            >
              {/* Image Background */}
              <div className="absolute inset-0 w-full h-full -z-20">
                <Image 
                  src={benefit.image} 
                  alt={benefit.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-white/70 dark:bg-black/60 -z-10 transition-colors duration-300 group-hover:bg-white/60 dark:group-hover:bg-black/50" />
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10 ${benefit.iconClassName}`}>
                {benefit.icon}
              </div>

              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
