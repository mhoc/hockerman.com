import React, { Fragment } from "react";

import TextDeemph from "./text/TextDeemph";
import TextLink from "./text/TextLink";
import TextStd from "./text/TextStd";

interface Props {
  data: Array<any>,
}

const BodyJSON = ({ data }: Props) => {
  return (
    <>
      <TextDeemph>{"{"}</TextDeemph>
      {data.map((dataItem, i) => {
        if (dataItem.kind === "item") {
          return (
            <Fragment key={`body-json-${i}`}>
              <br />
              &nbsp;&nbsp;
              <TextDeemph>{`"`}</TextDeemph>
              <TextStd>{dataItem.key}</TextStd>
              <TextDeemph>{`": "`}</TextDeemph>
              <TextLink href={dataItem.href} rel={dataItem.isExternal ? "noopener" : undefined}>
                {dataItem.value}
              </TextLink>
              <TextDeemph>"</TextDeemph>
              {i < data.length - 1 && <TextDeemph>,</TextDeemph>}
            </Fragment>
          );
        } else if (dataItem.kind === "comment") {
          return (
            <Fragment key={`body-json-${i}`}>
              <br />
              &nbsp;&nbsp;
              <TextDeemph>{`// ${dataItem.comment}`}</TextDeemph>
            </Fragment>
          );
        } else if (dataItem.kind === "br") {
          return <Fragment key={`body-json-${i}`}><br /></Fragment>
        }
      })}
      <br />
      <TextDeemph>{"}"}</TextDeemph>
    </>
  );
}

export default BodyJSON;
