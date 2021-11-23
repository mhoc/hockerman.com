import times from "lodash/times";
import { useEffect, useState } from "react";

import { TextDeemph } from "./TextDeemph";

interface TextLoadingProps {}

export const TextLoading = (props: TextLoadingProps) => {
  const [ loadingState, setLoadingState ] = useState({ p: 1, t: "#---------"});
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingState(state => {
        if (state.p === 10) {
          return { p: 8, t: `########--` };
        } else {
          return {
            p: state.p + 1,
            t: `${times(state.p, () => `#`).join('')}${times(10-state.p, () => `-`).join('')}`,
          }
        }
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return <TextDeemph>{loadingState.t}</TextDeemph>
}
