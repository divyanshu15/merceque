import { Products } from "@/components/Products";
import { Metadata } from "next";
import prisma from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Our Products | Merceque",
  description: "Browse our collection of eco-friendly, eco-conscious bamboo products.",
};

export const revalidate = 60; // Revalidate the page every 60 seconds

export default async function OurProductsPage() {
  let products: any[] = [];
  try {
    products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' }
    });
  } catch (error) {
    console.warn("⚠️ WARNING: Could not fetch products (Database likely not configured yet).");
  }

  return (
    <main className="flex min-h-screen flex-col w-full pt-20">
      <Products products={products} title={<>Eco<br/>Collections</>} category="combo" />
      <Products products={products} title={<>Individual<br/>Products</>} category="individual" hidePaddingTop />
    </main>
  );
}
