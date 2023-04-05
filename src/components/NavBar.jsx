import NavBarLinks from "./NavBarLinks";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import MenuButton from "./MenuButton";
import Header from "./Header";

export default function NavBar() {
  const [header, setHeader] = useState("");
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setHeader(location.pathname.slice(1));
  }, [location.pathname]);

  return (
    <>
      <nav className="bg-gray-500 relative">
        <Header header={header}></Header>
        <MenuButton showNav={showNav} setShowNav={setShowNav}></MenuButton>
        <NavBarLinks showNav={showNav} setShowNav={setShowNav} />
      </nav>
    </>
  );
}
