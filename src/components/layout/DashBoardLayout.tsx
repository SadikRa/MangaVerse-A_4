import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaBoxes,
  FaUsers,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaHome,
} from "react-icons/fa";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { ModeToggle } from "../mode-toggle";

const DashBoardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const user = useAppSelector(selectCurrentUser);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`h-screen ${
          isOpen ? "w-64" : "w-20"
        } bg-gray-800 dark:bg-gray-900 text-white transition-all duration-300 p-4 fixed`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white mb-4 focus:outline-none"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Sidebar Items */}
        <nav className="flex flex-col space-y-4">
          {/* Dark and Light Mode Toggle */}
          <div className="flex items-center space-x-2">
            <ModeToggle />
            {isOpen && <span>Theme</span>}
          </div>

          {/* Home Link */}
          <NavLink
            to="/"
            className="flex items-center space-x-2 hover:text-orange-500"
          >
            <FaHome size={20} />
            {isOpen && <span>Home</span>}
          </NavLink>

          {/* Admin Links (Only for Admin Users) */}
          {user?.role === "admin" && (
            <>
              <h3
                className={`text-gray-400 text-sm uppercase ${
                  !isOpen && "hidden"
                }`}
              >
                Admin
              </h3>
              <NavLink
                to="/dashboard/products"
                className="flex items-center space-x-2 hover:text-orange-500"
              >
                <FaBoxes size={20} />
                {isOpen && <span>Products</span>}
              </NavLink>
              <NavLink
                to="/dashboard/users"
                className="flex items-center space-x-2 hover:text-orange-500"
              >
                <FaUsers size={20} />
                {isOpen && <span>Users</span>}
              </NavLink>
              <NavLink
                to="/dashboard/orders"
                className="flex items-center space-x-2 hover:text-orange-500"
              >
                <FaShoppingCart size={20} />
                {isOpen && <span>Orders</span>}
              </NavLink>
            </>
          )}

          {/* User Links (For All Users) */}
          <h3
            className={`text-gray-400 text-sm uppercase mt-6 ${
              !isOpen && "hidden"
            }`}
          >
            User
          </h3>
          <NavLink
            to="/dashboard/my-orders"
            className="flex items-center space-x-2 hover:text-orange-500"
          >
            <FaShoppingCart size={20} />
            {isOpen && <span>My Orders</span>}
          </NavLink>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main
        className={`flex-1 min-h-screen bg-gray-100 dark:bg-gray-800 transition-all duration-300 ml-${
          isOpen ? "64" : "20"
        }`}
      >
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashBoardLayout;
