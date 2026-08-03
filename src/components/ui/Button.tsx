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
          "bg-[#385642] text-white hover:bg-[#2b4433] border-[#385642] shadow-md hover:shadow-lg hover:-translate-y-0.5": variant === "primary",
          "bg-white/5 text-foreground hover:bg-white/10 border-white/10 hover:border-white/20 backdrop-blur-sm": variant === "outline",
          "bg-transparent text-foreground border-transparent hover:bg-white/5": variant === "ghost",
        },
        className
      )}
      {...props}
    />
  );
}
