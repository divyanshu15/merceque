import { Products } from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Merceque",
  description: "Browse our collection of eco-friendly, eco-conscious bamboo products.",
};

export default function OurProductsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full pt-20">
      <Products />
    </main>
  );
}
