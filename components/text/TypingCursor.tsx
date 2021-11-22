import React from "react";

export const TypingCursor = () => {
  return (
    <>
      <span className="typing-cursor-blink">|</span>
      <style jsx global>{`
        .typing-cursor-blink {
          animation: typing-cursor-blink-anim 1s steps(2, start) infinite;
          -webkit-animation: typing-cursor-blink-anim 1s steps(2, start) infinite;
        }
        @keyframes typing-cursor-blink-anim {
          to {
            visibility: hidden;
          }
        }
        @-webkit-keyframes typing-cursor-blink-anim {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </>
  )
}
