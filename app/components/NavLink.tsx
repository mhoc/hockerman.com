import type { IconType } from "react-icons";

export function NavLink({ href, Icon, label, sublabel }: { href: string; Icon?: IconType; label: string; sublabel?: string; }) {
  return (
    <a className="flex flex-row items-center gap-2 transition-colors" href={href}>
      {Icon && <Icon className="text-cobalt-300" />}
      <span className="font-serif text-md text-cobalt-300 leading-tight">{label}</span>
      <span className="font-serif text-sm text-cobalt-500 leading-tight">{sublabel}</span>
    </a>
  )
}
