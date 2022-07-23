import { times, padStart } from "lodash";

import { TextDeemph, TextStd } from "../text";

interface DataItem {
  label: string;
  value: number;
}

interface Props {
  data: DataItem[];
}

export const VerticalBarGraph = ({ data }: Props) => {
  const maxLabelLength = data.reduce((prev, cur) => {
    if (cur.label.length > prev) return cur.label.length;
    else return prev;
  }, 0);
  const maxValue = data.reduce((prev, cur) => {
    if (cur.value > prev) return cur.value;
    else return prev;
  }, 0);
  return (
    <>
      <div className="container">
        {data.map(({ label, value }) => (
          <span>
            {/* DO NOT CHANGE THE PADDING CHARACTER HERE */}
            {/* I have no idea what it is. */}
            {/* Normal spaces won't work here, because they come out variable length w.r.t the monospace font in TextStd */}
            {/* This thing: doesn't. Whatever it is. One of the many invisible unicode characters. */}
            <TextStd>{padStart(label, maxLabelLength, " ")} [</TextStd>&nbsp;
            <TextDeemph>{times(Math.ceil((value / maxValue) * 20), () => "#")}{times((20-((value) / maxValue) * 20), () => " ")}</TextDeemph>
            &nbsp;
            <TextStd>]</TextStd>&nbsp;
            <TextStd>{value}</TextStd>
          </span>
        ))}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  )
}
