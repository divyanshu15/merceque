import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  GraduationCap,
  Store,
  School,
  ArrowRight,
} from "lucide-react";
import { CatalogForm } from "@/components/CatalogForm";

export const metadata: Metadata = {
  title: "For Businesses | Merceque",
  description:
    "Wholesale bamboo products and eco-conscious corporate gifting solutions.",
};

export default function ForBusinessesPage() {
  return (
    <main className="flex min-h-screen flex-col w-full pb-24 bg-[#dbe1d6]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-28 2xl:px-36 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 flex flex-col items-start gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 mt-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#2b4433] leading-tight">
              ECO-GIFT BOXES FOR <br />
              <span className="text-primary italic font-serif lowercase font-normal">
                Businesses &amp; Institutions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
              Welcome to our Wholesale Portal — where your values meet ours.
              Whether you&apos;re a university looking to appreciate faculty, a
              corporate office planning holiday gifts, or a retail store aiming
              to offer sustainable gifting options -- our Eco-Gift Boxes help
              your organization demonstrate environmental responsibility while
              maintaining premium presentation standards.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/our-products">
                <Button className="px-8 py-4 text-lg bg-[#2b4433] hover:bg-[#1a2b1f] text-white rounded-md">
                  Browse Our Eco-Collections
                </Button>
              </Link>
            </div>
          </div>

          <div
            id="catalog-request-form"
            className="w-full max-w-md lg:w-[450px] animate-in fade-in slide-in-from-right-8 duration-700 delay-300 mt-10"
          >
            <CatalogForm />
          </div>
        </div>

        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-[#8ba380]/20 rounded-full blur-3xl -z-10" />
      </section>

      {/* Why Choose Our Eco-Gift Boxes? */}
      <section className="relative px-4 sm:px-6 md:px-12 lg:px-24 xl:px-28 2xl:px-36 py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/new/bamboo_bath_kit.jpg"
            alt="Bamboo Eco-Gift Box"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#dbe1d6]/80" />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#2b4433] mb-16 text-center">
            Why Choose Our Eco-Gift Boxes?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-3 p-8 bg-white rounded-2xl">
              <h3 className="text-xl font-bold text-[#2b4433]">
                Sustainable & Ethical
              </h3>
              <p className="text-neutral-600">
                All items are responsibly sourced and eco-conscious.
              </p>
            </div>
            <div className="flex flex-col gap-3 p-8 bg-white rounded-2xl">
              <h3 className="text-xl font-bold text-[#2b4433]">
                Customizable Packaging
              </h3>
              <p className="text-neutral-600">
                Add your brand/logo or a personalized message.
              </p>
            </div>
            <div className="flex flex-col gap-3 p-8 bg-white rounded-2xl">
              <h3 className="text-xl font-bold text-[#2b4433]">
                Curated for Impact
              </h3>
              <p className="text-neutral-600">
                Each box is designed with purpose — ideal for staff recognition,
                client appreciation, or retail resale.
              </p>
            </div>
            <div className="flex flex-col gap-3 p-8 bg-white rounded-2xl">
              <h3 className="text-xl font-bold text-[#2b4433]">
                Zero-Waste Philosophy
              </h3>
              <p className="text-neutral-600">
                Minimal packaging. Maximum thoughtfulness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve & Image */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-28 2xl:px-36 py-24 bg-[#2b4433] text-white">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column: Heading and Grid */}
          <div className="flex-1 w-full">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-12">
              Who We Serve
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                <GraduationCap className="w-8 h-8 text-[#dbe1d6] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Universities & Colleges
                  </h3>
                  <p className="text-white/80 text-sm">
                    Welcome kits, faculty/staff gifts, student incentives
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                <Building2 className="w-8 h-8 text-[#dbe1d6] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Corporate Offices</h3>
                  <p className="text-white/80 text-sm">
                    Employee gifts, onboarding kits, holiday gifting
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                <Store className="w-8 h-8 text-[#dbe1d6] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Retail Stores</h3>
                  <p className="text-white/80 text-sm">
                    Eco-lifestyle products for resale
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                <School className="w-8 h-8 text-[#dbe1d6] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Other Organizations
                  </h3>
                  <p className="text-white/80 text-sm">
                    Green-themed prizes or fundraiser gifts
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-[500px] xl:w-[600px] h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl shrink-0">
            <Image
              src="/images/new/bamboo_thermos_box.png"
              alt="Wooden Cups Collection"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Order Details */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-28 2xl:px-36 py-24 bg-[#dbe1d6]">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#2b4433] mb-12 text-center">
            Order Details
          </h2>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-neutral-200">
            <ul className="space-y-6">
              <li className="flex flex-col sm:flex-row sm:items-start gap-2 border-b border-neutral-100 pb-6">
                <span className="font-bold text-[#2b4433] min-w-[200px] text-lg">
                  Minimum Order Quantity:
                </span>
                <span className="text-neutral-700 text-lg">
                  40 Eco-Gift Boxes <br />
                  <span className="text-neutral-500 text-base">
                    50 for individual products
                  </span>
                </span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-2 border-b border-neutral-100 pb-6">
                <span className="font-bold text-[#2b4433] min-w-[200px] text-lg">
                  Customization Available:
                </span>
                <span className="text-neutral-700 text-lg">
                  Yes <br />
                  <span className="text-neutral-500 text-base">
                    (MOQ for branded packaging may vary)
                  </span>
                </span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-2 border-b border-neutral-100 pb-6">
                <span className="font-bold text-[#2b4433] min-w-[200px] text-lg">
                  Shipping:
                </span>
                <span className="text-neutral-700 text-lg">
                  Canada & USA <br />
                  <span className="text-neutral-500 text-base">
                    Express & Standard options available
                  </span>
                </span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                <span className="font-bold text-[#2b4433] min-w-[200px] text-lg">
                  Lead Time:
                </span>
                <span className="text-neutral-700 text-lg">
                  50-75 days <br />
                  <span className="text-neutral-500 text-base">
                    (depending on quantity & customization)
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-28 2xl:px-36 py-24 bg-transparent">
        <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2b4433] mb-4">
            Request Our Wholesale Catalogue
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl">
            Want to explore our latest catalogue with pricing, product details,
            and customization options?
          </p>
          <div className="mt-8">
            <Link href="#catalog-request-form">
              <Button className="px-10 py-8 text-xl font-medium bg-[#2b4433] hover:bg-[#1a2b1f] text-white rounded-2xl shadow-lg transition-transform hover:scale-105">
                Request Catalogue
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
