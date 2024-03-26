import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Api_Key from '../utils/APIKeys';
const containerStyle = {
  width: '100%',
  height: '100%'
};

function MyComponent(props) {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: Api_Key.googleMapsApiKey,
  })

  const latitude = props.latitude;
  const longitude = props.longitude;
  const center = {
    lat: latitude,
    lng: longitude
  };

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)