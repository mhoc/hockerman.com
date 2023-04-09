import React, { Fragment } from "react";
import { TextDeemph, TextLink, TextStd } from "../text";
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
    public readonly props?: SingleLineArrayJSONEntityProps,
  ) { super(); }

  public render({ index, total }: JSONEntityRenderProps): React.ReactNode {
    return (
      <>
        <br />
        &nbsp;&nbsp;
        <TextDeemph>{`"`}</TextDeemph>
        <TextStd>{this.key}</TextStd>
        <TextDeemph>{`": [ `}</TextDeemph>
        <div className="smallDisplay">
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <>
          {this.items.map((item, itemi) => (
            <Fragment key={`body-json-${index}-arsl-${itemi}`}>
              <TextDeemph>{`"`}</TextDeemph>
              {item.href ? (
                <TextLink href={item.href} rel={item.href.startsWith("http") ? "noopener" : undefined}>
                  {item.value}
                </TextLink>
              ) : (
                <TextStd>{item.value}</TextStd>
              )}
              <TextDeemph>{`"`}</TextDeemph>
              {itemi !== this.items.length - 1 && <TextDeemph>{`, `}</TextDeemph>}
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
        <TextDeemph>{`]`}</TextDeemph>
        {index < total - 1 && <TextDeemph>,</TextDeemph>}
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
