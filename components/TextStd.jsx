import React from "react";

const TextStd = ({ children }) => (
  <>
    <span className="content">{children}</span>
    <style jsx>{`
      .content {
        color: #d1c4e9;
        line-height: 1.4;
      }
      @media only screen and (max-width: 600px) {
        .content {
          font-size: 0.9rem;
        }
      }
    `}</style>
  </>
)

export default TextStd;
