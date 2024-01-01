import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import styles from "./Badge.module.css";

export interface Props {
  backgroundColor?: string;
  borderColor?: string;
  hoverEffect?: boolean;
  icon?: IconDefinition;
  label: React.ReactNode;
}

export const Badge = ({
  backgroundColor,
  borderColor,
  hoverEffect,
  icon,
  label,
}: Props) => {
  const computedStyles = {
    ...(backgroundColor ? { backgroundColor } : {}),
    ...(borderColor ? { borderColor } : {}),
  };
  return (
    <span
      className={clsx([styles.badge, hoverEffect && styles.badgeClickable])}
      style={computedStyles}
    >
      {icon && <FontAwesomeIcon className={styles.faicon} icon={icon} />}
      <span className={clsx(styles.label, icon && styles.labelWithIcon)}>
        {label}
      </span>
    </span>
  );
};
