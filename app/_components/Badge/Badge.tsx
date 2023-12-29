import {
  faGithub,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import styles from "./Badge.module.css";

export interface Props {
  hoverEffect?: boolean;
  icon?: "email" | "file" | "github" | "linkedin" | "spotify";
  label: React.ReactNode;
  progressFill?: number;
}

export const Badge = ({ hoverEffect, icon, label, progressFill }: Props) => {
  let faicon;
  switch (icon) {
    case "email":
      faicon = faEnvelope;
      break;
    case "file":
      faicon = faFileAlt;
      break;
    case "github":
      faicon = faGithub;
      break;
    case "linkedin":
      faicon = faLinkedin;
      break;
    case "spotify":
      faicon = faSpotify;
      break;
  }
  const progressFillStyles = progressFill
    ? {
        background:
          "linear-gradient(to left, rgba(255, 255, 255, 0.6) 50%, rgba(16, 185, 129, 0.6) 50%) right",
        backgroundSize: "200% 100%",
        backgroundPosition: `${100 - progressFill * 100}%`,
      }
    : {};
  return (
    <span
      className={clsx([styles.badge, hoverEffect && styles.badgeClickable])}
      style={progressFillStyles}
    >
      {icon && <FontAwesomeIcon className={styles.faicon} icon={faicon} />}
      <span className={clsx(styles.label, icon && styles.labelWithIcon)}>
        {label}
      </span>
    </span>
  );
};
