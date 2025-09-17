import { StandardLayout } from "~/layouts/StandardLayout";
import type { Route } from "./+types/resume";
import { ResumeItem } from "./ResumeItem";
import { ResumeCategory } from "./ResumeCategory";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mike Hockerman" },
  ];
}

export default function Resume() {
  return (
    <StandardLayout>
      <div className="flex flex-col gap-8 max-w-lg">
        <span className="text-sm font-serif text-cobalt-300 underline decoration-dotted">
          <a href="/resume-v9-mike-hockerman.pdf" target="_blank">
            Also available as a PDF.
          </a>
        </span>

        <ResumeCategory title="Current Focuses">
          <ResumeItem
            accentColor="#DB0646"
            company="Wren Software"
            description="My software consulting company focused on building high-efficiency web experiences for nonprofits based in the central Indiana area."
            href="https://wrensoftware.com"
            titles={[ {title: "Founder", tenure: ["2025", "Now"] }]}
          />
          <ResumeItem
            accentColor="#31BAAE"
            company="Trava Security"
            description="I lead Trava's engineering team, where we iterate on high-impact products to help keep our customers' computer systems secure."
            href="https://travasecurity.com/"
            titles={[
              { title: "Lead Software Engineer", tenure: ["2025", "Now"] },
              { title: "Senior Software Engineer", tenure: ["2023", "2025" ] },
            ]}
          />
          <ResumeItem
            accentColor="#FEBE0B"
            company="Indy Hackers"
            description="A central Indiana non-profit focused on fostering our tech community."
            href="https://indyhackers.org"
            titles={[{ title: "Board Member", tenure: ["2024", "Now"]}]}
          />
        </ResumeCategory>

        <ResumeCategory title="Software Engineering">
          <ResumeItem
            accentColor="#F6821F"
            company="Cloudflare"
            href="https://cloudflare.com"
            titles={[{ title: "Systems Engineer", tenure: ["2021", "2023"]}]}
          />
          <ResumeItem
            accentColor="#566ACB"
            company="Structural"
            href="https://structural.com"
            titles={[
              { title: "Senior Software Engineer", tenure: ["2020", "2021" ]},
              { title: "Software Engineer", tenure: ["2016", "2020" ]}
            ]}
          />
          <ResumeItem
            accentColor="#D71616"
            company="Yelp"
            href="https://yelp.com"
            titles={[{ title: "Software Engineering Intern", tenure: "2015" }]}
          />
          <ResumeItem
            accentColor="#76D0E8"
            company="Interactive Intelligence"
            href="https://genesys.com/"
            titles={[{ title: "Software Engineering Intern", tenure: "2014" }]}
          />
        </ResumeCategory>

        <ResumeCategory title="Entrepreneurship">
          <ResumeItem
            accentColor="#09D7AB"
            company="ATMP Indy"
            href="https://atmpindy.com"
            titles={[{ title: "Co-Founder", tenure: ["2021", "2024" ]}]}
          />
        </ResumeCategory>

        <ResumeCategory title="Education">
          <ResumeItem
            accentColor="#CFB991"
            company="Purdue University"
            href="https://purdue.edu/"
            titles={[
              { title: "Computer Science", tenure: ["2011", "2015"] },
              { title: "Organizational Leadership & Supervision", tenure: "Minor" }
            ]}
          />
        </ResumeCategory>

        <ResumeCategory title="Community">
          <ResumeItem
            accentColor="#4EB073"
            company="TechPoint Tech Fellowship"
            href="https://techpoint.org/"
            titles={[
              { title: "Curriculum Chair", tenure: ["2016", "2018"] },
              { title: "Member", tenure: ["2016", "2018"] }
            ]}
          />
          <ResumeItem
            accentColor="#CFB991"
            company="Purdue ACM SIGAPP"
            href="https://techpoint.org/"
            titles={[
              { title: "President", tenure: "2015" },
              { title: "Member", tenure: ["2012", "2015"] },
            ]}
          />
          <ResumeItem
            accentColor="#3EB4CA"
            company="TechPoint Xtern"
            href="https://techpoint.org/"
            titles={[
              { title: "Member", tenure: "2014" }
            ]}
          />
        </ResumeCategory>
      </div>
    </StandardLayout>
  )
}
