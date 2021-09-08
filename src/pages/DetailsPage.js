import React, { Component } from "react";
import DetailsPageStyled from "./DetailsPageStyled";

import SensorsMap from "../components/sensorsMap/SensorsMap";

class DetailsPage extends Component {
  state = {};

  goBack = () => {
    const { location, history } = this.props;
    history.push(location.state.from);
  };

  render() {
    const { name, coordinates } = this.props.location.state.sensor;
    return (
      <DetailsPageStyled>
        <h2 className="sensorTitle">{name}</h2>
        <SensorsMap coordinates={coordinates} />
        <button type="button" onClick={this.goBack}>
          Go back
        </button>
      </DetailsPageStyled>
    );
  }
}

export default DetailsPage;
