import styled from "styled-components";

const SensoresPageStyled = styled.div`
  padding: 20px;

  .sensorTitle {
    margin-bottom: 25px;
    color: #333;
    font-size: 46px;
    font-weight: 700;
    text-align: center;
  }

  .sensorList {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin-left: -15px;
    margin-top: -15px;
  }

  .sensorItem {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0 8px rgb(0 0 0 / 15%);
    border-radius: 10px;
    padding: 25px;

    margin-left: 15px;
    margin-top: 15px;
    flex-basis: calc(100%);

    @media screen and (min-width: 768px) {
      flex-basis: calc((100% - 30px) / 2);
    }

    @media screen and (min-width: 1200px) {
      flex-basis: calc((100% - 60px) / 4);
    }
  }

  .sensorItemTitle {
    margin-bottom: 15px;
  }

  .sensorItemDescription {
    margin-bottom: 15px;
  }

  .sensorItemLink {
    color: #00a179;
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
  }

  .sensorItemLink:hover {
    text-decoration: underline;
  }
`;

export default SensoresPageStyled;
