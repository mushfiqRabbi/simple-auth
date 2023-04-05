import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarLink({ to, setShowNav }) {
  const handleClick = () => {
    setShowNav((val) => !val);
  };
  return (
    <NavLink
      to={to}
      className="text-white uppercase text-xl font-semibold bg-gray-500 w-full text-center p-1 rounded-sm"
      onClick={handleClick}
    >
      {to.slice(1)}
    </NavLink>
  );
}
