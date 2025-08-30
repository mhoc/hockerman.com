import { SpotifyNowPlayingBanner } from "../SpotifyNowPlayingBanner";
import { NavArticles } from "./NavArticles";
import { NavProjects } from "./NavProjects";
import { NavBio } from "./NavBio";

export function Sidenav() {
  return (
    <div className="hidden md:flex flex-col items-end bg-cobalt-950 h-screen min-w-[30vw] w-[30vw] px-8 py-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <span className="text-cobalt-300 text-xl">Mike Hockerman</span>
          <span className="text-sm text-cobalt-500">mike@hockerman.com</span>
          <span className="text-sm text-cobalt-500 select-none">Indiana, USA</span>
        </div>
        <NavBio />
        <SpotifyNowPlayingBanner />
        <NavArticles />
        <NavProjects />
      </div>
    </div>
  );
}
