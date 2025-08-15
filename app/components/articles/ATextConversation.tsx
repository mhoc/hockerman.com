import { ASeparator } from "./ASeparator";

export function ATextConversation({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ASeparator />
      <div className="flex flex-col gap-2 w-full">{children}</div>
      <ASeparator />
    </div>
  );
}
