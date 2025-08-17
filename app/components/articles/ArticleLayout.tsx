import Link from "next/link";

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
    <div className="flex flex-row h-full pl-4 md:pl-16 md:pr-4 gap-8">
      <div
        className="flex flex-col gap-8 min-h-0 overflow-y-auto py-16 pr-4 md:pr-16"
        style={{ scrollbarColor: "black", scrollbarWidth: "auto" }}
      >
        <div className="flex flex-col flex-shrink-0">
          <span className="text-2xl text-cobalt-300 font-semibold font-serif">{title}</span>
          <span className="text-md text-cobalt-500 font-serif">{date}</span>
        </div>
        <div className="flex flex-col gap-2 max-w-2xl">{children}</div>
      </div>
      <div className="hidden md:flex flex-col grow gap-2 pt-32 pb-16">
        {toc.map((tocItem) => (
          <Link className="text-md text-cobalt-500 font-serif" key={tocItem.href} href={tocItem.href}>
            {tocItem.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
