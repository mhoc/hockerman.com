import clsx from "clsx";
import { IconType } from "react-icons";
import styles from "./Badge.module.css";

export type Props = {
  children?: React.ReactNode;
  color?: string;
  hover?: boolean;
  Icon?: IconType;
  size?: "sm" | "md";
};

export const Badge = ({ children, color, hover, Icon, size = "md" }: Props) => {
  return (
    <div
      className={clsx(
        "flex flex-row items-center border border-zinc-600 transition-all rounded-2xl",
        { [styles.xhover]: hover },
        { "px-4 py-1": size === "md" },
        { "px-2": size === "sm" }
      )}
    >
      {Icon && <Icon className={clsx(color, styles.xicon)} />}
      <span
        className={clsx(
          styles.xlabel,
          "text-zinc-300",
          { "ml-2": !!Icon },
          { "text-md": size === "md" },
          { "text-sm": size === "sm" }
        )}
      >
        {children}
      </span>
    </div>
  );
};
