"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

export function CanvasRevealEffectDemo2({
  title,
  description,
  img,
  bgColor,
}: {
  title: string;
  description: string;
  img: string;
  bgColor: string;
}) {
  return (
    <>
      <Card title={title} img={img} description={description}>
        <CanvasRevealEffect animationSpeed={3} containerClassName={bgColor} />
      </Card>
    </>
  );
}

const Card = ({
  title,
  description,
  img,
  icon,
  children,
}: {
  title: string;
  description: string;
  img: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] group hover:rounded-xl overflow-hidden mt-4"
    >
      <Icon className="absolute h-12 w-12 -top-6 -left-6 dark:text-white text- group-hover:hidden" />
      <Icon className="absolute h-12 w-12 -bottom-6 -left-6 dark:text-white text- group-hover:hidden" />
      <Icon className="absolute h-12 w-12 -top-6 -right-6 dark:text-white text- group-hover:hidden" />
      <Icon className="absolute h-12 w-12 -bottom-6 -right-6 dark:text-white text- group-hover:hidden" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center group-hover:hidden">
          <img src={img} className="h-20 w-20" alt={title} />
        </div>
        <h2 className="text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 font-bold mx-8 group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="text-blue-200 text-lg opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-2 group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </p>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
