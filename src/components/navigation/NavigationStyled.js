import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navList {
    display: flex;
  }
  .navItem:not(:last-child) {
    margin-right: 20px;
  }
  .navLink {
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    color: #ffff;
  }

  .activeNavLink {
    color: #eba607;
  }
`;

export default NavigationStyled;
