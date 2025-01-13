import { FaEnvelope, FaFileLines, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Badge } from "./components/Badge/Badge";
import styles from "./index.module.css";
import { SpotifyNowPlayingBadge } from "./components/SpotifyNowPlayingBadge/SpotifyNowPlayingBadge";

export default function Home() {
  return (
    <main>
      <div className={styles.xcontainer}>
        <span className="text-xl italic text-slate-200 mb-2">
          Mike Hockerman
        </span>
        <div className="flex flex-row flex-wrap gap-2 mb-2">
          <a href="mailto:mike@hockerman.com" target="_blank">
            <Badge color="text-red-300" hover Icon={FaEnvelope}>
              mike@hockerman.com
            </Badge>
          </a>
          <a href="/resume-v9-mike-hockerman.pdf" target="_self">
            <Badge color="text-blue-300" hover Icon={FaFileLines}>
              Resume
            </Badge>
          </a>
          <a href="https://github.com/mhoc" target="_blank">
            <Badge color="text-zinc-300" hover Icon={FaGithub}>
              mhoc
            </Badge>
          </a>
          <a href="https://linkedin.com/in/mhoc" target="_blank">
            <Badge color="text-blue-300" hover Icon={FaLinkedin}>
              mhoc
            </Badge>
          </a>
        </div>
        <div className="flex flex-row flex-wrap gap-2 mb-2">
          <SpotifyNowPlayingBadge />
        </div>
      </div>
    </main>
  );
}
