import styled from "styled-components";

const AppStyled = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export default AppStyled;
