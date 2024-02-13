interface Props {
  label: string;
}

export default function ResumeTechBadge({ label }: Props) {
  return (
    <div>
      <span className="text-md text-slate-500">{label}</span>
    </div>
  );
}
