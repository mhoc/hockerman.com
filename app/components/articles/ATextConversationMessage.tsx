import clsx from "clsx";
import { Brain, CircleUserRound } from "lucide-react";
import Markdown from "react-markdown";

export function ATextConversationMessage({
  children,
  sender,
  senderLabel,
}: {
  children: string;
  sender: "user" | "ai";
  senderLabel?: string;
}) {
  return (
    <div
      className={clsx("flex flex-col gap-2 max-w-[70%] rounded-xl px-3 py-2", {
        "bg-sky-950 border-1 border-sky-800 self-end": sender === "user",
        "bg-slate-800 border-1 border-slate-600": sender === "ai",
      })}
    >
      <Markdown
        components={{
          p: ({ children }) => {
            return (
              <p
                className={clsx("text-md font-serif", {
                  "text-sky-200": sender === "user",
                  "text-slate-300": sender === "ai",
                })}
              >
                {children}
              </p>
            );
          },
        }}
      >
        {children}
      </Markdown>
      {sender === "user" && <CircleUserRound className="self-end text-sky-400" />}
      {sender === "ai" && (
        <div className="flex flex-row items-center gap-2">
          <Brain className="text-slate-500 w-4 h-4" />
          {senderLabel && <span className="text-sm text-slate-500 font-serif">{senderLabel}</span>}
        </div>
      )}
    </div>
  );
}
