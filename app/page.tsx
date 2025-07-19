import { FaEnvelope, FaFileLines, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Badge } from "./components/Badge/Badge";
import { SpotifyNowPlayingBadge } from "./components/SpotifyNowPlayingBadge/SpotifyNowPlayingBadge";
import { StravaMonthlyDistanceBadge } from "./components/StravaMonthlyDistanceBadge/StravaMonthlyDistanceBadge";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xl italic text-gray-200">Mike Hockerman</span>
      <div className="flex flex-row flex-wrap gap-2">
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
          <Badge color="text-gray-300" hover Icon={FaGithub}>
            mhoc
          </Badge>
        </a>
        <a href="https://linkedin.com/in/mhoc" target="_blank">
          <Badge color="text-blue-300" hover Icon={FaLinkedin}>
            mhoc
          </Badge>
        </a>
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        <SpotifyNowPlayingBadge />
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        <StravaMonthlyDistanceBadge />
      </div>
    </div>
  );
}
