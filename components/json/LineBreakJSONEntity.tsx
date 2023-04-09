import { JSONEntity, JSONEntityRenderProps } from "./JSONEntity";

export interface LineBreakJSONEntityProps {}

export class LineBreakJSONEntity extends JSONEntity {
  constructor(public readonly props?: LineBreakJSONEntityProps) {
    super();
  }

  public render({ index, total }: JSONEntityRenderProps): React.ReactNode {
    return (
      <>
        <br />
      </>
    );
  }
}
