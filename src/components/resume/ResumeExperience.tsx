import { AnimatePresence, motion } from "framer-motion";

interface Props {
  borderColor: string;
  company: string;
  companyHref?: string;
  location: string;
  positions: Array<{
    title: string;
    years: string;
  }>;
  prose: Array<string>;
  proseRender: boolean;
}

const ResumeExperience = ({
  borderColor,
  company,
  companyHref,
  location,
  positions,
  prose,
  proseRender,
}: Props) => {
  return (
    <div
      className="px-4 py-2 transition"
      style={{
        borderColor: borderColor,
        borderLeftWidth: "2px",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col">
          <div className="flex flex-row items-baseline">
            {companyHref ? (
              <a href={companyHref} rel="noreferrer" target="_blank">
                <span className="text-lg lg:text-xl text-zinc-100 mr-3 leading-5">
                  {company}
                </span>
              </a>
            ) : (
              <span className="text-lg lg:text-xl text-zinc-100 mr-3 leading-5">
                {company}
              </span>
            )}
            <span className="text-sm lg:text-md text-zinc-500 leading-5">
              {location}
            </span>
          </div>
          {positions.map((position) => (
            <div className="flex flex-row items-baseline" key={position.title}>
              <span className="text-sm lg:text-md text-zinc-400 mr-3 leading-5">
                {position.title}
              </span>
              {position.years && (
                <span className="text-xs lg:text-sm text-zinc-500 leading-5">
                  ({position.years})
                </span>
              )}
            </div>
          ))}
        </div>
        <AnimatePresence>
          {proseRender && (
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              initial={{ opacity: 0, x: 50 }}
              key={`${company}-prose`}
              className="flex flex-row"
            >
              <div className="flex flex-col max-w-xl">
                {prose.map((content) => (
                  <div className="flex flex-row" key={content}>
                    <span className="text-sm text-zinc-400 mr-2">•</span>
                    <span className="text-sm text-zinc-400">{content}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ResumeExperience;
