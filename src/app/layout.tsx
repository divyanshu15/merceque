import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Merceque | Natural & Eco-conscious Bamboo Products",
  description: "Elevate your lifestyle and corporate gifting with Merceque's premium, eco-conscious bamboo products. Join the mission for a greener planet.",
  openGraph: {
    title: "Merceque | Natural & Eco-conscious Bamboo Products",
    description: "Elevate your lifestyle and corporate gifting with Merceque's premium, eco-conscious bamboo products. Join the mission for a greener planet.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merceque | Natural & Eco-conscious Bamboo Products",
    description: "Elevate your lifestyle and corporate gifting with Merceque's premium, eco-conscious bamboo products.",
  }
};

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary-dark selection:text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="noise-overlay" />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
