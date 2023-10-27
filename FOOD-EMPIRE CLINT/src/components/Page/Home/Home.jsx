import { Link, useLoaderData, useNavigation } from "react-router-dom";
import HomeCard from "./HomeCard";
import { Helmet } from "react-helmet-async";
import Products from "./Products";

const Home = () => {
  const data = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <>
        <div className="relative flex justify-center items-center">
          <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
          <img
            src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
            className="rounded-full h-28 w-28"
          />
        </div>
      </>
    );
  }
  return (
    <>
      <Helmet>
        <title>FOODIE | HOME</title>
      </Helmet>
      <div className="overflow-x-hidden mt-10 dark:bg-slate-800">
        <div
          className="hero h-[70svh] lg:h-[80svh] rounded-lg"
          style={{
            backgroundImage: "url(/banner.png)",
          }}
        >
          <div className="flex justify-between w-full h-full">
            <div className="hero-content text-center text-white flex-1">
              <div className="max-w-md" data-aos="zoom-in-down">
                <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                  Fast, Fresh, and Irresistible
                </h1>
                <p className="mb-5 text-sm md:text-xl">
                  Indulge in a mouthwatering world of fast food delights. From
                  juicy burgers to crispy fries, we&rsquo;ve got your cravings
                  covered.
                </p>
                <Link
                  to={"/login"}
                  className="relative md:px-5 py-2 font-medium text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#FBB403] group-hover:bg-orange-300 group-hover:skew-x-12"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-amber-300 group-hover:bg-[#FBB403] group-hover:-skew-x-12"></span>
                  <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-amber-200 -rotate-12"></span>
                  <span className="absolute bottom-0 right-0 hidden md:w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#FBB403] -rotate-12"></span>
                  <span className="relative">ORDER NOW</span>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative lg:block hidden">
              <img className="w-8/12 absolute top-32 left-28" src="/burger.png" alt="burger" />
              <img className="w-8/12 absolute top-14 -left-10" src="/burger-icon.png" alt="burger" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-xl md:text-3xl font-semibold text-center underline underline-offset-3 decoration-8 decoration-[#FBB403] dark:decoration-[#FBB403] py-16">
          <span className="decoration-slate-200 dark:decoration-slate-200">
            OUR - FOOD - BRANDS
          </span>
        </div>

        {/* our products */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((element, idx) => (
            <HomeCard cardData={element} key={idx}></HomeCard>
          ))}
        </div>

        <div className="text-xl md:text-3xl font-semibold text-center underline underline-offset-3 decoration-8 decoration-[#FBB403] dark:decoration-[#FBB403] py-16">
          <span className="decoration-slate-200 dark:decoration-slate-200">
            DISCOUNT PRODUCTS
          </span>
        </div>
        <Products></Products>
      </div>
    </>
  );
};

export default Home;
