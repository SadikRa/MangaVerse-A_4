import { FaBookOpen, FaGlobe, FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full h-96 md:h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/KpYR071P/about.webp')",
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-orange-500">
            About Us
          </h1>
        </div>
      </section>

      {/* About Content */}
      <div className="max-w-4xl mx-auto py-12 px-6 space-y-8 text-center">
        {/* Mission Statement */}
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400">
          Our Mission
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          At <span className="text-orange-500 font-semibold">MangaVerse</span>,
          our mission is to bring the best and most diverse collection of manga
          to fans worldwide. We believe that every manga tells a story, and we
          are dedicated to making those stories accessible to everyone,
          everywhere.
        </p>

        {/* Why Choose Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg flex flex-col items-center space-y-4 shadow-lg hover:scale-105 transition-transform">
            <FaBookOpen size={40} className="text-orange-500" />
            <h3 className="text-xl font-bold">Wide Collection</h3>
            <p className="text-gray-300 text-sm">
              We offer thousands of manga titles across different genres,
              ensuring there's something for everyone.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg flex flex-col items-center space-y-4 shadow-lg hover:scale-105 transition-transform">
            <FaGlobe size={40} className="text-orange-500" />
            <h3 className="text-xl font-bold">Global Access</h3>
            <p className="text-gray-300 text-sm">
              Whether you’re in Japan or the USA, you can explore and enjoy
              manga without limits.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg flex flex-col items-center space-y-4 shadow-lg hover:scale-105 transition-transform">
            <FaHeart size={40} className="text-orange-500" />
            <h3 className="text-xl font-bold">Community Love</h3>
            <p className="text-gray-300 text-sm">
              We are passionate about manga and strive to build a vibrant
              community of manga lovers.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8">
          <h3 className="text-2xl md:text-3xl font-bold text-orange-400">
            Join Us on This Journey!
          </h3>
          <p className="text-gray-300 text-sm mt-2">
            Whether you’re a longtime manga fan or just starting, MangaVerse is
            here for you. Start exploring today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;