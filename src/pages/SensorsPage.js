import React, { Component } from "react";
import sensors from "../data/sensors.json";
import { Link } from "react-router-dom";
import SensoresPageStyled from "./SensorsPageStyled";

class SensorsPage extends Component {
  state = {};

  render() {
    return (
      <SensoresPageStyled>
        <h2 className="sensorTitle">Sensors overview</h2>
        <ul className="sensorList">
          {sensors.map((sensor) => (
            <li className="sensorItem" key={sensor.id}>
              <h3 className="sensorItemTitle">{sensor.name}</h3>
              <p className="sensorItemDescription">{sensor.description}</p>
              <Link
                className="sensorItemLink"
                to={{
                  pathname: "/details",
                  state: {
                    from: this.props.location.pathname,
                    sensor: {
                      name: sensor.name,
                      coordinates: sensor.coordinates,
                    },
                  },
                }}
                type="button"
              >
                Details
              </Link>
            </li>
          ))}
        </ul>
      </SensoresPageStyled>
    );
  }
}

export default SensorsPage;
