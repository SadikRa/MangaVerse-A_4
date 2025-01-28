import { Home, BookOpen, User, Search, Link, Menu, X } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { useState } from "react";

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
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-orange-600">mangaVerse</span>
          </Link>
        </div>

        {/* Center Links (Hidden on small devices) */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-orange-600"
          >
            <Home className="h-5 w-5" />
          </Link>
          <Link
            href="/manga"
            className="text-sm font-medium transition-colors hover:text-orange-600"
          >
            <BookOpen className="h-5 w-5" />
          </Link>
          <Link
            href="/search"
            className="text-sm font-medium transition-colors hover:text-orange-600"
          >
            <Search className="h-5 w-5" />
          </Link>
          <Link
            href="/profile"
            className="text-sm font-medium transition-colors hover:text-orange-600"
          >
            <User className="h-5 w-5" />
          </Link>
        </div>


        {/* Right side */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">
            Get Started
          </Button>
        </div>
      </div>

      {/* Dropdown Menu (Visible on small devices) */}
      {menuOpen && (
        <div className="lg:hidden bg-background border-t">
          <div className="flex flex-col items-start px-4 py-2 gap-2">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-orange-600 flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              Home
            </Link>
            <Link
              href="/manga"
              className="text-sm font-medium transition-colors hover:text-orange-600 flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <BookOpen className="h-5 w-5" />
              Manga
            </Link>
            <Link
              href="/search"
              className="text-sm font-medium transition-colors hover:text-orange-600 flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <Search className="h-5 w-5" />
              Search
            </Link>
            <Link
              href="/profile"
              className="text-sm font-medium transition-colors hover:text-orange-600 flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <User className="h-5 w-5" />
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
