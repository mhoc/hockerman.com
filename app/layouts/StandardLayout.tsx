import { FaHouse } from "react-icons/fa6";
import { Link, useLocation } from "react-router";

export function StandardLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  const renderHome = location.pathname !== "/";

  return (
    <div className="container flex flex-col m-auto px-2 md:px-0 py-16">
      {renderHome && (
        <Link className="flex flex-row items-center gap-2 pb-8" to="/">
          <FaHouse className="text-cobalt-600" />
          <span className="font-serif text-cobalt-600">Home</span>
        </Link>
      )}
      {children}
    </div>
  )
}
