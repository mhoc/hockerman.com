import { Link } from "react-router";

export function Aa({
  children,
  href,
  target = "_blank",
}: {
  children: React.ReactNode;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
}) {
  return (
    <Link className="text-amber-100 underline decoration-dotted" target={target} to={href}>
      {children}
    </Link>
  );
}
