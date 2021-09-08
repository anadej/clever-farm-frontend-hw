import styled from "styled-components";

const DetailsPageStyled = styled.div`
  button {
    margin: 20px 0 20px 20px;
    padding: 13px;
    background-color: #eba607;
    color: #333;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    min-width: 100px;
    font-size: 15px;
    font-weight: bold;
    /* text-transform: uppercase; */
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }

  button:hover,
  button:focus {
    background-color: #d29506;
  }

  .sensorTitle {
    margin-bottom: 25px;
    color: #333;
    font-size: 46px;
    font-weight: 700;
    text-align: center;
  }
`;

export default DetailsPageStyled;
