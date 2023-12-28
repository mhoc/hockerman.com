import { Suspense } from "react";

import { Badge } from "./_components/Badge/Badge";
import { SpotifyNowPlayingText } from "./SpotifyNowPlayingText";

import styles from "./index.module.css";

export default function Page() {
  return (
    <div className={styles.gradient}>
      <div className={styles.container}>
        <span
          style={{
            color: "#28323E",
            fontSize: "2.5rem",
            fontStyle: "italic",
          }}
        >
          Mike Hockerman
        </span>

        <div style={{ minHeight: "12px" }} />
        <div style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
          <Badge
            icon="email"
            link="mailto:mike@hockerman.com"
            target="_blank"
            text="mike@hockerman.com"
          />
          <Badge
            icon="file"
            link="/resume-mike-hockerman.pdf"
            target="_blank"
            text="Resume"
          />
          <Badge
            icon="github"
            link="https://github.com/mhoc"
            target="_blank"
            text="mhoc"
          />
          <Badge
            icon="linkedin"
            link="https://www.linkedin.com/in/mhoc/"
            target="_blank"
            text="mhoc"
          />
        </div>
        <div style={{ minHeight: "12px" }} />
        <Badge
          icon="spotify"
          link="/music"
          target="_self"
          text={
            <Suspense fallback={<span style={{ color: "#ECF0F1" }}>...</span>}>
              <SpotifyNowPlayingText />
            </Suspense>
          }
        />
      </div>
    </div>
  );
}
