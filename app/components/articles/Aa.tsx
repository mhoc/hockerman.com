import Link from 'next/link'

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
    <Link className="text-rose-300 underline decoration-dotted" href={href} target={target}>
      {children}
    </Link>
  );
}
