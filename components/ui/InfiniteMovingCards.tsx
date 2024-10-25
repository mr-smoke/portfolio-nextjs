"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    desc: string;
    name: string;
    link: string;
    iconLists?: string[];
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[80vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 p-6 md:p-16 md:w-[60vw] flex items-center"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="relative z-20 mb-6 flex flex-row items-center justify-center text-center">
                <span className="flex flex-col gap-1">
                  <span className="text-xl md:text-3xl leading-[1.6] text-gray-400 font-bold">
                    {item.name}
                  </span>
                  <span className="text-xs md:text-sm leading-[1.6] text-gray-400 font-normal italic">
                    <a href={item.link} target="blank">
                      Github link for this project
                    </a>
                  </span>
                </span>
              </div>
              <span className="relative z-20 text-sm leading-3 md:text-xl md:leading-[1.6] text-gray-100 font-normal p-3 text-justify">
                {item.desc}
              </span>
              <div className="flex justify-center pt-6 transform translate-x-[10px]">
                {item.iconLists?.map((icon, index) => (
                  <span
                    key={index}
                    style={{ transform: `translateX(-${5 * index}px)` }}
                  >
                    <Image
                      src={icon}
                      alt="icon"
                      width={28}
                      height={28}
                      className="border border-slate-500 rounded-full sm:w-10 sm:h-10 w-7 h-7 p-1 sm:p-2 bg-gray-900"
                    />
                  </span>
                ))}
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
