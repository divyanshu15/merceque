"use client";

import React, { useState } from "react";
import { Button } from "./ui/Button";
import { executeRecaptcha } from "@/components/RecaptchaProvider";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const gRecaptchaToken = await executeRecaptcha("newsletter_form");

      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, gRecaptchaToken }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "There was an error subscribing. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Network error occurred. Please try again.");
    }
  };

  return (
    <section className="py-32 px-6 bg-background relative border-t border-border-subtle overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          Join the <span className="text-primary italic font-serif lowercase">Movement</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
          Sign up for our newsletter to receive eco-conscious living tips, exclusive offers, and get 10% off your first gift box.
        </p>

        {status === "success" && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-3 rounded-full mb-8 max-w-xl mx-auto text-sm font-medium">
            Thank you for subscribing! You will receive our latest updates shortly.
          </div>
        )}

        {status === "error" && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-3 rounded-full mb-8 max-w-xl mx-auto text-sm font-medium">
            {errorMessage || "There was an error subscribing. Please try again."}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent border border-border-subtle rounded-full px-8 py-4 text-foreground focus:outline-none focus:border-primary transition-colors text-lg"
            required
          />
          <Button type="submit" disabled={status === "loading"} variant="primary" className="px-10 py-4 rounded-full text-lg whitespace-nowrap disabled:opacity-50">
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
}
