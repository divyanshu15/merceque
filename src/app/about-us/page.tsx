import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Globe2, HeartHandshake, ShieldCheck } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#d9d0c1] flex flex-col pt-32">
      {/* Hero Section */}
      <section className="w-full px-6 py-12 lg:py-20 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2b4433] mb-6 font-cursive">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-medium">
            Embracing a sustainable lifestyle with beautifully crafted, nature-inspired products.
          </p>
        </div>
      </section>

      {/* Our Story: Left Text, Right Image */}
      <section className="w-full px-6 py-16 lg:py-24 bg-transparent" id="story">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-6 text-neutral-600 text-lg leading-relaxed">
            <p>
              At Merceque, we are dedicated to promoting an eco-friendly lifestyle by offering beautifully crafted, nature-inspired products that enrich daily life. Our diverse range includes items made from sustainable materials like bamboo, wood, natural fibers, leaves, stone, and plants—all crafted by talented artisans. We proudly support and showcase artists locally and globally, providing them with a platform to share their creations with the world.
            </p>
            <p>
              Whether for personal use or as unique corporate gifts, our products are thoughtfully designed and customizable to meet individual needs. Each piece is a work of art, made with natural materials and colors, allowing you to embrace sustainable choices in style.
            </p>
            <p>
              At Merceque, we design our products in Montreal, Canada, and ethically source them from skilled artisans and manufacturers in India. With a dedicated office in India for procurement and shipping, we ensure fair wages and responsible practices throughout our supply chain. We proudly serve customers across Canada and the US, delivering thoughtfully crafted pieces that blend quality, culture, and care.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/new/wooden_cups.jpeg"
              alt="Artisanal Wooden Cups"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision: Left Image, Right Text */}
      <section className="w-full px-6 py-16 lg:py-24 bg-[#2b4433] text-white" id="sustainability">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/images/new/bamboo_bath_kit.jpg"
              alt="Sustainable Personal Care Kit"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#dbe1d6]">Our Mission</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Our mission is to make sustainable living easy and accessible by offering eco-friendly products. For every part of your life - from gifts for loved ones to essentials for your kitchen and personal care, we aim to touch every aspect of your day to day life.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#dbe1d6]">Our Vision</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Our vision is to reduce carbon footprints and foster a lifestyle centered around sustainability, creativity, and the celebration of craftsmanship. Join us in our journey to make eco-friendly living a beautiful and accessible part of everyday life.
              </p>
            </div>

            <div className="pt-4 border-t border-white/20">
              <p className="text-xl font-medium text-[#dbe1d6] italic leading-relaxed">
                "You deserve the complete package for sustainable life style, and at Merceque, our efforts are committed to this Eco-Friendly Promise to the world!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="w-full px-6 py-16 lg:py-24 bg-transparent" id="offerings">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b4433] text-center mb-16">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#dbe1d6] rounded-full flex items-center justify-center mb-6 text-[#2b4433]">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Eco-Friendly Materials</h3>
              <p className="text-neutral-600">
                Bamboo, wood, natural fibers, leaves, stone, and plants thoughtfully sourced for low environmental impact.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#dbe1d6] rounded-full flex items-center justify-center mb-6 text-[#2b4433]">
                <Globe2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Global Craftsmanship</h3>
              <p className="text-neutral-600">
                Designed in Montreal, Canada, and ethically handcrafted by talented artisans in India.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#dbe1d6] rounded-full flex items-center justify-center mb-6 text-[#2b4433]">
                <HeartHandshake size={32} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Corporate Gifting</h3>
              <p className="text-neutral-600">
                Unique, customizable corporate gifts designed to reflect your brand's commitment to sustainability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#dbe1d6] rounded-full flex items-center justify-center mb-6 text-[#2b4433]">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Ethical Sourcing</h3>
              <p className="text-neutral-600">
                Fair wages and responsible practices guaranteed through our dedicated procurement office.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              href="/our-products" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#2b4433] text-white font-bold rounded-full hover:bg-[#1f3125] transition-colors"
            >
              Explore Our Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
