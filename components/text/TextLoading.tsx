import times from "lodash/times";
import { useEffect, useState } from "react";

import { Text } from "../common/Text";

interface TextLoadingProps {}

export const TextLoading = (props: TextLoadingProps) => {
  const [loadingState, setLoadingState] = useState({ p: 1, t: "#---------" });
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingState((state) => {
        if (state.p === 10) {
          return { p: 8, t: `########--` };
        } else {
          return {
            p: state.p + 1,
            t: `${times(state.p, () => `#`).join("")}${times(
              10 - state.p,
              () => `-`
            ).join("")}`,
          };
        }
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <span>
      <Text color="muted">{loadingState.t}</Text>
      <Text>&zwj;</Text>
    </span>
  );
};
