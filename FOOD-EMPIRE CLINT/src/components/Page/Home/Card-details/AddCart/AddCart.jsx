import { useContext } from "react";
import { AuthProvider } from "../../../../Authentication/Provider";
import { useLoaderData } from "react-router-dom";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
import Rating from "react-rating";
import Swal from "sweetalert2";
// import CartCard from "../../../Cart/CartCard";

const AddCart = () => {
  const AuthData = useContext(AuthProvider);
  const { setCartNum, cartNum } = useContext(AuthProvider);
  const data = useLoaderData();
  // console.log(data);
  const { user } = AuthData;
  const { brand, description, image, price, rating, type } = data;

  console.log(cartNum);

  const handleAddCart = () => {
    const newUser = {
      brand,
      description,
      price,
      rating,
      image,
      type,
      displayName: user?.displayName,
      email: user?.email,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You want to add this cart!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("https://brand-bites.vercel.app/userCartData", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              // setCartNum(cartNum + 1);
              console.log(data, "added");
            }
          });
        Swal.fire("added!", "Your cart has been added.", "success");
      }
    });
  };
  return (
    <div className="grid h-full w-full justify-center md:px-20">
      <h2 className="mt-2 mb-6 lg:mt-6 lg:mb-2">
        <p className="text-center font-extrabold text-warning tracking-tight text-3xl lg:text-5xl font-serif">
          Product Details
        </p>
      </h2>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-[30cqw] lg:h-[30cqw]"
            src={image}
            alt={brand}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          <div className="mt-4 text-orange-400 text-lg">
            <p>Price: {price}</p>
          </div>
          <div className="mt-3 flex text-2xl  items-center space-x-2">
            <Rating
              placeholderRating={rating}
              emptySymbol={<AiOutlineStar className="icon"></AiOutlineStar>}
              placeholderSymbol={
                <AiTwotoneStar className="icon text-amber-400"></AiTwotoneStar>
              }
              fullSymbol={
                <BiSolidStarHalf className="icon text-amber-300"></BiSolidStarHalf>
              }
            />
          </div>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button onClick={handleAddCart} className="btn btn-primary">
              <FaCartPlus></FaCartPlus> ADD CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
