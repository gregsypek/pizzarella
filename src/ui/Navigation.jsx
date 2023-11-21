import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [orderId] = useState(() => {
    const orderId = localStorage.getItem("orderId");

    return orderId ? JSON.parse(orderId) : undefined;
  });

  const navigation = [
    { name: "Home", to: "/" },
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
      <NavLink
        key={name}
        to={to}
        // className={`text-text-200  ${({ isActive }) =>
        //   isActive
        //     ? "text-accent200"
        //     : ""} -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-accent200`}
        // >

        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "-mx-3 rounded-lg px-3 py-2 text-base font-bold leading-7 text-accent200 hover:bg-bg200"
            : "-mx-3 rounded-lg px-3 py-2 text-base font-bold leading-7 hover:bg-bg200"
        }
      >
        {name}
      </NavLink>
    </div>
  );
};

export default Navigation;
