import React from "react";

import { TextDeemph, TextLink, TextStd } from "../text";
import { JSONEntity, JSONEntityRenderProps } from "./JSONEntity";

export interface KeyValueJSONEntityProps {
  href?: string;
}

export class KeyValueJSONEntity extends JSONEntity {

  constructor(
    public readonly key: React.ReactNode,
    public readonly value: string, 
    public readonly props?: KeyValueJSONEntityProps,
  ) { super(); }

  public render({ index, total }: JSONEntityRenderProps): React.ReactNode {
    const hrefIsExternal = this.props?.href?.startsWith("http");
    return (
      <>
        <br />
        &nbsp;&nbsp;
        <TextDeemph>{`"`}</TextDeemph>
        <TextStd>{this.key}</TextStd>
        <TextDeemph>{`": "`}</TextDeemph>
        {this.props?.href ? (
          <TextLink href={this.props.href} rel={hrefIsExternal ? "noopener" : undefined}>
            {this.value}
          </TextLink>
        ) : (
          <TextDeemph>{this.value}</TextDeemph>
        )})
        <TextDeemph>"</TextDeemph>
        {index < total - 1 && <TextDeemph>,</TextDeemph>}
      </>
    );
  }

}
