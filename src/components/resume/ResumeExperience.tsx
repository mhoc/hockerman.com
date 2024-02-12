interface Props {
  borderColor: string;
  bullets: Array<string>;
  company: string;
  companyHref?: string;
  location: string;
  positions: Array<{
    title: string;
    years: string;
  }>;
}

const ResumeExperience = ({
  borderColor,
  bullets,
  company,
  companyHref,
  location,
  positions,
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
              <a href={companyHref} target="_blank">
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
            <div className="flex flex-row items-baseline">
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
        <div className="flex flex-col max-w-xl">
          {bullets.map((bullet) => (
            <div className="flex flex-row">
              <span className="text-sm text-zinc-400 mr-2">•</span>
              <span className="text-sm text-zinc-400">{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeExperience;
