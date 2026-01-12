import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa6";
import { GradientDivider } from "~/components/GradientDivider";
import { NavLink } from "~/components/NavLink";
import { NavSection } from "~/components/NavSection";
import { SpotifyBanner } from "~/components/SpotifyBanner";
import { StandardLayout } from "~/layouts/StandardLayout";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Mike Hockerman" }];
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
            <NavLink href="/resume" Icon={FaFile} label="Resume" />
            <NavLink href="https://linkedin.com/in/mhoc" Icon={FaLinkedin} label="/mhoc" target="_blank" />
            <NavLink href="https://github.com/mhoc" Icon={FaGithub} label="/mhoc" target="_blank" />
          </NavSection>
          <SpotifyBanner />
          <NavSection title="Projects">
            <NavLink href="/cobalt" label="Cobalt" />
            <NavLink href="https://grimgrimoire.com/" label="The Grim Grimoire" target="_blank" />
          </NavSection>
        </div>
      </div>
    </StandardLayout>
  );
}
