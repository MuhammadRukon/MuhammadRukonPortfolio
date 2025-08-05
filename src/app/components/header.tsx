"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  return (
    <header
      // className={` top-5 w-4/5 fixed  left-1/2 bg-gray-600 p-3 px-4 transform -translate-x-1/2 grid items-center gap-5 transition-all duration-300 ease-in-out rounded-lg shadow-md`}
      className={`group top-1/2 fixed -translate-y-1/2 left-3 bg-gray-900 scale-75 hover:scale-100 border-gray-600 border  p-3 px-4 transform grid items-center gap-5 transition-all duration-400 ease-in-out rounded-2xl shadow-md`}
    >
      <Navbar />
    </header>
  );
}

function Navbar() {
  const pathname = usePathname();

  const routes = [
    { name: "Home", href: "/", icon: "home" },
    { name: "About", href: "/about", icon: "user" },
    { name: "Blog", href: "/blogs", icon: "book" },
  ];

  return (
    <nav>
      <ul className="flex flex-col justify-between px-1 gap-10 py-10  text-center">
        {routes.map((route) => {
          const isActive = pathname === route.href;
          return (
            <li
              className="h-8 flex items-center justify-center w-20"
              key={route.name}
            >
              <Link
                href={route.href}
                className={`transition-all duration-200 hover:text-2xl ${
                  isActive
                    ? "text-blue-400 font-semibold hover:text-blue-400"
                    : "text-gray-300 hover:text-blue-200 "
                }`}
              >
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
