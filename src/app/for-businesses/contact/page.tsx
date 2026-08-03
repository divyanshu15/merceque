"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function B2BContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    quantity: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/b2b-orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", product: "", quantity: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <main className="flex min-h-screen flex-col w-full pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 md:p-12 shadow-sm">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">B2B Order Inquiry</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-10 text-lg">
          Please fill out the form below with your requirements and estimated quantities. Our team will get back to you with a personalized quote.
        </p>

        {status === "success" && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded relative mb-8" role="alert">
            <strong className="font-bold block mb-1">Success!</strong>
            <span className="block sm:inline">Your inquiry has been submitted. We'll be in touch soon.</span>
          </div>
        )}

        {status === "error" && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded relative mb-8" role="alert">
            <strong className="font-bold block mb-1">Error!</strong>
            <span className="block sm:inline">There was a problem submitting your inquiry. Please try again.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-medium text-foreground">Full Name</label>
            <input
              type="text"
              id="name"
              required
              className="px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium text-foreground">Email Address</label>
            <input
              type="email"
              id="email"
              required
              className="px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="product" className="font-medium text-foreground">What do you want to purchase?</label>
            <textarea
              id="product"
              required
              rows={4}
              placeholder="e.g., Bamboo Combs, Bamboo Cutlery..."
              className="px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="quantity" className="font-medium text-foreground">Estimated Quantity</label>
            <input
              type="text"
              id="quantity"
              required
              placeholder="e.g., 500 units"
              className="px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            />
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            className="w-full py-4 text-lg mt-4 disabled:opacity-50"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Submitting..." : "Submit Inquiry"}
          </Button>
        </form>
      </div>
    </main>
  );
}
