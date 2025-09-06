export function NavSection({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="flex flex-col gap-0">
      {title && <span className="font-serif font-semibold text-md text-rose-200 leading-tight select-none">{title}</span>}
      {children}
    </div>
  )
}
