export function truncate(st: string, length: number): string {
  if (st.length <= length) {
    return st;
  }
  return `${st.slice(0, length)}...`;
}
