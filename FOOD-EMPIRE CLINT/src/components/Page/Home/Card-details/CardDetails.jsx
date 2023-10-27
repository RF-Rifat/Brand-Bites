import { useLoaderData, useParams } from "react-router-dom";
import "./cardDetails.css";
import { Helmet } from "react-helmet-async";
import Carousel from "../Card-details/Carousel";
import BrandCards from "./brandCards";
import { useEffect, useState } from "react";
import EmptyData from "./EmptyData";

const CardDetails = () => {
  const { brand } = useParams();
  const data = useLoaderData();
  const [brandData, setBrandData] = useState([]);

  useEffect(() => {
    fetch("https://brand-bites.vercel.app/products")
      .then((res) => res.json())
      .then((item) => setBrandData(item));
  }, []);

  // Slider Image
  const cardData = data?.filter((item) => brand == item.brand);
  const { sliderImg } = cardData[0] || {};

  // filtered card data by brand

  const filteredProducts = brandData?.filter(
    (product) => product?.brand === brand
  );

  if (!filteredProducts.length) {
    return <EmptyData></EmptyData>;
  }
  return (
    <>
      <Helmet>
        <title>FOODIE | DETAILS</title>
      </Helmet>
      <div className="md:mb-[200px] rounded">
        <div className="md:h-[60svh] rounded">
          <Carousel sliderImg={sliderImg} />
        </div>
      </div>
      <div>
        <header className="py-4 lg:mt-6 lg:mb-2">
          <p className="text-center font-extrabold text-warning tracking-tight text-3xl lg:text-5xl font-serif">
            {brand} Products
          </p>
        </header>
        <div className="flex justify-center">
          <div className="grid gap-4">
            {filteredProducts.map((item) => (
              <BrandCards key={item._id} item={item}></BrandCards>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default CardDetails;
