import { ReactNode } from "react";

import colors from "../styles/colors";

export interface TextProps {
  color?: "primary" | "glow" | "muted";
  children: ReactNode;
  size?: "body" | "h1" | "h2";
}

export const Text = (props: TextProps) => {
  const { color = "primary", children, size = "body" } = props;

  const classes = [
    "text",
    color === "primary" ? "color-primary" : "",
    color === "glow" ? "color-glow" : "",
    color === "muted" ? "color-muted" : "",
    size === "body" ? "size-body" : "",
    size === "h1" ? "size-h1" : "",
    size === "h2" ? "size-h2" : "",
  ].join(" ");

  return (
    <>
      <span className={classes}>{children}</span>
      <style jsx>{`
        .text {
        }
        .color-primary {
          color: ${colors.primary};
        }
        .color-glow {
          color: ${colors.primary};
          textshadow: 0 0 1px ${colors.secondary}, 0 0 2px ${colors.secondary},
            0 0 32px ${colors.secondary}, 0 0 256px ${colors.secondary};
        }
        .color-muted {
          color: ${colors.deemphasize};
        }
        .size-body {
          font-size: 1rem;
        }
        .size-h1 {
          font-size: 1.6rem;
        }
        .size-h2 {
          font-size: 1.2rem;
        }
        @media only screen and (max-width: 600px) {
          .size-body {
            font-size: 0.9rem;
          }
          .size-h1 {
            font-size: 1.2rem;
          }
          .size-h2 {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};
