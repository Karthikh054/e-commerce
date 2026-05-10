import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Banner() {
  const banners = [
    {
      id: 1,
      title: "Modern Ecommerce Website",
      subtitle: "Build fast and responsive React applications",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Best Product Collection",
      subtitle: "Discover premium products at great prices",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Responsive UI Design",
      subtitle: "Beautiful layouts for every device",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 60000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? banners.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === banners.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="relative overflow-hidden group">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="relative min-w-full h-[500px] sm:h-[600px] flex-shrink-0"
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="max-w-7xl mx-auto px-6 text-white">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight">
                  {banner.title}
                </h2>

                <p className="mt-5 text-lg sm:text-xl text-gray-200 max-w-xl">
                  {banner.subtitle}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold cursor-pointer shadow-lg">
                    Shop Now
                  </button>

                  <button className="px-8 py-3 rounded-full border border-white hover:bg-white hover:text-black transition font-semibold cursor-pointer">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition cursor-pointer z-10 backdrop-blur-sm opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={30} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition cursor-pointer z-10 backdrop-blur-sm opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={30} />
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Banner;
