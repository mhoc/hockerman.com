import Link from "next/link";
import { FaFile, FaGithub, FaLinkedin } from "react-icons/fa6";

export function NavBio() {
  return (
    <div className="flex flex-col gap-2">
      <Link
        className="flex flex-row gap-2 items-center"
        href="/resume-v9-mike-hockerman.pdf"
        target="_blank"
      >
        <FaFile className="text-cobalt-200" />
        <span className="text-cobalt-200 text-sm">Resume</span>
      </Link>
      <Link
        className="flex flex-row gap-2 items-center"
        href="https://github.com/mhoc"
        target="_blank"
      >
        <FaGithub className="text-cobalt-200" />
        <span className="text-cobalt-200 text-sm">/mhoc</span>
      </Link>
      <Link
        className="flex flex-row gap-2 items-center"
        href="https://linkedin.com/in/mhoc"
        target="_blank"
      >
        <FaLinkedin className="text-cobalt-200" />
        <span className="text-cobalt-200 text-sm">/mhoc</span>
      </Link>
    </div>
  )
}
