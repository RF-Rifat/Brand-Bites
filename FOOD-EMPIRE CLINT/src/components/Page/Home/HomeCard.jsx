import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

// eslint-disable-next-line react/prop-types
const HomeCard = ({ cardData }) => {
  // eslint-disable-next-line react/prop-types
  const { brand, title, photo, description } = cardData;
  return (
    <>
      <m.div
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 1 },
        }}
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="relative flex flex-col rounded-xl bg-clip-border shadow-md"
      >
        <div className="overflow-hidden rounded-lg p-2">
          <img src={photo} alt="" className="w-full h-64" />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <div className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                {title}
              </div>
            </h3>
            <p className="text-base leading-relaxed mb-7 text-body-color">
              {description}
            </p>

            <Link
              to={`product/${brand}`}
              className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#FBB403] opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                View More
              </span>
            </Link>
          </div>
        </div>
      </m.div>
    </>
  );
};

export default HomeCard;
