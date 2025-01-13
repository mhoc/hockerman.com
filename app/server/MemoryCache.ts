export class MemoryCache<D> {
  private _at: Date | undefined;
  private _value: D | undefined;

  constructor(private expiresInSeconds: number) {}

  public cached(): boolean {
    if (!this._at || !this._value) {
      return false;
    }
    if (
      this._at.getTime() / 1000 + this.expiresInSeconds <
      new Date().getTime() / 1000
    ) {
      this._at = undefined;
      this._value = undefined;
      return false;
    }
    return true;
  }

  public get(): D | undefined {
    if (this.cached()) {
      return this._value;
    }
    return undefined;
  }

  public set(value: D): void {
    this._at = new Date();
    this._value = value;
  }
}
