import React, { Fragment } from "react";

import { Link } from "../common/Link";
import { Text } from "../common/Text";
import { JSONEntity, JSONEntityRenderProps } from "./JSONEntity";

export interface SingleLineArrayJSONEntityProps {}

export interface SingleLineArrayJSONEntityItem {
  href?: string;
  value: string;
}

export class SingleLineArrayJSONEntity extends JSONEntity {
  constructor(
    public readonly key: React.ReactNode,
    public readonly items: SingleLineArrayJSONEntityItem[],
    public readonly props?: SingleLineArrayJSONEntityProps
  ) {
    super();
  }

  public render({ index, total }: JSONEntityRenderProps): React.ReactNode {
    return (
      <>
        <br />
        &nbsp;&nbsp;
        <Text color="muted">{`"`}</Text>
        <Text>{this.key}</Text>
        <Text color="muted">{`": [ `}</Text>
        <div className="smallDisplay">
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <>
          {this.items.map((item, itemi) => (
            <Fragment key={`body-json-${index}-arsl-${itemi}`}>
              <Text color="muted">{`"`}</Text>
              {item.href ? (
                <Link
                  href={item.href}
                  rel={item.href.startsWith("http") ? "noopener" : undefined}
                >
                  {item.value}
                </Link>
              ) : (
                <Text>{item.value}</Text>
              )}
              <Text color="muted">{`"`}</Text>
              {itemi !== this.items.length - 1 && (
                <Text color="muted">{`, `}</Text>
              )}
            </Fragment>
          ))}
        </>
        <div className="smallDisplay">
          <br />
          &nbsp;&nbsp;
        </div>
        <div className="largeDisplay">
          <span> </span>
        </div>
        <Text color="muted">{`]`}</Text>
        {index < total - 1 && <Text color="muted">,</Text>}
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
}
