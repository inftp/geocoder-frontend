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
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  orig: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
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

    let origMarker: L.Marker | null;
    let setOrigMarker: any;
    [origMarker, setOrigMarker] = useState(null);

    let destMarker: L.Marker | null;
    let setDestMarker: any;
    [destMarker, setDestMarker] = useState(null);

    let route: L.Layer | null;
    let setRoute: any;
    [route, setRoute] = useState(null);


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
        if (JSON.stringify(dest) !== JSON.stringify(destProps)) {
          // TODO: Place dest marker
          routeChanged = true;
          setDest(destProps);
          if (destMarker) {
            map.removeLayer(destMarker);
          }
          if (destProps) {
            setDestMarker(L.marker(destProps).addTo(map));
          }
        }

        // If origin has changed
        if (JSON.stringify(orig) !== JSON.stringify(origProps)) {
          routeChanged = true;
          setOrig(origProps);
          if (origMarker) {
            map.removeLayer(origMarker);
          }
          if (origProps) {
            setOrigMarker(L.marker(origProps).addTo(map));
          }
        }

        // If both destination and origin exist and one of them has changed
        if (routeChanged && destProps.lng && destProps.lat && origProps.lng && origProps.lat) {
          // TODO: Draw route on map
          // TODO: Call handleRoute
        }

      }
    }, [
      lat,
      lng,
      zoom,
      map,
      setMap,
      dest,
      setDest,
      destProps,
      orig,
      setOrig,
      origProps,
      destMarker,
      setDestMarker,
      origMarker,
      setOrigMarker,
      route,
      setRoute,
    ]);


    return (
      <div id="map"></div>
    );
  };

LeafletMap.propTypes = LeafletMapPropTypes;
LeafletMap.defaultProps = LeafletMapDefaultProps;

export default LeafletMap;  