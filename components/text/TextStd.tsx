import React from "react";

import colors from "../../styles/colors";

interface Props {
  children: any;
  glow?: boolean;
}

/**
 * a zero-width joiner is used here to specifically stop safari from turning some text fields
 * into phone numbers.
 */
export const TextStd = ({ children, glow }: Props) => {
  const style = glow ? {
    textShadow: `0 0 1px ${colors.secondary}, 0 0 2px ${colors.secondary}, 0 0 32px ${colors.secondary}, 0 0 256px ${colors.secondary}`,
  } : {};
  return (
    <>
      <span className="content" style={style}>
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
  );
}
