"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export function CatalogForm() {
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
    <div className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 shadow-sm">
      <h3 className="text-2xl font-bold mb-4 text-foreground">Request Catalog & Quote</h3>
      <p className="text-neutral-600 dark:text-neutral-400 mb-6 text-sm">
        Fill out this form to explore our latest catalogue with pricing and customization options.
      </p>

      {status === "success" && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 text-sm" role="alert">
          <strong className="font-bold block mb-1">Success!</strong>
          <span className="block sm:inline">Your inquiry has been submitted. We'll be in touch soon.</span>
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6 text-sm" role="alert">
          <strong className="font-bold block mb-1">Error!</strong>
          <span className="block sm:inline">There was a problem submitting your inquiry. Please try again.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="font-medium text-foreground text-sm">Full Name</label>
          <input
            type="text"
            id="name"
            required
            className="px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="font-medium text-foreground text-sm">Email Address</label>
          <input
            type="email"
            id="email"
            required
            className="px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="product" className="font-medium text-foreground text-sm">Your Enquiry</label>
          <textarea
            id="product"
            required
            rows={3}
            placeholder="Please detail your request..."
            className="px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm"
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="quantity" className="font-medium text-foreground text-sm">Organisation Name</label>
          <input
            type="text"
            id="quantity"
            required
            placeholder="e.g., Acme Corp"
            className="px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          />
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          className="w-full py-3 mt-2 text-base font-semibold rounded-md disabled:opacity-50"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting..." : "Submit Inquiry"}
        </Button>
      </form>
    </div>
  );
}
