"use client";

import clsx from "clsx";
import { useMemo, useState } from "react";

export function GradientSeparator({
  horizontal,
  vertical,
  animated = false,
}: {
  horizontal?: boolean;
  vertical?: boolean;
  animated?: boolean;
}) {
  const gradientClassNames = ["animate-pastel-colors", "animate-cobalt-colors"];
  const [gradientClassNameIndex, setGradientClassNameIndex] = useState(0);

  const handleClick = () => {
    setGradientClassNameIndex((prevIndex) => (prevIndex + 1) % gradientClassNames.length);
  };

  return (
    <div
      className={clsx({
        "h-full w-[1px]": vertical,
        "h-px w-full": horizontal,
        "cursor-pointer": animated,
        "transition-all duration-300": animated,
      }, gradientClassNames[gradientClassNameIndex])}
      onClick={handleClick}
    />
  );
}
