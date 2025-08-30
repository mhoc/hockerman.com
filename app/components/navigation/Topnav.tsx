"use client";

import { CircleChevronLeft } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Topnav() {
  const pathname = usePathname();
  let parent = pathname.substring(0, pathname.lastIndexOf("/"));
  if (parent === "") {
    parent = "/";
  }
  return (
    <div className="flex md:hidden flex-row items-center gap-2 p-4">
      {pathname !== "/" && (
        <Link href={parent} className="flex">  
          <CircleChevronLeft className="text-cobalt-600 w-5 h-5 cursor-pointer hover:text-cobalt-200 transition-colors" />
        </Link>
      )}
      <div className="flex flex-col gap-0">
        <span className="text-md text-cobalt-600 leading-tight">Mike Hockerman</span>
      </div>
    </div>
  );
}
