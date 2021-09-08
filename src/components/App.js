import React from "react";
import AppStyled from "./AppStyled";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  return (
    <AppStyled>
      <Header />
      <Main />
    </AppStyled>
  );
};

export default App;
