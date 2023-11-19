import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [orderId] = useState(() => {
    const orderId = localStorage.getItem("orderId");
    console.log(
      "🚀 ~ file: Navigation.jsx:14 ~ const[orderId,setOrderId]=useState ~ orderId:",
      orderId,
    );
    return orderId ? JSON.parse(orderId) : undefined;
  });

  const navigation = [
    { name: "About Us", to: "/#feature" },
    { name: "Menu", to: "/menu" },
    { name: "New Order", to: "/order/new" },
    ...(orderId !== undefined
      ? [{ name: "Order Status", to: `/order/${orderId}` }]
      : []),
  ];

  useEffect(() => {
    if (orderId) {
      localStorage.setItem("orderId", JSON.stringify(orderId));
    }
  }, [orderId]);
  return (
    <>
      {navigation.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </>
  );
}

const NavItem = ({ item }) => {
  const { name, to } = item;
  return (
    <div>
      <Link
        key={name}
        to={to}
        className="text-text-200  -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-accent200"
      >
        {name}
      </Link>
    </div>
  );
};

export default Navigation;
