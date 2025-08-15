import { Sidenav } from "./components/Sidenav";
import { GradientSeparator } from "./components/GradientSeparator/GradientSeparator";

export default function Home() {
  return (
    <div className="flex flex-row">
      <Sidenav />
      <div className="h-screen">
        <GradientSeparator vertical animated />
      </div>
      <div className="flex flex-col grow bg-[#101019]"></div>
    </div>
  );
}
