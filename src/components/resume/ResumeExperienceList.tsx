import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import ResumeExperience from "./ResumeExperience";

const ALL_ITEMS = [
  {
    borderColor: "#34d399",
    company: "Trava",
    companyHref: "https://travasecurity.com",
    location: "Indianapolis, IN",
    positions: [{ title: "Senior Software Engineer", years: "2023-now" }],
    prose: {
      resume: [
        "Architected, built, maintained, and evolved an array of TypeScript and Golang-based systems powering cybersecurity scanning for our customers, leveraging technologies such as Temporal, React, and open source scanning tools to identify vulnerabilities.",
        "Balanced the prioritization of customer needs, business requirements, product evolution, and technical debt to meaningfully move the product suite forward.",
        "Mentored a team of entry and mid-level engineers, assisting with architecture, decision making, documentation, career development, and implementation.",
      ],
    },
    tags: ["professional"],
  },
  {
    borderColor: "#7c3aed",
    company: "Women Investors Network",
    companyHref: "https://womeninvestorsnetwork.org",
    location: "Indianapolis, IN",
    positions: [{ title: "Volunteer Web Engineer", years: "2019-now" }],
    prose: {
      resume: [
        "Planned & implemented back-of-house technical systems, including online accounts, mailing lists, domain management, and the primary marketing website.",
      ],
    },
    tags: ["community"],
  },
  {
    borderColor: "#1d4ed8",
    company: "TechPoint",
    companyHref: "https://techpoint.org",
    location: "Indianapolis, IN",
    positions: [{ title: "Volunteer Engineer", years: "2018-now" }],
    prose: {
      resume: [
        "Every year, the Xtern program matches hundreds of applicants for central Indiana technology internships to companies. Since ~2018, this matching has been automated using software I help execute and maintain.",
      ],
    },
    tags: ["community"],
  },
  {
    borderColor: "#fb923c",
    company: "Cloudflare",
    companyHref: "https://cloudflare.com",
    location: "Remote",
    positions: [{ title: "Systems Engineer", years: "2021-2023" }],
    prose: {
      resume: [
        "Architected & implemented new API and domains-facing platform features for enterprise customers including opt-in domain security enhancements and API access over mTLS.",
        "Modernized dozens of legacy workloads from traditional servers to Kubernetes.",
        "Responded to high severity on-call incidents affecting millions of customers and internet users, implementing observability and alerting improvements across our services.",
      ],
    },
    tags: ["professional"],
  },
  {
    borderColor: "#f1f5f9",
    company: "Practical Creatives",
    location: "Indianapolis, IN",
    positions: [{ title: "Founder", years: "2021-2023" }],
    prose: {
      resume: [
        "Practical Creatives was an Etsy store focused on the design, production, and sale of bespoke & useful 3D printed things.",
      ],
    },
    tags: ["hustles"],
  },
  {
    borderColor: "#c084fc",
    company: "Structural",
    companyHref: "https://structural.com",
    location: "Indianapolis, IN",
    positions: [
      { title: "Senior Software Engineer", years: "2020-2021" },
      { title: "Software Engineer", years: "2016-2020" },
    ],
    prose: {
      resume: [
        "Shipped countless product features spanning Structural’s Typescript & Node.JS backend and React frontend, including user sign-in and authorization, bulk user importing, business metrics tracking, the in-app admin panel, and more.",
        "Owned and maintained all cloud deployed assets on AWS, evolving our deployment strategy over the years from a single EC2 instance, to adopting Docker, Kubernetes, and eventually AWS ECS.",
        "Acted as engineering point-of-contact on security reviews and compliance, including four years of successful SOC-2 Type II audits.",
        "Led the implementation of a variety of system monitoring and instrumentation capabilities, including alerting, refining our on-call procedures, logging, and distributed tracing, generally with Datadog.",
      ],
    },
    tags: ["professional"],
  },
  {
    borderColor: "#15803d",
    company: "Indy Tech Fellowship",
    companyHref: "https://techpoint.org",
    location: "Indianapolis, IN",
    positions: [
      { title: "Board Chair, Curriculum", years: "2016-2018" },
      { title: "Member", years: "2016-2018" },
    ],
    prose: {
      resume: [
        "After graduating from Purdue, I joined on to help build the first class of TechPoint's Tech Fellowship program; a two year post-grad program for tech workers in Indianapolis focusing on continuing education, social connections, and community outreach.",
        "During my service, I helped build the foundations for the Tech Fellowship's curriculum program, including planning technology-oriented workshops for other members and running lunch-and-learns and fireside chats with local business leaders.",
      ],
    },
    tags: ["community"],
  },
  {
    borderColor: "#fbbf24",
    company: "Purdue University",
    companyHref: "https://purdue.edu",
    location: "West Lafayette, IN",
    positions: [
      { title: "B.S. Computer Science", years: "2012-2015" },
      { title: "Minor, Organizational Leadership", years: "" },
    ],
    prose: {
      resume: [
        "Served as Vice President and President of Purdue's ACM Special Interest Group for Application Development (SIGAPP).",
      ],
    },
    tags: ["edu"],
  },
  {
    borderColor: "#ef4444",
    company: "Yelp",
    companyHref: "https://yelp.com",
    location: "San Francisco, CA",
    positions: [{ title: "Software Engineering Intern", years: "2015" }],
    prose: {
      resume: [
        "Optimized log search times in a MySQL-sourced data pipeline for business analytics, and engineered a mapping/filtering system to flag and censor personally identifiable information within the pipeline.",
      ],
    },
    tags: ["professional"],
  },
  {
    borderColor: "#22d3ee",
    company: "Genesys",
    companyHref: "https://genesys.com",
    location: "Indianapolis, IN",
    positions: [{ title: "Software Engineering Intern", years: "2014" }],
    prose: {
      resume: [
        "Shipped an end-to-end system which scanned PDF documents, applied optical character recognition and barcode scanning, and indexed the results in Elasticsearch.",
      ],
    },
    tags: ["professional"],
  },
  {
    borderColor: "#1d4ed8",
    company: "Xtern",
    companyHref: "https://techpoint.org",
    location: "Indianapolis, IN",
    positions: [{ title: "Member", years: "2014" }],
    prose: {
      resume: [
        "Alongside my internship with Genesys, I participated in the first class of TechPoint's Xtern program.",
      ],
    },
    tags: ["community"],
  },
];

