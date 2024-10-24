"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import GridGlobe from "./GridGlobe";
import { useState } from "react";
import { ButtonsCard } from "./ButtonsCard";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  header,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "NextJS", "Typescript"];
  const rightLists = ["Tailwind", "NodeJS", "GraphQL"];

  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text = "muhammetbakiduman@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className={`${id === 6 && "flex justify-center"} h-full"`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              className={cn("object-cover object-center", imgClassName)}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              className="w-full h-full object-cover object-center"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white text-3xl md:text-4xl lg:text-7xl font-bold text-center px-4 pointer-events-none"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-bold text-lg lg:text-3xl dark:text-neutral-200 max-w-96 z-10">
            {title}
          </div>
          <div className="font-sans font-extralight text-xs md:text-base dark:text-neutral-300 z-10 pt-1">
            {description}
          </div>
          {id === 2 && <GridGlobe />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-6 -top-5">
              <div className="flex flex-col gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="font-mono rounded bg-slate-900 p-3 lg:p-4 text-center text-xs lg:text-base opacity-50 lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
                <span className="rounded bg-slate-900 p-4 h-12 opacity-50 lg:opacity-100"></span>
              </div>
              <div className="flex flex-col gap-3 lg:gap-8 -my-5">
                <span className="rounded bg-slate-900 p-4 h-12 opacity-50 lg:opacity-100"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="font-mono rounded bg-slate-900 p-3 lg:p-4 text-center text-xs lg:text-base opacity-50 lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              ></div>
              <ButtonsCard
                onClick={handleCopy}
                className="text-white font-bold"
              >
                <IoCopyOutline className="mr-3" />
                {copied ? "Copied" : "Copy My Mail"}
              </ButtonsCard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
