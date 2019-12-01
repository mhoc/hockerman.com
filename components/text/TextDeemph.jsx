import React from "react";

import colors from "../../styles/colors";

const TextDeemph = ({ children }) => (
  <>
    <span className="deemph">{children}</span>
    <style jsx>{`
      .deemph {
        color: ${colors.deemphasize};
      }
    `}</style>
  </>
)

export default TextDeemph;
