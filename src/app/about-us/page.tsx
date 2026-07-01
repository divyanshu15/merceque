import { About } from "@/components/About";
import { Metadata } from "next";
import { Leaf, Recycle, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Merceque",
  description: "Learn about Merceque's vision for sustainable, eco-friendly bamboo products and modern design.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      {/* Existing About component acting as Hero */}
      <About />

      {/* Our Story Section */}
      <section id="story" className="py-32 px-6 bg-black/5 dark:bg-[#0a0a0a] border-t border-black/10 dark:border-white/10 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-8">
            Our <span className="text-primary italic font-serif">Story</span>
          </h2>
          <div className="flex flex-col gap-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            <p>
              Merceque was born from a simple observation: the everyday products we use were quietly damaging the planet we love. We saw bathrooms filled with disposable plastic, kitchens stocked with unsustainable materials, and a retail landscape that prioritized cheap manufacturing over environmental responsibility.
            </p>
            <p>
              We decided to challenge the status quo. By turning to one of nature's most resilient and rapidly renewable resources—bamboo—we set out to create alternatives that didn't compromise on design or durability.
            </p>
            <p>
              Today, Merceque is more than a brand; it's a movement towards mindful consumption. We curate premium bamboo essentials designed to elevate your daily rituals while minimizing your environmental footprint.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-32 px-6 bg-background border-t border-black/10 dark:border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-16 text-center">
            The <span className="text-primary">Impact</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center gap-6 p-8 bg-black/5 dark:bg-white/5 rounded-3xl border border-black/10 dark:border-white/10">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Rapidly Renewable</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Bamboo is technically a grass that can grow up to 3 feet in 24 hours. It requires no pesticides, no chemical fertilizers, and regenerates from its own roots after harvesting.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center gap-6 p-8 bg-black/5 dark:bg-white/5 rounded-3xl border border-black/10 dark:border-white/10">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Recycle className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Zero Plastic</h3>
              <p className="text-gray-600 dark:text-gray-400">
                From the product itself to the packaging it arrives in, we are committed to a 100% plastic-free supply chain. Every item naturally biodegrades, returning to the earth without leaving microplastics behind.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center gap-6 p-8 bg-black/5 dark:bg-white/5 rounded-3xl border border-black/10 dark:border-white/10">
              <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <HeartHandshake className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Ethical Production</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We partner exclusively with certified, fair-wage farming communities. Our bamboo is sustainably sourced in ways that protect local ecosystems and empower the workers who harvest it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers / Values Section */}
      <section id="careers" className="py-32 px-6 bg-black/5 dark:bg-[#0a0a0a] border-y border-black/10 dark:border-white/10 relative">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Join the <span className="text-primary italic font-serif">Mission</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            We are always looking for passionate, forward-thinking individuals to help us build a more sustainable future. If you believe in the power of conscious design, we want to hear from you.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-dark dark:text-primary-dark font-bold uppercase tracking-wide rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,255,127,0.3)]">
            View Open Positions
          </button>
        </div>
      </section>
    </main>
  );
}
