import React from "react";

import { Text } from "../common/Text";
import { JSONEntity, JSONEntityRenderProps } from "./JSONEntity";

export interface CommentJSONEntityProps {}

export class CommentJSONEntity extends JSONEntity {
  constructor(
    public readonly comment: React.ReactNode,
    public readonly props?: CommentJSONEntityProps
  ) {
    super();
  }

  public render({ index, total }: JSONEntityRenderProps): React.ReactNode {
    return (
      <>
        <br />
        &nbsp;&nbsp;
        <Text color="muted">{`// ${this.comment}`}</Text>
      </>
    );
  }
}
