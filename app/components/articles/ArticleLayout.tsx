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
    <div className="flex flex-row pl-16 pr-4 py-16 gap-8">
      <div className="flex flex-col gap-32">
        <div className="flex flex-col">
          <span className="text-xl text-slate-300 font-semibold font-serif">{title}</span>
          <span className="text-md text-slate-500 font-serif">{date}</span>
        </div>
        <div className="flex flex-col gap-2 max-w-2xl overflow-y-scroll">{children}</div>
      </div>
      <div className="flex flex-col grow gap-2">
        {toc.map((tocItem) => (
          <span className="text-sm text-slate-500 text-end" key={tocItem.href}>
            {tocItem.label}
          </span>
        ))}
      </div>
    </div>
  );
}
