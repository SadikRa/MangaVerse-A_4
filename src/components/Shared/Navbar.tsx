import { Menu, X } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex items-center justify-between h-16 px-4">
        {/* Left side: Logo and Menu Icon */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMenu}
            className="lg:hidden text-orange-600 hover:text-orange-700 focus:outline-none"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <NavLink to="/" className="flex items-center gap-2">
            <img
              src={Logo}
              alt="MangaVerse Logo"
              className="h-10 w-auto max-w-[150px] object-contain"
            />
            <span className="font-bold text-orange-600 text-xl sm:block hidden">
              mangaVerse
            </span>
          </NavLink>
        </div>

        {/* Center Links (Hidden on small devices) */}
        <div className="hidden lg:flex items-center gap-6">
          <NavLink
            to="/"
            className="text-sm font-medium transition-colors hover:text-orange-600"
          >
            home
          </NavLink>
          <NavLink
            to="/product"
            className="text-sm font-medium transition-colors hover:text-orange-600"
          >
            product
          </NavLink>
          <NavLink
            to="/about"
            className="text-sm font-medium transition-colors hover:text-orange-600"
          >
            about
          </NavLink>
          <NavLink
            to="/dashBoard"
            className="text-sm font-medium transition-colors hover:text-orange-600"
          >
            dashBoard
          </NavLink>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <ModeToggle />

          {user ? (
            <Button
              onClick={handleLogout}
              className="bg-orange-600 hover:bg-orange-700 text-white transition-transform transform hover:scale-105"
            >
              LogOut
            </Button>
          ) : (
            <NavLink to="/login">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white transition-transform transform hover:scale-105">
                Login
              </Button>
            </NavLink>
          )}
        </div>
      </div>

      {/* Dropdown Menu (Visible on small devices) */}
      {menuOpen && (
        <div className="lg:hidden bg-background border-t">
          <div className="flex flex-col items-start px-4 py-2 gap-2">
            <NavLink
              to="/"
              className="text-sm font-medium transition-colors hover:text-orange-600"
            >
              home
            </NavLink>
            <NavLink
              to="/product"
              className="text-sm font-medium transition-colors hover:text-orange-600"
            >
              product
            </NavLink>
            <NavLink
              to="/about Us"
              className="text-sm font-medium transition-colors hover:text-orange-600"
            >
              about
            </NavLink>
            <NavLink
              to="/dashBoard"
              className="text-sm font-medium transition-colors hover:text-orange-600"
            >
              dashBoard
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
