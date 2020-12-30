import React from "react";

import colors from "../../styles/colors";

interface Props {
  children: any;
}

/**
 * a zero-width joiner is used here to specifically stop safari from turning some text fields
 * into phone numbers.
 */
const TextStd = ({ children }: Props) => (
  <>
    <span className="content">
      &zwj;{children}
    </span>
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
