import { FaGithub, FaFile, FaLinkedin } from "react-icons/fa6";
import { GradientDivider } from "~/components/GradientDivider";
import { NavLink } from "~/components/NavLink";
import { StandardLayout } from "~/layouts/StandardLayout";
import type { Route } from "./+types/home";
import { NavSection } from "~/components/NavSection";
import { SpotifyNowPlayingBanner } from "~/components/SpotifyNowPlayingBanner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mike Hockerman" },
  ];
}

export default function Home() {
  return (
    <StandardLayout>
      <div className="flex flex-row gap-4">
        <GradientDivider />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-0">
            <div className="font-serif text-xl text-rose-200 leading-tight">Mike Hockerman</div>
            <div className="font-serif text-md text-cobalt-300 leading-tight">mike@hockerman.com</div>
            <div className="font-serif text-md text-cobalt-300 leading-tight">Indiana, USA</div>
          </div>
          <NavSection>
            <NavLink href="/resume-v9-mike-hockerman.pdf" Icon={FaFile} label="Resume" target="_blank" />
            <NavLink href="https://linkedin.com/in/mhoc" Icon={FaLinkedin} label="Linkedin" target="_blank" />
            <NavLink href="https://github.com/mhoc" Icon={FaGithub} label="Github" target="_blank" />
          </NavSection>
          <SpotifyNowPlayingBanner />
          <NavSection title="AI">
            <NavLink href="/articles/gpt-5-and-chess" label="GPT-5 and Chess" sublabel="2025-08" />
            <NavLink href="/articles/novel-two-sum-with-gpt-5" label="Novel Two-Sum in GPT-5" sublabel="2025-08" />
          </NavSection>
          <NavSection title="Projects">
            <NavLink href="/cobalt" label="Cobalt" />
          </NavSection>
        </div>
      </div>
    </StandardLayout>
  )
}
