import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import "./Admin.css";

export default function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [usersOpen, setUsersOpen] = useState(false); // toggle for Users submenu
  const [resumesOpen, setResumesOpen] = useState(false); // toggle for Users submenu

  const location = useLocation();

  // Auto-expand Users if the current route is under /admin/users/*
  useEffect(() => {
    if (location.pathname.startsWith("/admin/users")) {
      setUsersOpen(true);
    }
    if (location.pathname.startsWith("/admin/resumes")) {
      setResumesOpen(true);
    }
  }, [location]);

  const linkClasses =
    "block px-4 py-2 rounded-lg transition-colors duration-200";
  const activeClasses = "bg-blue-600 text-white font-semibold shadow-md";

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed z-20 inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-white w-64 shadow-lg lg:translate-x-0 lg:static lg:inset-0 admin-sidebar`}
      >
        <div className="p-4 font-bold text-xl border-b">Admin Panel</div>
        <nav className="p-4 space-y-2">
          {/* Users Section (Collapsible) */}
          <div>
            <button
              onClick={() => setUsersOpen(!usersOpen)}
              className="flex justify-between items-center w-full text-left font-semibold text-gray-600 mb-2"
            >
              <span>Users</span>
              {usersOpen ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {usersOpen && (
              <div className="ml-2 space-y-1">
                <NavLink
                  to="/admin/users/all"
                  className={({ isActive }) =>
                    `${linkClasses} ${
                      isActive
                        ? activeClasses
                        : "text-gray-700 hover:bg-gray-200"
                    }`
                  }
                >
                  All
                </NavLink>
                <NavLink
                  to="/admin/users/verified"
                  className={({ isActive }) =>
                    `${linkClasses} ${
                      isActive
                        ? activeClasses
                        : "text-gray-700 hover:bg-gray-200"
                    }`
                  }
                >
                  Verified
                </NavLink>
                <NavLink
                  to="/admin/users/unverified"
                  className={({ isActive }) =>
                    `${linkClasses} ${
                      isActive
                        ? activeClasses
                        : "text-gray-700 hover:bg-gray-200"
                    }`
                  }
                >
                  Unverified
                </NavLink>
                <NavLink
                  to="/admin/users/subscribed"
                  className={({ isActive }) =>
                    `${linkClasses} ${
                      isActive
                        ? activeClasses
                        : "text-gray-700 hover:bg-gray-200"
                    }`
                  }
                >
                  Subscribed
                </NavLink>
              </div>
            )}
          </div>

          {/* Resumes */}
          <div className="mt-4">
            <button
              onClick={() => setResumesOpen(!resumesOpen)}
              className="flex justify-between items-center w-full text-left font-semibold text-gray-600 mb-2"
            >
              <span>Resumes</span>
              {resumesOpen ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {resumesOpen && (<div className="ml-2 space-y-1">
                <NavLink
                to="/admin/resumes"
                className={({ isActive }) =>
                    `${linkClasses} ${
                    isActive ? activeClasses : "text-gray-700 hover:bg-gray-200"
                    }`
                }
                >
                Resumes
                </NavLink>
            </div>)}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Toggle */}
        <div className="lg:hidden p-2">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md bg-gray-200 admin-menu-button"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <main className="p-6 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
