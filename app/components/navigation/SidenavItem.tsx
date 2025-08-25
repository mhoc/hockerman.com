import Link from "next/link";

export function SidenavItem({
  href,
  label,
  sublabel,
}: {
  href: string;
  label: string;
  sublabel?: string;
}) {
  return (
    <Link className="flex flex-row gap-2 items-center" href={href}>
      <span className="text-sm text-cobalt-200">{label}</span>
      {sublabel && <span className="text-xs text-cobalt-400">{sublabel}</span>}
    </Link>
  )
}
