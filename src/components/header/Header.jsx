import React from "react";
import CTA from "./CTA";
// import ME from "../../assets/venky_profile-nb.png";
import ME from "../../assets/venky_profile.jpg";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import Nav from "../nav/Nav";
import ToggleButton from "./ToggleButton";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Venkatesh B</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="venky DP" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
        <Nav />
        <ToggleButton />
      </div>
    </header>
  );
};

export default Header;
