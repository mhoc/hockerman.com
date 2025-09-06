import clsx from "clsx";

export function GradientSample({ className, label }: { className: string, label: string }) {
  return (
    <div className={clsx("flex flex-col justify-center h-16 px-2", className)}>
      <span className="font-serif text-md text-black">{label}</span>
    </div>
  );
}
