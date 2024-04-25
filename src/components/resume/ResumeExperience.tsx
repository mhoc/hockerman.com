import ResumeTechBadge from "./ResumeTechBadge";

interface Props {
  borderColor: string;
  company: string;
  companyHref?: string;
  location: string;
  positions: Array<{
    title: string;
    years: string;
  }>;
  resume?: Array<string>;
  tech: Array<string>;
}

const ResumeExperience = ({
  borderColor,
  company,
  companyHref,
  location,
  positions,
  resume,
  tech,
}: Props) => {
  return (
    <div
      className="px-4 py-4 transition xcontainerx"
      style={{
        borderColor: borderColor,
        borderLeftWidth: "1px",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
        <div className="flex flex-col pr-8">
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
          <div className="mb-2">
            {positions.map((position) => (
              <div
                className="flex flex-row items-baseline"
                key={position.title}
              >
                <span className="text-sm lg:text-md text-zinc-300 mr-3 leading-5">
                  {position.title}
                </span>
                {position.years && (
                  <span className="text-xs lg:text-sm text-zinc-500 leading-5">
                    {position.years}
                  </span>
                )}
              </div>
            ))}
          </div>
          {tech && (
            <div className="flex flex-row gap-2 max-w-lg flex-wrap mb-2">
              {tech?.map((content) => (
                <div key={content}>
                  <ResumeTechBadge tech={content} />
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="flex flex-col max-w-xl">
            {resume?.map((content) => (
              <div className="flex flex-row" key={content}>
                <span className="text-sm text-zinc-400 mr-2">•</span>
                <span className="text-sm text-zinc-300">{content}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeExperience;
