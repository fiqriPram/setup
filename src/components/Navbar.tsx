import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";

type NavItem = {
  label: string;
  path: string;
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Setup", path: "/setup" },
    { label: "Blogs", path: "/blogs" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const activeStyle = "text-black font-medium border-b-2 border-black";
  const inactiveStyle = "text-gray-600 hover:text-gray-900";

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-semibold tracking-tight">
              SetUp.
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-200 pb-1 ${
                    isActive ? activeStyle : inactiveStyle
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center">
            <button className="text-gray-600 hover:text-gray-900">
              <FaMoon className="text-gray-600 hover:text-gray-900" />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-gray-100 text-black font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
                onClick={toggleMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
