import { About } from "@/components/About";
import { Metadata } from "next";
import { Leaf, Recycle, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Merceque",
  description: "Learn about Merceque's vision for eco-conscious, eco-friendly bamboo products and modern design.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      {/* Existing About component acting as Hero */}
      <About />

      {/* Our Story Section */}
      <section id="story" className="py-32 px-6 bg-black/5 dark:bg-[#0a0a0a] border-t border-black/10 dark:border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 w-full h-[400px] bg-black/10 dark:bg-white/5 rounded-3xl border border-black/10 dark:border-white/10 flex items-center justify-center overflow-hidden relative">
             {/* Visual Placeholder for Image/Video */}
             <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
             <Leaf className="w-24 h-24 text-primary opacity-50 relative z-10" />
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
              Our <span className="text-primary italic font-serif">Story</span>
            </h2>
            <p className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 leading-tight">
              Challenging the status quo. <br/> Less plastic, more nature.
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">
              We curate premium bamboo essentials designed to elevate daily rituals.
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
              <div className="w-16 h-16 rounded-full bg-[#37A161]/20 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-[#37A161]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Rapidly Renewable</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Grows up to 3 feet in 24 hours. Regenerates without pesticides.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center gap-6 p-8 bg-black/5 dark:bg-white/5 rounded-3xl border border-black/10 dark:border-white/10">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Recycle className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Zero Plastic</h3>
              <p className="text-gray-600 dark:text-gray-400">
                100% plastic-free supply chain. Naturally biodegrades.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center gap-6 p-8 bg-black/5 dark:bg-white/5 rounded-3xl border border-black/10 dark:border-white/10">
              <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <HeartHandshake className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Ethical Production</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Partnered with certified, fair-wage farming communities.
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
            Passionate about conscious design? We want to hear from you.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-dark dark:text-primary-dark font-bold uppercase tracking-wide rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,255,127,0.3)]">
            View Open Positions
          </button>
        </div>
      </section>
    </main>
  );
}
