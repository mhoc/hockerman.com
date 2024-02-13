import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { ALL_EXPERIENCE } from "./experience";
import ResumeExperience from "./ResumeExperience";
import ResumeRadioList from "./ResumeRadioList";

const ResumeExperienceList = () => {
  const [filter, setFilter] = useState("all");
  const [meta, setMeta] = useState("resume");

  const processed = ALL_EXPERIENCE.map((item) => ({
    ...item,
    resume: meta === "resume" ? item.resume : undefined,
    tech: meta === "tech" ? item.tech : undefined,
    visible: filter === "all" ? true : item.tags.includes(filter),
  }));

  return (
    <div>
      <ResumeRadioList
        label="filter"
        items={["all", "professional", "projects", "edu", "community"]}
        onSelect={setFilter}
        selected={filter}
      />
      <ResumeRadioList
        label="meta"
        items={["none", "resume", "tech"]}
        onSelect={setMeta}
        selected={meta}
      />
      <div className="mb-8" />
      <div>
        {processed.map((item) => (
          <AnimatePresence key={item.company}>
            {item.visible && (
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                initial={{ opacity: 0, x: -10 }}
                key={item.company}
              >
                <ResumeExperience {...item} />
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

export default ResumeExperienceList;
