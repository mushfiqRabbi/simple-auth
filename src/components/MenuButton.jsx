import React from "react";

export default function MenuButton({ showNav, setShowNav }) {
  const toggleMenu = (e) => {
    e.preventDefault();
    setShowNav((val) => !val);
  };
  return (
    <button
      className={
        (showNav
          ? "mr-4 rounded-full px-3 font-light text-red-500 "
          : "px-2 text-white font-semibold rounded-sm ") +
        "absolute uppercase text-2xl top-0 right-0 bg-gray-800 inline-block  pb-1 m-2 mt-[.60rem] z-10 transition-all"
      }
      onClick={toggleMenu}
    >
      {showNav ? "x" : "m"}
    </button>
  );
}
