export function ArticleLayout({
  children,
  date,
  title,
  toc,
}: {
  children: React.ReactNode;
  date: string;
  title: string;
  toc: { href: string; label: string }[];
}) {
  return (
    <div className="flex flex-row h-full pl-16 pr-4 gap-8">
      <div
        className="flex flex-col gap-8 min-h-0 overflow-y-auto py-16 pr-16"
        style={{ scrollbarColor: "black", scrollbarWidth: "thin" }}
      >
        <div className="flex flex-col flex-shrink-0">
          <span className="text-xl text-slate-300 font-semibold font-serif">{title}</span>
          <span className="text-md text-slate-500 font-serif">{date}</span>
        </div>
        <div className="flex flex-col gap-2 max-w-3xl">{children}</div>
      </div>
      {/* <div className="flex flex-col grow gap-2 py-16">
        {toc.map((tocItem) => (
          <span className="text-sm text-slate-500 text-end" key={tocItem.href}>
            {tocItem.label}
          </span>
        ))}
      </div> */}
    </div>
  );
}
