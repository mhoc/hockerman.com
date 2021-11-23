import React from "react";

import { TextDeemph } from "../text";
import { JSONEntity, JSONEntityRenderProps } from "./JSONEntity";

export interface CommentJSONEntityProps {}

export class CommentJSONEntity extends JSONEntity {

  constructor(
    public readonly comment: React.ReactNode,
    public readonly props?: CommentJSONEntityProps,
  ) { super(); }

  public render({ index, total }: JSONEntityRenderProps): React.ReactNode {
    return (
      <>
        <br />
        &nbsp;&nbsp;
        <TextDeemph>{`// ${this.comment}`}</TextDeemph>
      </>
    );
  }

}
