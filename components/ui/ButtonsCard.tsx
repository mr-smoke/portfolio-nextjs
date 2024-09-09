"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl border border-neutral-100 dark:bg-black dark:border-white/[0.2] hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center cursor-pointer group"
    >
      <div className="absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.1]animate-shimmer" />
      <button
        className={cn(
          "w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group-hover:opacity-50",
          className
        )}
      >
        {children}
      </button>
    </div>
  );
};
