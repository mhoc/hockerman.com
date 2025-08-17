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
      className={clsx("flex flex-col gap-2 max-w-[95%] md:max-w-[80%] rounded-xl px-3 py-2", {
        "bg-cobalt-800 border-1 border-cobalt-600 self-end": sender === "user",
        "bg-gray-900 border-1 border-gray-700": sender === "ai",
      })}
    >
    <div className="w-full max-w-full overflow-x-scroll pb-2">
      <Markdown
        components={{
          code: ({ children }) => {
            return (
              <code className="text-sm text-cobalt-300 leading-none">{children}</code>
            )
          },
          h1: ({ children }) => {
            return (
              <h1 className="text-xl font-semibold text-cobalt-300 font-serif">{children}</h1>
            )
          },
          h2: ({ children }) => {
            return (
              <h2 className="text-lg font-semibold text-cobalt-300 font-serif mt-2">{children}</h2>
            )
          },
          h3: ({ children }) => {
            return (
              <h3 className="text-md font-semibold text-cobalt-300 font-serif mt-1">{children}</h3>
            )
          },
          li: ({ children }) => {
            return <li className="text-sm text-cobalt-300">{children}</li>
          },
          p: ({ children }) => {
            return (
              <p
                className={clsx("text-md font-serif wrap-anywhere", {
                  "text-sky-100": sender === "user",
                  "text-slate-300": sender === "ai" && !showMeta,
                  "text-slate-400 italic": sender === "ai" && showMeta,
                })}
              >
                {children}
              </p>
            );
          },
          pre: ({ children }) => {
            return (
              <pre className="py-2 leading-none">{children}</pre>
            )
          }
        }}>
          {showMeta ? meta : Array.isArray(children) ? children.join(" ") : children}
        </Markdown>
      </div>
      {sender === "user" && <CircleUserRound className="self-end text-cobalt-400 w-4 h-4" />}
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
