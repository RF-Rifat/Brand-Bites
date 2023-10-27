import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import CartCard from "./CartCard";
import EmptyData from "../Home/Card-details/EmptyData";
import { AuthProvider } from "../../Authentication/Provider";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyCart = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useLoaderData() || {};
  const [cardData, setCardData] = useState([]);
  const { setCartNum, cartNum } = useContext(AuthProvider);
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const AuthData = useContext(AuthProvider);
  const { user } = AuthData;
  const { email } = user;

  useEffect(() => {
    const filteredData = data.filter((item) => item.email === email);
    setCardData(filteredData);
  }, [data, email]);

  useEffect(() => {
    setCartNum(cardData.length)
    
  }, [cardData.length, setCartNum]);
  useEffect(() => {
    const prices = cardData.map((item) => parseFloat(item.price));
    const subtotal = prices.reduce((acc, price) => acc + price, 0);

    const taxAmount = subtotal * 0.1;
    const totalAmount = subtotal + taxAmount;

    setTotalPrice(subtotal.toFixed(2));
    setTax(taxAmount.toFixed(2));
    setTotal(totalAmount.toFixed(2));
  }, [cardData]);

  function handlePurchase() {
    Swal.fire({
      title: "Are you sure ?",
      text: "You want to purchase these items!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Purchase Complete!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Purchase Complete!", "FOOD Purchase Complete.", "success");
        navigate("/");
      }
    });
  }

  if (!cardData.length) {
    return <EmptyData></EmptyData>;
  }

  return (
    <>
      <Helmet>
        <title>FOODIE | CART</title>
      </Helmet>
      <div className="grid font-semibold">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-extrabold text-warning tracking-tight mb-4">
            Shopping Cart
          </h1>
          <div className="grid md:grid-flow-col gap-4 relative">
            <div className="grid w-full">
              {cardData?.map((item, idx) => (
                <CartCard
                  key={idx}
                  item={item}
                  cardData={cardData}
                  setCardData={setCardData}
                />
              ))}
            </div>
            <div className="sticky h-96" style={{ top: "10px" }}>
              <div className="bg-sky-300 text-accent-content rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes (10%)</span>
                  <span>${tax}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${total}</span>
                </div>
                <button
                  onClick={handlePurchase}
                  className="bg-blue-500 dark:bg-blue-900 text-white dark:text-gray-200 py-2 px-4 rounded-lg mt-4 w-full"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCart;
