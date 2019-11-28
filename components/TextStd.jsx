import React from "react";

import colors from "../styles/colors";

const TextStd = ({ children }) => (
  <>
    <span className="content">{children}</span>
    <style jsx>{`
      .content {
        color: ${colors.primary};
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
