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
}

export const Badge = ({ hoverEffect, icon, label }: Props) => {
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
  return (
    <span
      className={clsx([styles.badge, hoverEffect && styles.badgeClickable])}
    >
      {icon && <FontAwesomeIcon className={styles.faicon} icon={faicon} />}
      <span className={clsx(styles.label, icon && styles.labelWithIcon)}>
        {label}
      </span>
    </span>
  );
};
