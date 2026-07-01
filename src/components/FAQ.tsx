"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you offer international shipping?",
    answer: "Yes! We ship globally. Shipping costs and delivery times vary by location, but we strive to use carbon-neutral shipping partners whenever possible."
  },
  {
    question: "Are your products completely plastic-free?",
    answer: "Absolutely. Our core philosophy is zero plastic. Our products are made from bamboo, and we use entirely plastic-free, biodegradable packaging for all orders."
  },
  {
    question: "Do you offer wholesale or bulk discounts?",
    answer: "Yes, we partner with businesses for wholesale orders, corporate gifting, and hospitality amenities. Please visit our 'For Businesses' page or reach out via the contact form above."
  },
  {
    question: "How should I care for my bamboo products?",
    answer: "Bamboo is naturally durable and antimicrobial. We recommend hand washing bamboo items with mild soap and drying them immediately. Do not soak them in water or place them in the dishwasher."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unused items in their original packaging. Since hygiene is important for personal care products, opened items may not be eligible for returns."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 bg-black/5 dark:bg-[#0a0a0a] border-t border-black/10 dark:border-white/10 relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4 text-foreground">
            Frequently Asked <span className="text-primary italic font-serif">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white/10 shadow-lg' : 'bg-transparent hover:bg-black/5 dark:hover:bg-white/5'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-lg md:text-xl text-foreground pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 pt-2 text-gray-600 dark:text-gray-400 text-lg leading-relaxed border-t border-black/5 dark:border-white/5">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
