/* eslint-disable react/prop-types */
import { FaPenNib } from "react-icons/fa6";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const BrandCards = ({ item }) => {
  const { _id, description, image, price, rating, type } = item;
  return (
    <>
      <div className="flex flex-col items-center rounded-md border md:flex-row border-info">
        <div className="h-[50cqw] lg:h-72 w-full md:w-96">
          <img
            src={image}
            alt="Laptop"
            className="md:w-96 h-full w-full rounded-md object-cover"
          />
        </div>
        <div className="h-full lg:min-w-[30cqw]">
          <div className="p-6 grid h-full">
            <h1 className="inline-flex items-center text-xl font-semibold text-primary dark:text-white">
              {type}
            </h1>
            <p className="mt-3 lg:w-96 text-lg break-words">
              {description}
            </p>
            <div className="mt-4 text-orange-500 text-lg">
              <p>Price: {price}</p>
            </div>
            <div className="mt-3 flex text-2xl items-center space-x-2">
              <Rating
                placeholderRating={rating}
                emptySymbol={
                  <AiOutlineStar className="icon"></AiOutlineStar>
                }
                placeholderSymbol={
                  <AiTwotoneStar className="icon text-amber-400"></AiTwotoneStar>
                }
                fullSymbol={
                  <BiSolidStarHalf className="icon text-amber-300"></BiSolidStarHalf>
                }
              />
            </div>
          </div>
        </div>

        <div className="flex w-full gap-2 p-1 md:w-auto md:grid md:gap-24 md:px-10 py-6">
          <Link
            to={`/update/${_id}`}
            type="button"
            className="flex justify-center items-center gap-4 rounded bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-success hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
          >
            <FaPenNib></FaPenNib>
            Update
          </Link>
          <Link
            to={`/addCart/${_id}`}
            type="button"
            className="flex flex-nowrap w-40 justify-center items-center gap-4 rounded bg-success py-3 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-primary hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
          >
            <TbListDetails></TbListDetails>
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default BrandCards;
