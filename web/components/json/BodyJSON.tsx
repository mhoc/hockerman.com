import React, { Fragment } from "react";
import { TextDeemph } from "../text";
import { JSONEntity } from "./JSONEntity";

interface Props {
  data: JSONEntity[],
}

export const BodyJSON = ({ data }: Props) => {
  return (
    <>
      <TextDeemph>{"{"}</TextDeemph>
      {data.map((entity, index) => (
        <Fragment key={`json-body-item-${index}`}>
          {entity.render({ index, total: data.length })}
        </Fragment>
      ))}
      <br />
      <TextDeemph>{"}"}</TextDeemph>
    </>
  );
}
