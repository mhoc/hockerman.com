import styles from "./GlassCard.module.css";

interface Props {
  backgroundProgress?: number;
  children: React.ReactNode;
  title?: string;
}

export const GlassCard = ({ backgroundProgress, children, title }: Props) => {
  const progressStyling = backgroundProgress
    ? {
        background:
          "linear-gradient(to left, rgba(255, 255, 255, .6) 50%, rgba(16, 185, 129, 0.6) 50%) right",
        backgroundSize: "200% 100%",
        backgroundPosition: `${100 - backgroundProgress * 100}%`,
      }
    : {};
  return (
    <div className={styles.container} style={progressStyling}>
      {title && (
        <div className={styles.titleContainer}>
          <span className={styles.title}>{title}</span>
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
