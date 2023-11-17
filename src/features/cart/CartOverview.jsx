import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
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
      <div className="  fixed bottom-20 right-0 z-50 rounded-2xl border-2 border-bg300 bg-text200 p-2  sm:p-3 ">
        <div className="flex cursor-pointer justify-center  items-center">
          <span
            role="img"
            aria-label="Shopping Cart"
            className="text-white hover:text-accent200"
            onClick={() => setHideCart(false)}
          >
            {" "}
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
        </div>
      </div>
    );

  return (
    <div className=" sm:w-30 fixed bottom-20 right-0 z-50 w-20 rounded-2xl border-2 border-bg300 bg-text200 p-2 sm:w-32 sm:p-3 ">
      <div className="flex cursor-pointer justify-end ">
        <span
          className=" text-lg text-bg100 hover:text-accent200"
          onClick={() => setHideCart(true)}
          aria-hidden="true"
        >
          &times;
        </span>
      </div>
      <div className="flex flex-col justify-between gap-1 sm:gap-3">
        <p className=" text-center  text-sm font-bold capitalize text-bg100 sm:text-base ">
          Cart
        </p>

        <div
          className="h-0.5 w-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 87, 34, 0.00) 0%, #979797 51.62%, rgba(255, 87, 34, 0.00) 100%)",
          }}
        />
        <p className=" text-center  text-xs font-normal text-bg100  sm:text-sm ">
          {totalCartQuantity} pizzas
        </p>
        <div className="text-center text-xs font-normal text-bg100 sm:mt-2  sm:text-sm">
          <span className="font-bold ">Total:</span> {totalCartPrice}
        </div>
      </div>
    </div>
  );
};

export default CartOverview;
