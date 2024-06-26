"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion";
import { useState } from "react";
import type { ParticipantsViewProps } from "./participants-view";


export default function AnimatedParticipantsView({
  participants, children
}: ParticipantsViewProps) {
  const [onHover, setHover] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <div className="w-full h-full relative isolate">
      <div className="flex flex-wrap items-center justify-center inset-1 absolute group"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={handleMouseMove}>
        <AnimatePresence mode="sync">
          {onHover && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -top-12 -left-0 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2 text-white group-hover:opacity-100 opacity-0 pointer-events-none"
            >
              {participants[0].name}{participants.length > 1 ? ` + ${participants.length - 1} more` : ""}
            </motion.div>
          )}
        </AnimatePresence>
        {children}
      </div>
    </div>
  )
}
