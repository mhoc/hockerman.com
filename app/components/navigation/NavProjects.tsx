import { SidenavCategory } from "./SidenavCategory";
import { SidenavItem } from "./SidenavItem";

export function NavProjects() {
  return (
    <SidenavCategory name="Projects"> 
      <SidenavItem href="/cobalt" label="Cobalt" />
    </SidenavCategory>
  )
}
