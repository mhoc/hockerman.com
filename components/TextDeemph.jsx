import React from "react";

const TextDeemph = ({ children }) => (
  <>
    <span className="deemph">{children}</span>
    <style jsx>{`
      .deemph {
        color: #616161;
      }
    `}</style>
  </>
)

export default TextDeemph;
