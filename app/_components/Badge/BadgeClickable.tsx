import { Badge } from "./Badge";
import styles from "./BadgeClickable.module.css";

import { Props as BadgeProps } from "./Badge";

interface Props {
  icon: BadgeProps["icon"];
  label: BadgeProps["label"];
  link: string;
  target: string;
}

export const BadgeClickable = ({ icon, label, link, target }: Props) => {
  return (
    <a
      className={styles.badgeClickable}
      href={link ?? undefined}
      target={target}
    >
      <Badge hoverEffect icon={icon} label={label} />
    </a>
  );
};
