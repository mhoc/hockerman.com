import React, { Fragment } from "react";

import TextDeemph from "./text/TextDeemph";
import TextLink from "./text/TextLink";
import TextStd from "./text/TextStd";

/**
 * dataset takes the form of an array of objects, where each item looks like:
 *   {
 *     "key": "email",
 *     "value": "mike@hockerman.com",
 *     "href": "mailto:mike@hockerman.com",
 *     "isExternal": true
 *   }
 */
const BodyJSON = ({ dataset }) => {
  return (
    <>
      <TextDeemph>{"{"}</TextDeemph>
      {dataset.map((data, i) => (
        <Fragment key={`body-json-${i}`}>
          <br />
          &nbsp;&nbsp;
          <TextDeemph>{`"`}</TextDeemph>
          <TextStd>{data.key}</TextStd>
          <TextDeemph>{`": "`}</TextDeemph>
          <TextLink href={data.href} rel={data.isExternal ? "noopener" : undefined}>
            {data.value}
          </TextLink>
          <TextDeemph>"</TextDeemph>
          {i < dataset.length - 1 && <TextDeemph>,</TextDeemph>}
        </Fragment>
      ))}
      <br />
      <TextDeemph>{"}"}</TextDeemph>
    </>
  );
}

export default BodyJSON;
