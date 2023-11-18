import React from "react";
import DeleteItem from "./DeleteItem";
import { formatCurrency } from "../../utils/helpers";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, totalPrice, quantity } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))

  return (
    <li className="py-3" key={pizzaId}>
      <div className="flex items-center justify-between gap-4 text-sm">
        <div>
          <p className="capitalize">
            <span className="text-base font-bold">{quantity} &times;</span>
            {name}
          </p>
          <p className="text-sm capitalize italic text-text100">
            cheese, salami
          </p>
        </div>
        <div className="flex items-center gap-4 font-bold">
          <p>{formatCurrency(totalPrice)} </p>{" "}
          <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity}/>
          <DeleteItem pizzaId={pizzaId} size="small"/>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
