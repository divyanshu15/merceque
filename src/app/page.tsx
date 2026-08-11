import { FigmaHero } from "@/components/figma-home/FigmaHero";
import { GiftingCombos } from "@/components/figma-home/GiftingCombos";
import { CollectionsGrid } from "@/components/figma-home/CollectionsGrid";
import { QuoteSection } from "@/components/figma-home/QuoteSection";
import { SignatureServices } from "@/components/figma-home/SignatureServices";
import { ViewAllProducts } from "@/components/figma-home/ViewAllProducts";
import { SocialFollow } from "@/components/figma-home/SocialFollow";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#dbe1d6]">
      <FigmaHero />
      <CollectionsGrid />
      <QuoteSection />
      <SignatureServices />
      <ViewAllProducts />
      <SocialFollow />
    </main>
  );
}
