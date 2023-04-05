import React from "react";
import NavBarLink from "./NavBarLink";

export default function NavBarLinks({ showNav, setShowNav }) {
  return (
    <>
      <ul
        className={
          (showNav ? "right-0 " : "-right-full ") +
          "h-screen flex flex-col absolute bg-gray-700 top-0 w-3/4 p-4 pt-16 gap-2 transition-[right]"
        }
      >
        <NavBarLink to="/home" setShowNav={setShowNav} />
        <NavBarLink to="/profile" setShowNav={setShowNav} />
        <NavBarLink to="/signup" setShowNav={setShowNav} />
        <NavBarLink to="/login" setShowNav={setShowNav} />
      </ul>
    </>
  );
}
