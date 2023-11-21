import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import plus from "../../images/pizza_plus.svg";
import minus from "../../images/pizza_minus.svg";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      {/* <Button type="round" onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>-</Button> */}
      <div
        className="cursor-pointer rounded-full  bg-bg100 p-3 hover:bg-accent100 "
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        <img src={minus} alt="minus" />
      </div>
      <span className="text-sm font-medium">{currentQuantity}</span>
      {/* <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button> */}
      <div
        className="cursor-pointer rounded-full  bg-bg100 p-3 hover:bg-accent100"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        <img src={plus} alt="plus" />
      </div>
    </div>
  );
}

export default UpdateItemQuantity;
