"use client";

import clsx from "clsx";
import { useState } from "react";

export function GradientSeparator() {
  const gradientClassNames = ["animate-pastel-colors", "animate-cobalt-racer", "animate-cobalt-colors"];
  const [gradientClassNameIndex, setGradientClassNameIndex] = useState(0);

  const handleClick = () => {
    setGradientClassNameIndex((prevIndex) => (prevIndex + 1) % gradientClassNames.length);
  };

  return (
    <div
      className={clsx("min-h-full w-px cursor-pointer transition-all", gradientClassNames[gradientClassNameIndex])}
      onClick={handleClick}
    />
  );
}
