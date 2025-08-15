"use client";

import clsx from "clsx";
import { useState } from "react";

export function GradientSeparator({
  horizontal,
  vertical,
  animated = false,
}: {
  horizontal?: boolean;
  vertical?: boolean;
  animated?: boolean;
}) {
  const [isAnimated, setIsAnimated] = useState(animated);

  const handleClick = () => {
    if (animated) {
      setIsAnimated(!isAnimated);
    }
  };

  return (
    <div
      className={clsx({
        "h-full w-[1px]": vertical,
        "h-px w-full": horizontal,
        "bg-slate-700": !isAnimated,
        "animate-pastel-colors": isAnimated,
        "cursor-pointer": animated,
        "transition-all duration-300": animated,
      })}
      onClick={handleClick}
    />
  );
}
