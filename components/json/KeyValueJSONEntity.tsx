import React from "react";

import { Link } from "../common/Link";
import { Text } from "../common/Text";
import { JSONEntity, JSONEntityRenderProps } from "./JSONEntity";

export interface KeyValueJSONEntityProps {
  href?: string;
}

export class KeyValueJSONEntity extends JSONEntity {
  constructor(
    public readonly key: React.ReactNode,
    public readonly value: React.ReactNode,
    public readonly props?: KeyValueJSONEntityProps
  ) {
    super();
  }

  public render({ index, total }: JSONEntityRenderProps): React.ReactNode {
    const hrefIsExternal = this.props?.href?.startsWith("http");
    return (
      <>
        <br />
        &nbsp;&nbsp;
        <Text color="muted">{`"`}</Text>
        <Text>{this.key}</Text>
        <Text color="muted">{`": "`}</Text>
        {this.props?.href ? (
          <Link
            href={this.props.href}
            rel={hrefIsExternal ? "noopener" : undefined}
          >
            {this.value}
          </Link>
        ) : (
          <Text color="muted">{this.value}</Text>
        )}
        <Text color="muted">"</Text>
        {index < total - 1 && <Text color="muted">,</Text>}
      </>
    );
  }
}
