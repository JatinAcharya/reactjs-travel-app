import React from "react";
import GlobeIcon from "../assets/globe.png";

const Header = () => {
  return (
    <>
      <header className="custom-header">
        <img src={GlobeIcon} alt="Globe icon" />
        <h2>My Travel Journal</h2>
      </header>
    </>
  );
};

export default Header;
