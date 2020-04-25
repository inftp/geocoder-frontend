import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import InferProps from '../types/InferProps';

const LeafletMapPropTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
}

const LeafletMap = (
    {lat, lng, zoom}: InferProps<typeof LeafletMapPropTypes>
  ) => {

    let map: L.Map | null;
    let setMap: any;
    [map, setMap] = useState(null);

    useEffect(() => {
      // If map not initialised, create
      if (!map) {
        setMap(L.map('map', {
          center: [lat, lng],
          zoom,
          layers: [
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }),
          ],
          zoomControl: false,
        }));
      }
    }, [lat, lng, zoom, map, setMap]);


    return (
      <div id="map"></div>
    );
  };

LeafletMap.propTypes = LeafletMapPropTypes;

export default LeafletMap;  