import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "Eco-conscious Shopper",
    text: "The Bamboo Corporate Gift Set was the perfect sustainable gift for my team. Everyone loved the premium feel and the eco-friendly mission behind it. Highly recommended!",
  },
  {
    name: "Michael Chen",
    role: "Verified Buyer",
    text: "I bought the bamboo water bottle and coffee mug trio. The quality is exceptional, and it's so lightweight. I carry it everywhere. Merceque really delivers on their promise.",
  },
  {
    name: "Emma Davis",
    role: "Daily User",
    text: "Switched to Merceque's bamboo combs and toothbrushes and I'm never going back. Beautiful aesthetics, zero plastic, and they last forever. A must-have for a green home.",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-primary/5 dark:bg-primary/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-4">
            Hear From Our <span className="text-primary italic font-serif lowercase">Community</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real stories from people who made the switch to a sustainable lifestyle with Merceque.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-background rounded-3xl p-8 border border-border-subtle shadow-sm flex flex-col justify-between animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'both' }}
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg text-foreground italic mb-8">
                  "{review.text}"
                </p>
              </div>
              <div>
                <p className="font-bold uppercase tracking-wider text-foreground">
                  {review.name}
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
