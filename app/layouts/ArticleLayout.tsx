import { Link } from "react-router";
import { StandardLayout } from "./StandardLayout";

export function ArticleLayout({
  children,
  date,
  title,
  toc,
}: {
  children: React.ReactNode;
  date: string;
  title: string;
  toc?: { href: string; label: string }[];
}) {
  return (
    <StandardLayout>
      <div className="flex flex-row gap-2 md:gap-16 lg:gap-32">
        <div
          className="flex flex-col gap-8"
          style={{ scrollbarColor: "black", scrollbarWidth: "auto" }}
        >
          <div className="flex flex-col flex-shrink-0">
            <span className="text-2xl text-cobalt-300 font-semibold font-serif">{title}</span>
            <span className="text-md text-cobalt-500 font-serif">{date}</span>
          </div>
          <div className="flex flex-col gap-2 max-w-2xl">
            {children}
          </div>
        </div>
        {toc && (
          <div className="hidden md:flex flex-col gap-2">
            {toc.map((tocItem) => (
              <Link className="text-md text-cobalt-500 font-serif" key={tocItem.href} to={tocItem.href}>
                {tocItem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </StandardLayout>
  );
}
