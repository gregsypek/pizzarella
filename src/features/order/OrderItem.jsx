function OrderItem({ item }) {
  console.log("🚀 ~ file: OrderItem.jsx:2 ~ OrderItem ~ item:", item);
  return (
    <li className="py-3" key={item.pizzaId}>
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="capitalize">
          <span className="text-base font-bold">{"1"}&times;</span>
          {item.name}
        </p>
        <p className="font-bold">{item.totalPrice}</p>
      </div>
      <p className="text-sm capitalize italic text-text100">cheese, salami</p>
    </li>
  );
}

export default OrderItem;
