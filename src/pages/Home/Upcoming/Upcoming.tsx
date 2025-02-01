import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const upcomingManga = [
  {
    title: "Spy x Family",
    image: "https://i.ibb.co.com/35bwwKy0/Screenshot-2025-01-26-205403.png",
  },
  {
    title: "Black Clover",
    image: "https://i.ibb.co.com/gFZ3RQbr/Screenshot-2025-01-26-205654.png",
  },
  {
    title: "Chainsaw Man",
    image: "https://i.ibb.co.com/svPC9H4G/Screenshot-2025-01-26-205643.png",
  },
  {
    title: "Boruto",
    image: "https://i.ibb.co.com/FCQYxkR/Screenshot-2025-01-26-205448.png",
  },
  {
    title: "Dandadan",
    image: "https://i.ibb.co.com/6JDmn6xK/Screenshot-2025-01-26-205624.png",
  },
];

const Upcoming = () => {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <h2 className="text-2xl font-bold text-black dark:text-white text-center mb-6">
        🔥 Upcoming Manga 🔥
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {upcomingManga.map((manga, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="relative w-64 h-80 overflow-hidden rounded-lg shadow-lg group">
              <img
                src={manga.image}
                alt={manga.title}
                className="w-full h-full object-cover transition-transform transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                <h3 className="text-xl font-bold text-white drop-shadow-lg">
                  {manga.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Upcoming;
