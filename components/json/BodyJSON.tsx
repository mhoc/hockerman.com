import { Fragment } from "react";

import { Text } from "../common/Text";
import { JSONEntity } from "./JSONEntity";

interface Props {
  data: JSONEntity[];
}

export const BodyJSON = ({ data }: Props) => {
  return (
    <>
      <Text color="muted">{"{"}</Text>
      {data.map((entity, index) => (
        <Fragment key={`json-body-item-${index}`}>
          {entity.render({ index, total: data.length })}
        </Fragment>
      ))}
      <br />
      <Text color="muted">{"}"}</Text>
    </>
  );
};