const ResumeExperienceList = () => {
  const [filter, setFilter] = useState("all");
  const [prose, setProse] = useState("resume");
  const visibilityTagged = ALL_ITEMS.map((item) => ({
    ...item,
    isVisibile: filter === "all" ? true : item.tags.includes(filter),
    prose: prose === "none" ? [] : prose === "resume" ? item.prose.resume : [],
  }));

  return (
    <div>
      <div className="flex flex-row items-center mb-2">
        <span className="text-sm text-zinc-300 mr-2">filter</span>
        <span
          className={clsx({
            "text-sm border-zinc-300 border border-1 px-2 rounded-xl cursor-pointer mr-2 transition-all":
              true,
            "text-zinc-300": filter !== "all",
            "text-zinc-800": filter === "all",
            "bg-zinc-300": filter === "all",
          })}
          onClick={() => setFilter("all")}
          onKeyUp={(e) => e.key === "Enter" && setFilter("all")}
        >
          all
        </span>
        <span
          className={clsx({
            "text-sm border-zinc-300 border border-1 px-2 rounded-xl cursor-pointer mr-2 transition-all":
              true,
            "text-zinc-300": filter !== "professional",
            "text-zinc-800": filter === "professional",
            "bg-zinc-300": filter === "professional",
          })}
          onClick={() => setFilter("professional")}
          onKeyUp={(e) => e.key === "Enter" && setFilter("professional")}
        >
          professional
        </span>
        <span
          className={clsx({
            "text-sm border-zinc-300 border border-1 px-2 rounded-xl cursor-pointer mr-2 transition-all":
              true,
            "text-zinc-300": filter !== "hustles",
            "text-zinc-800": filter === "hustles",
            "bg-zinc-300": filter === "hustles",
          })}
          onClick={() => setFilter("hustles")}
          onKeyUp={(e) => e.key === "Enter" && setFilter("hustles")}
        >
          hustles
        </span>
        <span
          className={clsx({
            "text-sm border-zinc-300 border border-1 px-2 rounded-xl cursor-pointer mr-2 transition-all":
              true,
            "text-zinc-300": filter !== "edu",
            "text-zinc-800": filter === "edu",
            "bg-zinc-300": filter === "edu",
          })}
          onClick={() => setFilter("edu")}
          onKeyUp={(e) => e.key === "Enter" && setFilter("edu")}
        >
          edu
        </span>
        <span
          className={clsx({
            "text-sm border-zinc-300 border border-1 px-2 rounded-xl cursor-pointer mr-2 transition-all":
              true,
            "text-zinc-300": filter !== "community",
            "text-zinc-800": filter === "community",
            "bg-zinc-300": filter === "community",
          })}
          onClick={() => setFilter("community")}
          onKeyUp={(e) => e.key === "Enter" && setFilter("community")}
        >
          community
        </span>
      </div>
      <div className="flex flex-row items-center">
        <span className="text-sm text-zinc-300 mr-2">prose</span>
        <span
          className={clsx({
            "text-sm border-zinc-300 border border-1 px-2 rounded-xl cursor-pointer mr-2 transition-all":
              true,
            "text-zinc-300": prose !== "none",
            "text-zinc-800": prose === "none",
            "bg-zinc-300": prose === "none",
          })}
          onClick={() => setProse("none")}
          onKeyUp={(e) => e.key === "Enter" && setProse("none")}
        >
          none
        </span>
        <span
          className={clsx({
            "text-sm border-zinc-300 border border-1 px-2 rounded-xl cursor-pointer mr-2 transition-all":
              true,
            "text-zinc-300": prose !== "resume",
            "text-zinc-800": prose === "resume",
            "bg-zinc-300": prose === "resume",
          })}
          onClick={() => setProse("resume")}
          onKeyUp={(e) => e.key === "Enter" && setProse("resume")}
        >
          resume
        </span>
      </div>
      <div className="mb-8" />
      <div>
        {visibilityTagged.map((item) => (
          <AnimatePresence>
            {item.isVisibile && (
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                initial={{ opacity: 0, x: -50 }}
                key={item.company}
              >
                <ResumeExperience {...item} proseRender={prose !== "none"} />
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

export default ResumeExperienceList;
