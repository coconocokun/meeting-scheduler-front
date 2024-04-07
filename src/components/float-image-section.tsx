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
    <div className={cn(
      "transition-colors",
      currentArticle !== 0 && "text-white",
      currentArticle === 1 && "bg-indigo-950",
      currentArticle === 2 && "bg-slate-900"
    )}>
      <section id="learnMore" className="grid grid-cols-[2fr_3fr] container mx-auto">
        <div ref={articlesRef}>
          <article className="flex flex-col justify-center min-h-screen">
            <h2 className="text-lg md:text-5xl lg:text-7xl mb-3 md:mb-5 lg:mb-8 font-bold">Create a meeting schedule</h2>
            <p className="md:text-lg lg:text-xl !leading-loose">Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.</p>
          </article>
          <article className="flex flex-col justify-center min-h-screen">
            <h2 className="text-lg md:text-5xl lg:text-7xl mb-3 md:mb-5 lg:mb-8 font-bold">Invite guests</h2>
            <p className="md:text-lg lg:text-xl !leading-loose">See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.</p>
          </article>
          <article className="flex flex-col justify-center min-h-screen">
            <h2 className="text-lg md:text-5xl lg:text-7xl mb-3 md:mb-5 lg:mb-8 font-bold">Set the final meeting time</h2>
            <p className="md:text-lg lg:text-xl !leading-loose">Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.</p>
          </article>
        </div>
        <div>
          <div className="sticky top-0">
            <div className="grid grid-cols-1 grid-rows-1 min-h-screen items-center p-10">
              <Image
                src={Screenshot1}
                width={800}
                height={800}
                className={cn(
                  "w-full object-cover aspect-1 rounded col-start-1 row-start-1 transition-opacity opacity-0",
                  currentArticle === 0 && "opacity-100"
                )}
                alt="linear board demo"
              />
              <Image
                src={Screenshot2}
                width={800}
                height={800}
                className={cn(
                  "w-full object-cover aspect-1 rounded col-start-1 row-start-1 transition-opacity opacity-0",
                  currentArticle === 1 && "opacity-100"
                )}
                alt="linear board demo"
              />
              <Image
                src={Screenshot3}
                width={800}
                height={800}
                className={cn(
                  "w-full object-cover aspect-1 rounded col-start-1 row-start-1 transition-opacity opacity-0",
                  currentArticle === 2 && "opacity-100"
                )}
                alt="linear board demo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}