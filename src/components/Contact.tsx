"use client";

import React, { useState } from "react";
import { Button } from "./ui/Button";
import { executeRecaptcha } from "@/components/RecaptchaProvider";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const gRecaptchaToken = await executeRecaptcha("contact_form");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, gRecaptchaToken }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "There was an issue sending your message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Network error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-28 2xl:px-36 bg-transparent relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4 text-foreground">
            Get in touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            For inquiries regarding our eco-friendly bamboo products, partnerships, or support.
          </p>
        </div>

        {status === "success" && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl mb-8">
            <strong className="font-bold block mb-1">Message Sent!</strong>
            <span>Thank you for reaching out. We have received your message and will respond shortly.</span>
          </div>
        )}

        {status === "error" && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl mb-8">
            <strong className="font-bold block mb-1">Error Sending Message</strong>
            <span>{errorMessage || "There was an issue sending your message. Please try again or email us directly."}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-base font-bold uppercase tracking-wide text-gray-800 dark:text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 text-foreground focus:outline-none focus:border-primary hover:border-black/20 dark:hover:border-white/30 focus:shadow-[0_0_15px_rgba(0,255,127,0.15)] transition-all duration-300 rounded-xl backdrop-blur-sm"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-base font-bold uppercase tracking-wide text-gray-800 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 text-foreground focus:outline-none focus:border-primary hover:border-black/20 dark:hover:border-white/30 focus:shadow-[0_0_15px_rgba(0,255,127,0.15)] transition-all duration-300 rounded-xl backdrop-blur-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-base font-bold uppercase tracking-wide text-gray-800 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 text-foreground focus:outline-none focus:border-primary hover:border-black/20 dark:hover:border-white/30 focus:shadow-[0_0_15px_rgba(0,255,127,0.15)] transition-all duration-300 rounded-xl backdrop-blur-sm resize-y"
              placeholder="YOUR MESSAGE..."
            />
          </div>

          <Button 
            type="submit" 
            disabled={status === "loading"}
            className="self-start mt-4 px-12 disabled:opacity-50"
          >
            {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
          </Button>
        </form>
      </div>
    </section>
  );
}
