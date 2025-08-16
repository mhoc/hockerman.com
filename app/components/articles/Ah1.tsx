import { ASeparator } from "./ASeparator";

export function Ah1({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <div id={id}>
      <ASeparator />
      <span className="text-xl text-cobalt-accent-high font-bold font-serif">{children}</span>;
      <div className="w-full h-px bg-cobalt-600" />
    </div>
  );
}
