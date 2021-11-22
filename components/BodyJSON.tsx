import React, { Fragment } from "react";

import { TextDeemph, TextLink, TextStd } from "./text";

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
              {dataItem.href ? (
                <TextLink href={dataItem.href} rel={dataItem.isExternal ? "noopener" : undefined}>
                  {dataItem.value}
                </TextLink>
              ) : <TextDeemph>{dataItem.value}</TextDeemph>}
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
        } else if (dataItem.kind === "array.single-line") {
          return (
            <Fragment key={`body-json-${i}`}>
              <br />
              &nbsp;&nbsp;
              <TextDeemph>{`"`}</TextDeemph>
              <TextStd>{dataItem.key}</TextStd>
              <TextDeemph>{`": [ `}</TextDeemph>
              <div className="smallDisplay">
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <Fragment>
              {dataItem.items.map((item, i) => (
                <Fragment key={`body-json-${i}-arsl-${i}`}>
                  <TextDeemph>{`"`}</TextDeemph>
                  <TextLink href={item.href} rel={dataItem.isExternal ? "noopener" : undefined}>
                    {item.value}
                  </TextLink>
                  <TextDeemph>{`"`}</TextDeemph>
                  {i !== dataItem.items.length - 1 && <TextDeemph>{`, `}</TextDeemph>}
                </Fragment>
              ))}
              </Fragment>
              <div className="smallDisplay">
                <br />
                &nbsp;&nbsp;
              </div>
              <div className="largeDisplay">
                <span> </span>
              </div>
              <TextDeemph>{`]`}</TextDeemph>
              {i < data.length - 1 && <TextDeemph>,</TextDeemph>}
            </Fragment>
          );
        }
      })}
      <br />
      <TextDeemph>{"}"}</TextDeemph>
      <style jsx>{`
        .largeDisplay {
          display: inline;
        }
        .smallDisplay {
          display: none;
        }
        @media only screen and (max-width: 600px) {
          .smallDisplay {
            display: inline;
          }
          .largeDisplay {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default BodyJSON;
