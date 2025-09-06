export function StandardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex flex-col m-auto py-16">
      {children}
    </div>
  )
}
