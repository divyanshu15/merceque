import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-3 font-medium tracking-wide transition-all duration-300 rounded-full border",
        {
          "bg-primary text-background hover:bg-primary/90 border-primary shadow-[0_4px_14px_0_rgba(0,255,127,0.25)] hover:shadow-[0_6px_20px_rgba(0,255,127,0.4)] hover:-translate-y-0.5": variant === "primary",
          "bg-white/5 text-foreground hover:bg-white/10 border-white/10 hover:border-white/20 backdrop-blur-sm": variant === "outline",
          "bg-transparent text-foreground border-transparent hover:bg-white/5": variant === "ghost",
        },
        className
      )}
      {...props}
    />
  );
}
