import type { IconType } from "react-icons";
import { Link } from "react-router";

export function NavLink({
  href,
  Icon,
  label,
  sublabel,
  target,
}: {
  href: string;
  Icon?: IconType;
  label: string;
  sublabel?: string;
  target?: React.HTMLAttributeAnchorTarget;
}) {
  return (
    <Link className="flex flex-row items-center gap-2 transition-colors" target={target} to={href}>
      {Icon && <Icon className="text-cobalt-300" />}
      <span className="font-serif text-md text-cobalt-300 leading-tight">{label}</span>
      <span className="font-serif text-sm text-cobalt-500 leading-tight">{sublabel}</span>
    </Link>
  )
}
