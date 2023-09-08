import { ReactNode } from "react";

import styles from "./Text.module.css";

export interface TextProps {
  children: ReactNode;
  color?: "primary" | "glow" | "muted";
  size?: "body" | "h1" | "h2";
}

export default function Text(props: TextProps) {
  const { children, color = "primary", size = "body" } = props;
  const classes = [
    "text",
    color === "primary" ? styles.colorprimary : "",
    color === "glow" ? styles.colorglow : "",
    color === "muted" ? styles.colormuted : "",
    size === "body" ? styles.sizebody : "",
    size === "h1" ? styles.sizeh1 : "",
    size === "h2" ? styles.sizeh2 : "",
  ].join(" ");
  return <span className={classes}>{children}</span>;
}
