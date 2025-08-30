import { SidenavCategory } from "./SidenavCategory";
import { SidenavItem } from "./SidenavItem";

export function NavArticles() {
  return (
    <SidenavCategory name="AI">
      <SidenavItem href="/articles/gpt-5-and-chess" label="GPT-5 and Chess" sublabel="2025-08" />
      <SidenavItem href="/articles/novel-two-sum-in-gpt5" label="Novel Two-Sum in GPT-5" sublabel="2025-08" />
    </SidenavCategory>
  )
}
