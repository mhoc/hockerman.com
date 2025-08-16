"use client";

import clsx from "clsx";
import { Brain, CircleUserRound } from "lucide-react";
import { useState } from "react";
import Markdown from "react-markdown";

export function ATextConversationMessage({
  children,
  meta,
  metaLabel,
  sender,
  senderLabel,
}: {
  children: string | string[];
  meta?: string;
  metaLabel?: string;
  sender: "user" | "ai";
  senderLabel?: string;
}) {
  const [showMeta, setShowMeta] = useState(false);
  return (
    <div
      className={clsx("flex flex-col gap-2 max-w-[95%] md:max-w-[70%] rounded-xl px-3 py-2", {
        "bg-cobalt-800 border-1 border-cobalt-600 self-end": sender === "user",
        "bg-gray-900 border-1 border-gray-700": sender === "ai",
      })}
    >
      <Markdown
        components={{
          p: ({ children }) => {
            return (
              <p
                className={clsx("text-md font-serif wrap-normal", {
                  "text-sky-100": sender === "user",
                  "text-slate-300": sender === "ai" && !showMeta,
                  "text-slate-400 italic": sender === "ai" && showMeta,
                })}
              >
                {children}
              </p>
            );
          },
        }}
      >
        {showMeta ? meta : Array.isArray(children) ? children.join(" ") : children}
      </Markdown>
      {sender === "user" && <CircleUserRound className="self-end text-rose-300 w-4 h-4" />}
      {sender === "ai" && (
        <div className="flex flex-row items-center gap-2">
          <Brain className="text-gray-400 w-4 h-4" />
          {senderLabel && <span className="text-sm text-gray-500 font-serif">{senderLabel}</span>}
          {meta && (
            <span
              className="text-sm text-gray-500 font-serif underline decoration-dotted cursor-pointer"
              onClick={() => setShowMeta(!showMeta)}
            >
              {showMeta ? "Back" : metaLabel ?? "Additional Info"}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
