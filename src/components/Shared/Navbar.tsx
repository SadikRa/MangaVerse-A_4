import { Home, BookOpen, User, Search, Menu, X } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
            <Home className="h-5 w-5" />
          </NavLink>
          <NavLink
            to="/manga"
            className="text-sm font-medium transition-colors hover:text-orange-600"
          >
            <BookOpen className="h-5 w-5" />
          </NavLink>
          <NavLink
            to="/search"
            className="text-sm font-medium transition-colors hover:text-orange-600"
          >
            <Search className="h-5 w-5" />
          </NavLink>
          <NavLink
            to="/profile"
            className="text-sm font-medium transition-colors hover:text-orange-600"
          >
            <User className="h-5 w-5" />
          </NavLink>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          <NavLink to="/login">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Login
            </Button>
          </NavLink>
        </div>
      </div>

      {/* Dropdown Menu (Visible on small devices) */}
      {menuOpen && (
        <div className="lg:hidden bg-background border-t">
          <div className="flex flex-col items-start px-4 py-2 gap-2">
            <NavLink
              to="/"
              className="text-sm font-medium transition-colors hover:text-orange-600 flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              Home
            </NavLink>
            <NavLink
              to="/manga"
              className="text-sm font-medium transition-colors hover:text-orange-600 flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <BookOpen className="h-5 w-5" />
              Manga
            </NavLink>
            <NavLink
              to="/search"
              className="text-sm font-medium transition-colors hover:text-orange-600 flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <Search className="h-5 w-5" />
              Search
            </NavLink>
            <NavLink
              to="/profile"
              className="text-sm font-medium transition-colors hover:text-orange-600 flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <User className="h-5 w-5" />
              Profile
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
