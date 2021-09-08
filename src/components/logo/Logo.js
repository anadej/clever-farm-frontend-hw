import React from "react";
import logo from "../../images/logo.png";
import LogoStyled from "./LogoStyled";

const Logo = () => {
  return (
    <LogoStyled>
      <img className="logoImg" src={logo} alt="logo" />
    </LogoStyled>
  );
};

export default Logo;
