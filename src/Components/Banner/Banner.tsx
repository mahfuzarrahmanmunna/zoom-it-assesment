// Banner.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface Slide {
  id: number;
  image: string;
  title: string;
  desc: string;
}

const Banner: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides: Slide[] = [
    {
      id: 1,
      image: "https://i.ibb.co.com/xq9k9rv3/pexels-suzyhazelwood-2536965.jpg",
      title: "Shop Smarter, Live Better",
      desc: "Discover exclusive deals on your favorite products today!",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/8n4XNxKn/pexels-max-fischer-5869611.jpg",
      title: "Your Style, Your Store",
      desc: "Fashion collections and lifestyle products curated for you.",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/wrS0DkHD/pexels-angela-roma-7319301.jpg",
      title: "Upgrade Your Tech",
      desc: "Find the latest gadgets & electronics at unbeatable prices.",
    },
  ];

  return (
    <div className="w-full max-h-[80vh] overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            {/* Background image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[80vh] object-cover"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="max-w-2xl mb-6">{slide.desc}</p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold shadow-lg">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
