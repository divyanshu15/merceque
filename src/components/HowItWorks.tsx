import React from "react";
import { Package, MessageSquareHeart, Truck } from "lucide-react";

const steps = [
  {
    icon: <Package className="w-10 h-10 text-primary" />,
    title: "1. Choose Your Box",
    description: "Sustainable bamboo gift boxes for every occasion.",
  },
  {
    icon: <MessageSquareHeart className="w-10 h-10 text-primary" />,
    title: "2. Add a Note",
    description: "Personalize with a handwritten message.",
  },
  {
    icon: <Truck className="w-10 h-10 text-primary" />,
    title: "3. Zero Waste Delivery",
    description: "100% eco-friendly and biodegradable delivery.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-background relative border-y border-border-subtle">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          The Gifting{" "}
          <span className="text-primary italic font-serif lowercase">
            Process
          </span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-border-subtle -z-10" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="w-24 h-24 rounded-full bg-background border border-border-subtle flex items-center justify-center mb-6 shadow-sm">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
