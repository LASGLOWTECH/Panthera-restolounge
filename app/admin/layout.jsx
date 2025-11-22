// app/admin/layout.js
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPlus, FaListUl, FaEnvelope } from "react-icons/fa";

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const linkClass = (path) =>
    `flex items-center w-full py-2 px-3 rounded-md text-gray-700 hover:bg-gray-200 ${
      pathname === path ? "bg-gray-200 font-semibold" : ""
    }`;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-white w-64 py-8 px-4 shadow-md">
        <div className="text-lg font-semibold mb-6 text-gray-800">Admin Panel</div>
        <nav className="flex flex-col space-y-2">
          <Link href="/admin/events" className={linkClass("/admin/events")}>
            <FaPlus className="h-5 w-5 mr-2" /> Events
          </Link>
          <Link href="/admin/gallery" className={linkClass("/admin/gallery")}>
            <FaPlus className="h-5 w-5 mr-2" /> Gallery
          </Link>
          <Link href="/admin/reservations" className={linkClass("/admin/reservations")}>
            <FaListUl className="h-5 w-5 mr-2" /> Reservations
          </Link>
          {/* Add more links here */}
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
