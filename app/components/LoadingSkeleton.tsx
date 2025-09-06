import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function LoadingSkeleton({ 
  children, 
  className,
  isLoading = true,
  loadingBody,
}: {
  children: React.ReactNode,
  className?: string;
  isLoading?: boolean;
  loadingBody?: React.ReactNode;
}) {
  const [present, setPresent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPresent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [isLoading])

  return (
    <div className={clsx("relative overflow-hidden")}>
      <div className={clsx("duration-300", className)}>
        {children}
      </div>
      <AnimatePresence>
        {!present && (
          <motion.div
            className={clsx("absolute inset-0 z-10 bg-cobalt-800 rounded flex flex-row items-center px-4", className)}
            initial={{
              opacity: 1,
              x: "0px",
            }}
            exit={{
              opacity: 1,
              transition: {
                duration: 0.75,
              },
              x: "320px",
            }}
          >
            {loadingBody}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
