import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const CartOverview = () => {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  const [hideCart, setHideCart] = useState(() => {
    const storedState = localStorage.getItem("hideCart");
    return storedState ? JSON.parse(storedState) : false;
  });
  useEffect(() => {
    localStorage.setItem("hideCart", JSON.stringify(hideCart));
  }, [hideCart]);

  if (!totalCartQuantity) return null;
  if (hideCart)
    return (
      <div
        className="  fixed bottom-20 right-0 z-50 cursor-pointer rounded-2xl border-2 border-text200 bg-accent100 p-2 hover:bg-bg100  sm:p-3 "
        onClick={() => setHideCart(false)}
      >
        <div className="flex cursor-pointer items-center  justify-center">
          <span role="img" aria-label="Shopping Cart" className="text-black">
            {" "}
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
        </div>
      </div>
    );

  return (
    <div className=" sm:w-30 fixed bottom-20 right-0 z-50 w-20 rounded-2xl border-2  border-text200 bg-accent100 p-2 sm:w-32 sm:p-3 ">
      <div className="flex cursor-pointer justify-end ">
        <span
          className=" text-lg text-text200 hover:text-accent200"
          onClick={() => setHideCart(true)}
          aria-hidden="true"
        >
          &times;
        </span>
      </div>
      <div className="flex flex-col justify-between gap-1 sm:gap-3">
        <Link
          className=" capitalizetext-text200  text-center text-sm font-bold hover:text-accent200 sm:text-base "
          to="/cart"
        >
          Cart
        </Link>

        <div
          className="h-0.5 w-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 87, 34, 0.00) 0%, #979797 51.62%, rgba(255, 87, 34, 0.00) 100%)",
          }}
        />
        <p className=" text-center  text-xs font-normal text-text200 sm:text-sm ">
          {totalCartQuantity} pizzas
        </p>
        <div className="font-normaltext-text200sm:mt-2 text-center text-xs  sm:text-sm">
          <span className="font-bold ">Total:</span> {totalCartPrice}
        </div>
      </div>
    </div>
  );
};

export default CartOverview;
