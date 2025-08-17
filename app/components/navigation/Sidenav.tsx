import Link from "next/link";
import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SpotifyNowPlayingBanner } from "../SpotifyNowPlayingBanner";
import { SidenavCategory } from "./SidenavCategory";
import { SidenavItem } from "./SidenavItem";

export function Sidenav() {
  return (
    <div className="hidden md:flex flex-col items-end bg-cobalt-950 h-screen min-w-[30vw] w-[30vw] p-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <span className="text-gray-300 text-xl">Mike Hockerman</span>
          <span className="text-sm text-gray-500">mike@hockerman.com</span>
          <span className="text-sm text-gray-500">Indiana, USA</span>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            className="flex flex-row gap-2 items-center transition-colors"
            href="/resume-v9-mike-hockerman.pdf"
            target="_blank"
          >
            <FaFile className="text-cobalt-300" />
            <span className="text-cobalt-300 text-sm">Resume</span>
          </Link>
          <Link
            className="flex flex-row gap-2 items-center transition-colors"
            href="https://github.com/mhoc"
            target="_blank"
          >
            <FaGithub className="text-cobalt-300" />
            <span className="text-cobalt-300 text-sm">/mhoc</span>
          </Link>
          <Link
            className="flex flex-row gap-2 items-center transition-colors"
            href="https://linkedin.com/in/mhoc"
            target="_blank"
          >
            <FaLinkedin className="text-cobalt-300" />
            <span className="text-cobalt-300 text-sm">/mhoc</span>
          </Link>
        </div>
        <SpotifyNowPlayingBanner />
        <SidenavCategory name="AI">
          <SidenavItem href="/articles/gpt-5-and-chess" label="GPT-5 and Chess" sublabel="2025-08" />
          <SidenavItem href="/articles/novel-two-sum-in-gpt5" label="Novel Two-Sum in GPT-5" sublabel="2025-08" />
        </SidenavCategory>
        <SidenavCategory name="Random">
          <SidenavItem href="/cobalt" label="Cobalt" />
        </SidenavCategory>
      </div>
    </div>
  );
}
