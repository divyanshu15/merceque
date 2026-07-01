import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Merceque",
  description: "Get in touch with Merceque for inquiries regarding our eco-friendly bamboo products.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full pt-20">
      <Contact />
      <FAQ />
    </main>
  );
}
