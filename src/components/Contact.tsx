import React from "react";
import { Button } from "./ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-background relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4 text-foreground">
            Get in touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            For inquiries regarding our eco-friendly bamboo products, partnerships, or support.
          </p>
        </div>

        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-base font-bold uppercase tracking-wide text-gray-800 dark:text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 text-foreground focus:outline-none focus:border-primary hover:border-black/20 dark:hover:border-white/30 focus:shadow-[0_0_15px_rgba(0,255,127,0.15)] transition-all duration-300 rounded-xl backdrop-blur-sm"
                placeholder="JOHN DOE"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-base font-bold uppercase tracking-wide text-gray-800 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 text-foreground focus:outline-none focus:border-primary hover:border-black/20 dark:hover:border-white/30 focus:shadow-[0_0_15px_rgba(0,255,127,0.15)] transition-all duration-300 rounded-xl backdrop-blur-sm"
                placeholder="JOHN@EXAMPLE.COM"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-base font-bold uppercase tracking-wide text-gray-800 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              rows={5}
              className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 text-foreground focus:outline-none focus:border-primary hover:border-black/20 dark:hover:border-white/30 focus:shadow-[0_0_15px_rgba(0,255,127,0.15)] transition-all duration-300 rounded-xl backdrop-blur-sm resize-y"
              placeholder="YOUR MESSAGE..."
            />
          </div>

          <Button type="button" className="self-start mt-4 px-12">
            SEND MESSAGE
          </Button>
        </form>
      </div>
    </section>
  );
}
