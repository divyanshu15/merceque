import { FigmaHero } from "@/components/figma-home/FigmaHero";
import { GiftingCombos } from "@/components/figma-home/GiftingCombos";
import { CollectionsGrid } from "@/components/figma-home/CollectionsGrid";
import { QuoteSection } from "@/components/figma-home/QuoteSection";
import { SignatureServices } from "@/components/figma-home/SignatureServices";
import { ViewAllProducts } from "@/components/figma-home/ViewAllProducts";
import { SocialFollow } from "@/components/figma-home/SocialFollow";
import { InfoGrid } from "@/components/figma-home/InfoGrid";
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

        {/* Sections overlay on top of background */}
        <div className="relative z-10">
          <CollectionsGrid />
          <QuoteSection />
          <SignatureServices />
          <ViewAllProducts />
          <SocialFollow />
          <InfoGrid />
        </div>
      </div>
    </main>
  );
}
