import {
  faGithub,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFile,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Badge.module.css";

interface Props {
  icon: "email" | "file" | "github" | "linkedin" | "spotify";
  link: string;
  target?: "_self" | "_blank";
  text: React.ReactNode;
}

export const Badge = ({ icon, link, target, text }: Props) => {
  const linkTarget = target ?? "_self";
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
    <a className={styles.link} href={link} target={linkTarget}>
      <span className={styles.badge}>
        <FontAwesomeIcon className={styles.faicon} icon={faicon} />
        <span className={styles.label}>{text}</span>
      </span>
    </a>
  );
};
