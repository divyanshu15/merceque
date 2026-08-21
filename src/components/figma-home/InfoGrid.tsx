import React from "react";
import { Globe, User, Lock, Calendar } from "lucide-react";

const items = [
  {
    icon: Globe,
    heading: "Subheading",
    body: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  },
  {
    icon: User,
    heading: "Subheading",
    body: "Body text for whatever you'd like to suggest. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  },
  {
    icon: Lock,
    heading: "Subheading",
    body: "Body text for whatever you'd like to claim. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  },
  {
    icon: Calendar,
    heading: "Subheading",
    body: "Body text for whatever you'd like to type. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  },
];

export function InfoGrid() {
  return (
    <section className="w-full py-10 sm:py-14 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-28 2xl:px-36 bg-white/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 sm:gap-y-10">
        {items.map(({ icon: Icon, heading, body }, i) => (
          <div key={i} className="flex flex-col gap-2">
            <Icon className="w-6 h-6 text-black/70 mb-1" strokeWidth={1.5} />
            <h3 className="text-black font-semibold text-base sm:text-lg">{heading}</h3>
            <p className="text-black/80 text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
