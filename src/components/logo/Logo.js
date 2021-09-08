import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import LogoStyled from "./LogoStyled";

const Logo = () => {
  return (
    <LogoStyled>
      <Link className="logoLink" to="/" type="button">
        <img className="logoImg" src={logo} alt="logo" />
      </Link>
    </LogoStyled>
  );
};

export default Logo;
