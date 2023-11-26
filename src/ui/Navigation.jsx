import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation({onClick}) {

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
        <NavItem key={index} item={item} onClick={onClick}/>
      ))}
    </>
  );
}

const NavItem = ({ item, onClick }) => {
  const { name, to } = item;
  return (
 
      <NavLink
        key={name}
        to={to}
        onClick={()=>onClick(false)}      

        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "-mx-3 rounded-lg px-3 py-2  font-bold leading-7 text-accent200 hover:bg-bg200"
            : "-mx-3 rounded-lg px-3 py-2  font-bold leading-7 hover:bg-bg200"
        }
      >
        {name}
      </NavLink>
   
  );
};

export default Navigation;
