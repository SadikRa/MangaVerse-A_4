import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../../assets/logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black
 text-white py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between space-y-8 md:space-y-0">
        
        {/* Logo & About Section */}
        <div className="text-center md:text-left max-w-xs">
          <img src={Logo} alt="MangaVerse Logo" className="h-14 mx-auto md:mx-0" />
          <p className="mt-3 text-sm opacity-85">
            MangaVerse is your ultimate destination for exploring the best manga collections, discovering new genres, and experiencing exciting adventures!
          </p>
          <p className="mt-1 text-xs opacity-75">Stay updated with the latest manga releases and reviews.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row md:space-x-10 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-200 transition">Home</a></li>
              <li><a href="#" className="hover:text-gray-200 transition">Manga Library</a></li>
              <li><a href="#" className="hover:text-gray-200 transition">Popular Series</a></li>
              <li><a href="#" className="hover:text-gray-200 transition">New Releases</a></li>
            </ul>
          </div>

          <div className="mt-6 md:mt-0">
            <h3 className="font-semibold text-lg mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-200 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-200 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-200 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-200 transition">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition flex items-center gap-2">
              <FaFacebook size={20} /> <span className="hidden md:inline">Facebook</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition flex items-center gap-2">
              <FaTwitter size={20} /> <span className="hidden md:inline">Twitter</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition flex items-center gap-2">
              <FaInstagram size={20} /> <span className="hidden md:inline">Instagram</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition flex items-center gap-2">
              <FaYoutube size={20} /> <span className="hidden md:inline">YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-xs mt-8 opacity-75">
        &copy; {new Date().getFullYear()} MangaVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;



// 🔥 Best Footer Background for MangaVerse

// Since MangaVerse's main color is orange, we want a footer background that complements it while maintaining readability. Here are the best options:
// 1️⃣ Dark Mode Footer (Best for a Sleek Look)

// If your site has a dark theme, a dark footer works best.

// ✅ Best Options:

//     bg-gray-900 → Dark gray (Sleek and modern)
//     bg-neutral-950 → Deep black-gray mix (Great contrast with orange)
//     bg-[#1a1a1a] → Charcoal black (Elegant & premium feel)
//     bg-gradient-to-t from-gray-900 to-black → Dark gradient (Stylish and immersive)

// 👉 Why?
// A dark footer helps keep focus on the content above while maintaining a premium and cinematic feel.
// 2️⃣ Light Mode Footer (For a Clean Look)

// If your site has a light theme, a softer footer color works better.

// ✅ Best Options:

//     bg-gray-100 → Soft light gray (Minimalist and clean)
//     bg-neutral-200 → Slightly darker than gray-100 (More contrast)
//     bg-[#F8F9FA] → Near-white soft tone (Bright & fresh look)

// 👉 Why?
// A light footer makes the site feel modern and airy, working well with a bright UI.
// 3️⃣ Stylish Orange Accent Footer

// Since MangaVerse’s main color is orange, you can use a deep orange footer for a more thematic look.

// ✅ Best Options:

//     bg-orange-700 → Deep orange (Vibrant yet elegant)
//     bg-orange-800 → Darker burnt orange (More contrast, less eye strain)
//     bg-gradient-to-t from-orange-800 to-orange-600 → Orange gradient (Stylish & unique)

// 👉 Why?
// An orange footer keeps the brand identity strong, making it memorable and vibrant.
// 🔥 My Recommendation for MangaVerse Footer
// Theme	Best Footer Background
// Dark Mode	bg-gray-900 or bg-[#1a1a1a]
// Light Mode	bg-gray-100 or bg-neutral-200
// Stylish	bg-gradient-to-t from-orange-800 to-orange-600

// 🚀 Final Verdict:

//     If your site is dark-themed, go with bg-gray-900 for modern contrast.
//     If your site is light-themed, go with bg-gray-100 for a clean and simple look.
//     If you want an orange accent footer, go with bg-orange-800 for branding consistency.

// 🔥 Which vibe do you prefer? I can help fine-tune the UI further!