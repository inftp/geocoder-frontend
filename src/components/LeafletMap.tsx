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
  dest: {
    lat: null,
    lng: null,
  },
  orig: {
    lat: null,
    lng: null,
  },
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
        if (dest.lat !== destProps.lat || dest.lng !== destProps.lng) {
          // TODO: Place dest marker
          routeChanged = true;
          setDest(destProps);
        }

        // If origin has changed
        if (orig.lat !== origProps.lat || orig.lng !== origProps.lng) {
          // TODO: Place origin marker
          routeChanged = true;
          setOrig(origProps);
        }

        // If both destination and origin exist and one of them has changed
        if (routeChanged && destProps.lng && destProps.lat && origProps.lng && origProps.lat) {
          // TODO: Draw route on map
          // TODO: Call handleRoute
        }

      }
    }, [lat, lng, zoom, map, setMap, dest, setDest, destProps, orig, setOrig, origProps]);


    return (
      <div id="map"></div>
    );
  };

LeafletMap.propTypes = LeafletMapPropTypes;
LeafletMap.defaultProps = LeafletMapDefaultProps;

export default LeafletMap;  