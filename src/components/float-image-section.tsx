"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Screenshot1 from "./../../public/images/create-a-meeting-schedule.png";
import Screenshot2 from "./../../public/images/screenshot2.png";
import Screenshot3 from "./../../public/images/screenshot3.png";

export default function FloatingImageSection() {
  const articlesRef = useRef<HTMLDivElement>(null);
  const [currentArticle, setCurrentArticle] = useState(0);

  useEffect(() => {
    function onScroll() {
      const container = articlesRef.current;
      if (!container) return;

      let current = 0;
      let currentOffset = Number.MAX_VALUE;
      for (let i = 0; i < container.childElementCount; i++) {
        const article = container.children[i];

        const { top, bottom } = article.getBoundingClientRect();
        let offset = top + bottom - window.innerHeight;
        offset *= offset;
        if (currentOffset > offset) {
          current = i;
          currentOffset = offset;
        }
      }
      setCurrentArticle(current);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [articlesRef, setCurrentArticle]);

  return (
    <div
      className={cn(
        "transition-colors",
        currentArticle !== 0 && "text-white",
        currentArticle === 1 && "bg-indigo-900",
        currentArticle === 2 && "bg-rose-900"
      )}
    >
      <section id="learnMore" className="container mx-auto grid grid-cols-1 grid-rows-1">
        <div ref={articlesRef} className="col-start-1 row-start-1">
          <article className="grid grid-cols-[2fr_3fr] container mx-auto min-h-screen snap-always snap-center">
            <div className="flex flex-col justify-center">
              <h2 className="text-lg md:text-5xl lg:text-7xl mb-3 md:mb-5 lg:mb-8 font-bold">
                Create a meeting schedule
              </h2>
              <p className="md:text-lg lg:text-xl !leading-loose">
                If you are a host of the meeting, first set up a meeting by submitting the required form. You also
                submit your preferred time, which will be displayed to guests so that they find the best time for them
                too.
              </p>
            </div>
            <div></div>
          </article>
          <article className="grid grid-cols-[3fr_2fr] container mx-auto min-h-screen snap-always snap-center">
            <div></div>
            <div className="flex flex-col justify-center">
              <h2 className="text-lg md:text-5xl lg:text-7xl mb-3 md:mb-5 lg:mb-8 font-bold">Invite guests</h2>
              <p className="md:text-lg lg:text-xl !leading-loose">
                Simply copy the link of your created meeting, then share the link with your friends/guests. They will
                enter the link to check whether their time is available or not.
              </p>
            </div>
          </article>
          <article className="grid grid-cols-[2fr_3fr] container mx-auto min-h-screen snap-always snap-center">
            <div className="flex flex-col justify-center">
              <h2 className="text-lg md:text-5xl lg:text-7xl mb-3 md:mb-5 lg:mb-8 font-bold">
                Set the final meeting time
              </h2>
              <p className="md:text-lg lg:text-xl !leading-loose">
                After guests submit their preferred time, find the best meeting time for the group. Let others know the
                finalized meeting time.
              </p>
            </div>
            <div></div>
          </article>
        </div>
        <div className="col-start-1 row-start-1" style={{ perspective: "100vw" }}>
          <div
            className="sticky top-0 grid grid-cols-[2fr_3fr] transition-transform duration-500 ease-[cubic-bezier(.59,-0.34,0,1.34)]"
            style={{
              transform: `scaleY(${currentArticle === 1 ? "-1" : "1"}) rotateY(${
                currentArticle === 1 ? "180" : "-0"
              }deg)`,
            }}
          >
            <div></div>
            <div className="grid grid-cols-1 grid-rows-1 min-h-screen items-center p-10">
              <Image
                src={Screenshot1}
                width={8000}
                height={8000}
                className={cn(
                  "shadow-lg w-full object-cover aspect-1 rounded-lg col-start-1 row-start-1 transition-opacity duration-300 delay-100 opacity-0",
                  currentArticle === 0 && "opacity-100"
                )}
                alt="linear board demo"
              />
              <Image
                src={Screenshot2}
                width={8000}
                height={8000}
                className={cn(
                  "shadow-lg w-full object-cover aspect-1 rounded-lg col-start-1 row-start-1 transition-opacity duration-300 delay-100 opacity-0 -scale-x-100 -scale-y-100",
                  currentArticle === 1 && "opacity-100"
                )}
                alt="linear board demo"
              />
              <Image
                src={Screenshot3}
                width={8000}
                height={8000}
                className={cn(
                  "shadow-lg w-full object-cover aspect-1 rounded-lg col-start-1 row-start-1 transition-opacity duration-300 delay-100 opacity-0",
                  currentArticle === 2 && "opacity-100"
                )}
                alt="linear board demo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
