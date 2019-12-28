import React from "react";

import colors from "../../styles/colors";

const TextDeemph = ({ children }) => (
  <>
    <span className="deemph">{children}</span>
    <style jsx>{`
      .deemph {
        color: ${colors.deemphasize};
      }
      @media only screen and (max-width: 600px) {
        .deemph {
          font-size: 0.9rem;
        }
      }
    `}</style>
  </>
)

export default TextDeemph;
