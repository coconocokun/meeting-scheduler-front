"use client";

import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";
import { MouseEventHandler, ReactNode, useCallback, useEffect, useState } from "react";


type State = "success" | "error" | "idle";
const TOAST_TIMEOUT = 2000;

export default function ClipboardButton(
  { children, content, asAbsoluteURL, className, successMessage }: {
    className?: ClassValue;
    children?: ReactNode;
    content: string;
    asAbsoluteURL?: boolean;
    successMessage?: string;
  }
) {

  const [state, setState] = useState<State>("idle");

  useEffect(() => {
    switch (state) {
      case "error":
      case "success":
        const timeout = window.setTimeout(() => setState("idle"), TOAST_TIMEOUT)
        return () => window.clearTimeout(timeout);
    }
  }, [state]);

  const onClick = useCallback(((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (state !== "idle") return;
    try {
      navigator.clipboard.writeText(asAbsoluteURL ? `${window.location.protocol}//${location.host}${content}` : content);
      setState("success");

    } catch (error) {
      console.error(error);
      setState("error");
    }
  }) satisfies MouseEventHandler<HTMLButtonElement>, [asAbsoluteURL, content])

  return (
    <button className={cn(className, "relative")}
      onClick={onClick}
      disabled={state !== "idle"}
    >
      {children}
      <div className={cn("absolute inset-0 bottom-0 shadow-lg text-white text-sm rounded flex items-center justify-center flex-wrap leading-none font-bold pointer-events-none",
        state === "idle" && "hidden",
        state !== "idle" && "backdrop-blur",
        state === "success" && "bg-green-700/80",
        state === "error" && "bg-rose-700/80")}>{
          state === "error" ? "Cannot access clipboard"
            : successMessage ?? "Copied"}</div>
    </button>
  )
}

