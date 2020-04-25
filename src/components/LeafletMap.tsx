import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import InferProps from '../types/InferProps';

const LeafletMapPropTypes = {
  init: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  dest: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
  orig: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
  handleRoute: PropTypes.func,
};

const LeafletMapDefaultProps = {
  dest: null,
  orig: null,
  handleRoute: () => null,
};

const LeafletMap = (
    props: InferProps<typeof LeafletMapPropTypes, typeof LeafletMapDefaultProps>
  ) => {
    const {init: {lat, lng, zoom}, origProps, destProps} = props;


    let map: L.Map | null;
    let setMap: any;
    [map, setMap] = useState(null);

    const [orig, setOrig] = useState(origProps);
    const [dest, setDest] = useState(destProps);

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
      } else {
        // Methods that require map to be initialised

        let routeChanged = false;
        // If destination has changed
        // TODO: Place dest marker

        // If origin has changed
        // TODO: Place origin marker

        // If both destination and origin exist and one of them has changed
        // Draw route on map
        // Call handleRoute

      }
    }, [lat, lng, zoom, map, setMap]);


    return (
      <div id="map"></div>
    );
  };

LeafletMap.propTypes = LeafletMapPropTypes;
LeafletMap.defaultProps = LeafletMapDefaultProps;

export default LeafletMap;  