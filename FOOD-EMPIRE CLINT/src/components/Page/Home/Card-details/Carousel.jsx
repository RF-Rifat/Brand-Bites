/* eslint-disable react/prop-types */
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcNext, FcPrevious } from "react-icons/fc";

const Carousel = ({ sliderImg }) => {
  const sliderRef = useRef(null);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="h-full rounded">
      <div className="w-full mx-auto relative">
        <div
          onClick={goToPrev}
          className="absolute grid place-items-center w-12 left-0 z-10 top-1/2"
        >
          <FcPrevious className="text-3xl"></FcPrevious>
        </div>
        <div
          onClick={goToNext}
          className="absolute grid place-items-center w-12 right-0 top-1/2 z-10"
        >
          <FcNext className="text-3xl"></FcNext>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {sliderImg?.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="rounded w-full h-[300px] md:h-[600px]"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
