export function ResumeCategory({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div>
      <span className="text-xl font-serif text-cobalt-300">{title}</span>
      <div className="flex flex-col gap-2">
        {children}
      </div>
    </div>
  )
}
