import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  console.log("🚀 ~ file: OrderItem.jsx:2 ~ OrderItem ~ item:", item);
  const { quantity, name, totalPrice } = item;
  return (
    <li className="space-x-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="capitalize">
          <span className="text-base font-bold">{quantity}&times;</span>
          {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-text100">
        {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
