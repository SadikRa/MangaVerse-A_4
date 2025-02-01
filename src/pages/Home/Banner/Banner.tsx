import { Parallax } from "react-scroll-parallax";
import { Button } from "../../../components/ui/button";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[450px] md:h-[550px] lg:h-[750px] bg-cover bg-center flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(https://i.ibb.co.com/xqWbZBc9/banner.webp)`,
      }}
    >
      <Parallax speed={-10}>
        <div className="absolute inset-0 bg-black/50"></div>
      </Parallax>

      <div className="relative z-10 w-full max-w-2xl px-6 md:px-12 text-white animate-fadeIn">
        <div className="bg-black/50 p-6 rounded-lg backdrop-blur-sm">
          <h2 className="text-lg md:text-xl font-semibold text-orange-400 uppercase tracking-wider">
            #Special Offer
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Discover the Ultimate <br />
            <span className="text-orange-400">Manga Collection!</span>
          </h1>
          <p className="mt-6 text-sm md:text-base text-gray-200 max-w-lg">
            Read your favorite manga anytime, anywhere. Get exclusive access to
            the latest releases, trending series, and classic stories.
          </p>
          <Button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold transition-transform transform hover:scale-105">
            Order Now
          </Button>
        </div>
      </div>

      <Parallax speed={10}>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent"></div>
      </Parallax>
      <Parallax speed={5}>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/50 to-transparent"></div>
      </Parallax>
    </div>
  );
};

export default Banner;