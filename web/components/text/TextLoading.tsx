import times from "lodash/times";
import { useEffect, useState } from "react";

import { TextDeemph } from "./TextDeemph";
import { TextStd } from "./TextStd";

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
  // this is weird & hacky, but: in nearly every case this loading text is used to load-in some
  // <TextStd />. however, <TextDeemph /> is by design a smaller font size, which means when the
  // transition from deemph to std happens, the vertical position of the block which contains
  // the text jumps. So, this adds an invisible character at the std size to the end of the
  // loading state, which forces the containing block to take on the vertical size of textstd.
  return (
    <span>
      <TextDeemph>{loadingState.t}</TextDeemph>
      <TextStd>&zwj;</TextStd>
    </span>
  );
}
