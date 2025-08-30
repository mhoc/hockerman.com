import { NavArticles } from "./components/navigation/NavArticles";
import { NavBio } from "./components/navigation/NavBio";
import { NavProjects } from "./components/navigation/NavProjects";
import { SpotifyNowPlayingBanner } from "./components/SpotifyNowPlayingBanner";

export default function Home() {
  return (
    <div className="flex md:hidden flex-col gap-8 p-4 max-w-60">
      <NavBio />
      <SpotifyNowPlayingBanner />
      <NavArticles />
      <NavProjects />
    </div>
  );
}
