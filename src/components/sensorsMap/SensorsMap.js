import React, { useEffect } from "react";
import "ol/ol.css";
import { Circle, Fill, Style } from "ol/style";
import { Feature, Map, /*Overlay,*/ View } from "ol/index";
import { OSM, Vector as VectorSource } from "ol/source";
import { Point } from "ol/geom";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { useGeographic } from "ol/proj";

import SensorsMapStyled from "./SensorsMapStyled";

const SensorsMap = ({ coordinates }) => {
  useGeographic();

  const point = new Point(coordinates);

  useEffect(() => {
    new Map({
      target: "map",
      view: new View({
        center: coordinates,
        zoom: 15,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(point)],
          }),
          style: new Style({
            image: new Circle({
              radius: 5,
              fill: new Fill({ color: "red" }),
            }),
          }),
        }),
      ],
    });
    // eslint-disable-next-line
  }, []);

  return (
    <SensorsMapStyled>
      <div id="map" className="map"></div>
    </SensorsMapStyled>
  );
};

export default SensorsMap;
