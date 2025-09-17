export function ResumeItem({ 
  accentColor,
  company,
  description,
  href,
  titles
}: {
  accentColor: string;
  company: string;
  description?: string;
  href: string;
  titles?: { title: string, tenure: [string, string] | string }[]
}) {
  return (
    <div className="flex flex-row gap-4">
      <div className="rounded-md w-[4px]" style={{ backgroundColor: accentColor }} />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-2">
            <span className="text-md font-serif font-semibold text-cobalt-200 leading-tight">
              <a href={href} target="_blank">
                {company}
              </a>
            </span>
          </div>
          <div className="flex flex-col">
            {titles?.map((title) => (
              <div className="flex flex-row items-center gap-2" key={title.title}>
                <span className="text-sm font-serif text-cobalt-300 leading-tight">{title.title}</span>
                <span className="text-xs font-serif text-cobalt-400 leading-tight">
                  {Array.isArray(title.tenure) ? `(${title.tenure[0]}-${title.tenure[1]})` : `(${title.tenure})`}
                </span>
              </div>
            ))}
          </div>
        </div>
        {description && (
            <span className="text-xs font-serif text-cobalt-400 italic leading-tight">
              {description}
            </span>
        )}
      </div>
    </div>
  )
}
