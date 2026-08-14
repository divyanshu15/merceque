import { FigmaHero } from "@/components/figma-home/FigmaHero";
import { GiftingCombos } from "@/components/figma-home/GiftingCombos";
import { CollectionsGrid } from "@/components/figma-home/CollectionsGrid";
import { QuoteSection } from "@/components/figma-home/QuoteSection";
import { SignatureServices } from "@/components/figma-home/SignatureServices";
import { ViewAllProducts } from "@/components/figma-home/ViewAllProducts";
import { SocialFollow } from "@/components/figma-home/SocialFollow";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#dbe1d6]">
      <FigmaHero />

      {/* Shared background section */}
      <div className="relative w-full overflow-hidden">
        {/* Shared background image */}
        <Image
          src="/images/new/bg-image.png"
          alt="Background"
          fill
          className="object-cover object-bottom"
        />

        {/* Top gradient fade — masks image at top edge */}

        {/* Bottom gradient fade — masks image at bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-40 z-[1] bg-gradient-to-t from-[#0d1a0f] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-40 z-[1] bg-gradient-to-t from-[#2B483B] to-transparent pointer-events-none" />

        {/* Sections overlay on top of background */}
        <div className="relative z-10">
          <CollectionsGrid />
          <QuoteSection />
          <SignatureServices />
          <ViewAllProducts />
        </div>
      </div>

      <SocialFollow />
    </main>
  );
}
