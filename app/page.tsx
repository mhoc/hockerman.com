import { faEnvelope, faFileArchive } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { Suspense } from "react";

import { BadgeClickable } from "./_components/Badge/BadgeClickable";
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <BadgeClickable
            icon={faEnvelope}
            label="mike@hockerman.com"
            link="mailto:mike@hockerman.com"
            target="_blank"
          />
          <BadgeClickable
            icon={faFileArchive}
            label="Resume"
            link="/resume-mike-hockerman.pdf"
            target="_blank"
          />
          <BadgeClickable
            icon={faGithub}
            label="mhoc"
            link="https://github.com/mhoc"
            target="_blank"
          />
          <BadgeClickable
            icon={faLinkedin}
            label="mhoc"
            link="https://www.linkedin.com/in/mhoc/"
            target="_blank"
          />
        </div>
        <div style={{ minHeight: "12px" }} />
        <BadgeClickable
          icon={faSpotify}
          label={
            <Suspense fallback={<span style={{ color: "#ECF0F1" }}>...</span>}>
              <SpotifyNowPlayingText />
            </Suspense>
          }
          link="/music"
          target="_self"
        />
      </div>
    </div>
  );
}
