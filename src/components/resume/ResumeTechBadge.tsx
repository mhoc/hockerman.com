import { DiGoogleCloudPlatform } from "react-icons/di";
import {
  FaEtsy,
  FaSearchengin,
  FaGolang,
  FaNodeJs,
  FaPencil,
  FaPrint,
  FaReact,
} from "react-icons/fa6";
import {
  SiAndroid,
  SiApple,
  SiAstro,
  SiAmazonaws,
  SiAmazonecs,
  SiBlueprint,
  SiCplusplus,
  SiFirebase,
  SiOpenjdk,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiTemporal,
  SiTypescript,
} from "react-icons/si";

interface Props {
  tech: string;
}

export default function ResumeTechBadge({ tech }: Props) {
  const Icon = (() => {
    switch (tech) {
      case "3D Printing":
        return FaPrint;
      case "Android":
        return SiAndroid;
      case "Astro":
        return SiAstro;
      case "AWS":
        return SiAmazonaws;
      case "C++":
        return SiCplusplus;
      case "ECS":
        return SiAmazonecs;
      case "Etsy":
        return FaEtsy;
      case "Firebase":
        return SiFirebase;
      case "Fusion 360":
        return SiBlueprint;
      case "Go":
        return FaGolang;
      case "Google Cloud":
        return DiGoogleCloudPlatform;
      case "iOS":
        return SiApple;
      case "Java":
        return SiOpenjdk;
      case "JavaScript":
        return SiJavascript;
      case "Kubernetes":
        return SiKubernetes;
      case "MongoDB":
        return SiMongodb;
      case "Next.js":
        return SiNextdotjs;
      case "Node.js":
        return FaNodeJs;
      case "PHP":
        return SiPhp;
      case "Postgres":
        return SiPostgresql;
      case "Python":
        return SiPython;
      case "React":
        return FaReact;
      case "SEO":
        return FaSearchengin;
      case "Shapr3D":
        return FaPencil;
      case "Temporal":
        return SiTemporal;
      case "TypeScript":
        return SiTypescript;
    }
  })();

  return (
    <div className="border border-zinc-700 rounded-3xl px-2 py-1 flex flex-row gap-2 items-center">
      {Icon && <Icon style={{ color: "#a1a1aa" }} />}
      <span className="text-sm text-zinc-400">{tech}</span>
    </div>
  );
}
