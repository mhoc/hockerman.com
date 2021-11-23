export interface JSONEntityRenderProps {
  index: number;
  total: number;
}

export abstract class JSONEntity {
  public abstract render(props: JSONEntityRenderProps): React.ReactNode;
}
