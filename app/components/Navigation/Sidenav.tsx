import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SpotifyNowPlayingBanner } from "../SpotifyNowPlayingBanner";

export function Sidenav() {
  return (
    <div className="hidden md:flex flex-col items-end bg-[#08080D] h-screen w-[30vw] p-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <span className="text-gray-300 text-xl">Mike Hockerman</span>
          <span className="text-sm text-gray-500">mike@hockerman.com</span>
          <span className="text-sm text-gray-500">Indiana, USA</span>
        </div>
        <div className="flex flex-col gap-2">
          <a
            className="flex flex-row gap-2 items-center transition-colors"
            href="/resume-v9-mike-hockerman.pdf"
            target="_blank"
          >
            <FaFile className="text-slate-300" />
            <span className="text-slate-300 text-sm">Resume</span>
          </a>
          <a
            className="flex flex-row gap-2 items-center transition-colors"
            href="https://github.com/mhoc"
            target="_blank"
          >
            <FaGithub className="text-slate-300" />
            <span className="text-slate-300 text-sm">/mhoc</span>
          </a>
          <a
            className="flex flex-row gap-2 items-center transition-colors"
            href="https://linkedin.com/in/mhoc"
            target="_blank"
          >
            <FaLinkedin className="text-slate-300" />
            <span className="text-slate-300 text-sm">/mhoc</span>
          </a>
        </div>
        <SpotifyNowPlayingBanner />
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-sm text-slate-500">AI Experiments</span>
          </div>
          <a className="flex flex-row gap-2 items-center" href="/articles/gpt-5-and-chess">
            <span className="text-sm text-slate-300">GPT-5 and Chess</span>
            <span className="text-xs text-slate-500">2025-08</span>
          </a>
          <a className="flex flex-row gap-2 items-center">
            <span className="text-sm text-slate-300">Novel Two Sum in GPT-5</span>
            <span className="text-xs text-slate-500">2025-08</span>
          </a>
        </div>
      </div>
    </div>
  );
}
