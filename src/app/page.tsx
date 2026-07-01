import { Hero } from "@/components/Hero";
import { Collections } from "@/components/Collections";
import { Mission } from "@/components/Mission";
import { HowItWorks } from "@/components/HowItWorks";
import { Products } from "@/components/Products";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { About } from "@/components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <Collections />
      <Mission />
      <HowItWorks />
      <Products />
      <About />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
