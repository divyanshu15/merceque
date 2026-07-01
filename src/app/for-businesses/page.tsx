import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "For Businesses | Merceque",
  description: "Wholesale bamboo products and eco-conscious corporate gifting solutions.",
};

export default function ForBusinessesPage() {
  return (
    <main className="flex min-h-screen flex-col w-full pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 mb-32 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-start gap-6 max-w-3xl mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground">
              Partner with <span className="text-primary italic font-serif">Nature</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Elevate your brand with eco-conscious, custom-branded bamboo products. Ideal for corporate gifting, hospitality, and retail wholesale.
            </p>
            <Link href="/contact">
              <Button className="mt-4 px-8 py-4 text-lg">Request Wholesale Catalog</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-8 backdrop-blur-sm transition-transform hover:-translate-y-2 duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-4">Corporate Gifting</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Show your clients and employees you care about the planet with premium, zero-plastic bamboo gifts. Custom engraving available.
              </p>
            </div>
            <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-8 backdrop-blur-sm transition-transform hover:-translate-y-2 duration-300 delay-100">
              <h3 className="text-2xl font-bold text-foreground mb-4">Hospitality Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Upgrade your hotel or restaurant with durable, eco-friendly bamboo amenities, from custom combs to elegant tableware.
              </p>
            </div>
            <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-8 backdrop-blur-sm transition-transform hover:-translate-y-2 duration-300 delay-200">
              <h3 className="text-2xl font-bold text-foreground mb-4">Retail Wholesale</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Stock Merceque products in your store. Enjoy competitive wholesale pricing, low minimum order quantities, and dedicated support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="px-6 py-24 bg-black/5 dark:bg-white/5 border-y border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 flex flex-col gap-6">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
                Why Choose Merceque?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                When you partner with Merceque, you are investing in high-quality, eco-conscious solutions that align with modern consumer values. We make the transition to eco-friendly products seamless and beautiful.
              </p>
              <ul className="flex flex-col gap-4 mt-4">
                {[
                  "Premium Quality Guarantee",
                  "Low Minimum Order Quantities (MOQ)",
                  "Custom Laser Engraving & Branding",
                  "Dedicated Account Manager",
                  "Global Shipping & Logistics Support"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-foreground font-medium">
                    <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 bg-black/10 dark:bg-white/10 rounded-3xl h-[400px] w-full flex items-center justify-center p-8 border border-black/10 dark:border-white/10 shadow-inner">
               {/* Placeholder for an image or branded graphic */}
               <div className="text-center">
                 <span className="text-6xl mb-4 block">🏢</span>
                 <h3 className="text-2xl font-bold text-foreground">Eco-conscious Business</h3>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-16 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Inquiry", desc: "Contact our team with your business needs and estimated volumes." },
              { step: "02", title: "Consultation", desc: "We'll discuss customization options, pricing, and provide samples." },
              { step: "03", title: "Production", desc: "Once approved, we begin manufacturing and custom branding your order." },
              { step: "04", title: "Delivery", desc: "We handle the logistics to ensure your order arrives safely and on time." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-4 group">
                <div className="text-5xl font-black text-primary/30 group-hover:text-primary transition-colors duration-500">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground uppercase">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pt-12">
        <div className="max-w-5xl mx-auto w-full bg-primary/10 border border-primary/20 rounded-3xl p-12 text-center flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Ready to go green?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Let's work together to eliminate plastic waste in your industry. Reach out today for our wholesale pricing catalog.
          </p>
          <Link href="/contact">
            <Button className="flex items-center gap-2 px-8 py-4 text-lg">
              Contact Sales Team <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
