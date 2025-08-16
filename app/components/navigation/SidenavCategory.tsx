export function SidenavCategory({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-2 items-center">
        <span className="text-sm text-cobalt-500">{name}</span>
      </div>
      {children}
    </div>
  )
}
