import Link from "next/link";

export function Aa({
  children,
  href,
  target = "_blank",
}: {
  children: React.ReactNode;
  href: string;
  target?: string;
}) {
  return (
    <Link className="text-cobalt-accent-med underline decoration-dotted" href={href} target={target}>
      {children}
    </Link>
  );
}
