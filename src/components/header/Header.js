import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Navigation routes={mainRoutes} />
    </HeaderStyled>
  );
};

export default Header;
