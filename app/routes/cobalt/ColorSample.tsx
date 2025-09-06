export function ColorSample({
  analogueTextColor,
  analogueBgClassName,
  bgClassName,
  textClassName
}: {
  analogueTextColor: string,
  analogueBgClassName: string,
  bgClassName: string;
  textClassName: string
}) {
  return (
    <div className="flex flex-row gap-4 items-center">
      <span className={`font-serif text-md ${textClassName} min-w-24`}>
        {textClassName.replace('text-', '')}
      </span>
      <div className={`${bgClassName} w-32 h-8 rounded-lg`} />
      <div className={`${analogueBgClassName} flex flex-col items-center justify-center w-24 h-8 rounded-lg`}>
        <span className={`font-serif text-sm ${analogueTextColor} text-end`}>
          {analogueBgClassName.replace('bg-', '')}
        </span>
      </div>
    </div>
  )
}
