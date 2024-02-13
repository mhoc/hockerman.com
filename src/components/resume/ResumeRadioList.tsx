import clsx from "clsx";

interface Props {
  label: string;
  items: Array<string>;
  onSelect: (label: string) => void;
  selected: string;
}

export default function ResumeRadioList({
  label,
  items,
  onSelect,
  selected,
}: Props) {
  return (
    <div className="flex flex-row flex-wrap items-center gap-2 mb-2">
      <span className="text-sm text-zinc-300">{label}</span>
      {items.map((item) => (
        <span
          className={clsx({
            "text-sm border-zinc-300 border border-1 px-2 rounded-xl cursor-pointer transition-all":
              true,
            "text-zinc-300": selected !== item,
            "text-zinc-800": selected === item,
            "bg-zinc-300": selected === item,
          })}
          key={item}
          onClick={() => onSelect(item)}
          onKeyUp={(e) => e.key === "Enter" && onSelect(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
