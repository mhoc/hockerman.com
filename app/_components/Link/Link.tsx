import styles from "./Link.module.css";

interface Props {
  children: React.ReactNode;
  hideUnderline?: boolean;
  href?: string;
  onClick?: () => void;
  rel?: "noopener";
  target?: "_blank";
}

export default function Link({
  children,
  hideUnderline,
  href,
  onClick,
  rel,
  target,
}: Props) {
  return (
    <a
      className={`${styles.link} ${hideUnderline ? styles.nounderline : ""}`}
      href={href ? href : "javascript:void"}
      onClick={onClick ? onClick : undefined}
      rel={rel}
      target={target}
    >
      {children}
    </a>
  );
}
