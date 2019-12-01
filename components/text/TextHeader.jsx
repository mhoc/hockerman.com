import React from "react";

import colors from "../../styles/colors";

const TextHeader = ({ children }) => {
  return (
    <>
      <div className="title">{children}</div>
      <style jsx>{`
        .title {
          color: ${colors.primary};
          font-size: 1.5rem;
        }
        @media only screen and (max-width: 600px) {
          .title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  )
}

export default TextHeader;
