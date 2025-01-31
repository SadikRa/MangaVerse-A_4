import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer
      className="mt-8 bg-gradient-to-b from-gray-900 to-black
 text-white py-10 px-4 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between space-y-8 md:space-y-0">
        <div className="text-center md:text-left max-w-xs">
          <img
            src={Logo}
            alt="MangaVerse Logo"
            className="h-14 mx-auto md:mx-0"
          />
          <p className="mt-3 text-sm opacity-85">
            MangaVerse is your ultimate destination for exploring the best manga
            collections, discovering new genres, and experiencing exciting
            adventures!
          </p>
          <p className="mt-1 text-xs opacity-75">
            Stay updated with the latest manga releases and reviews.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-10 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-200 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition">
                  Manga Library
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition">
                  Popular Series
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition">
                  New Releases
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-6 md:mt-0">
            <h3 className="font-semibold text-lg mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-200 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition flex items-center gap-2"
            >
              <FaFacebook size={20} />{" "}
              <span className="hidden md:inline">Facebook</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition flex items-center gap-2"
            >
              <FaTwitter size={20} />{" "}
              <span className="hidden md:inline">Twitter</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition flex items-center gap-2"
            >
              <FaInstagram size={20} />{" "}
              <span className="hidden md:inline">Instagram</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition flex items-center gap-2"
            >
              <FaYoutube size={20} />{" "}
              <span className="hidden md:inline">YouTube</span>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-8 opacity-75">
        &copy; {new Date().getFullYear()} MangaVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
