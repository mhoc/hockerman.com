export function truncate(st?: string, length?: number): string {
  if (!st) {
    return "";
  }
  let _length = length ?? 40;
  if (st.length <= _length) {
    return st;
  }
  return `${st.slice(0, _length)}...`;
}
