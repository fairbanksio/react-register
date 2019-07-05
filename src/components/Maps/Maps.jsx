import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


const CustomMap = withScriptjs(
  withGoogleMap(props => (

    <GoogleMap
      defaultZoom={props.mapConfig.defaultZoom}
      defaultCenter={{ lat: props.mapConfig.mapLat, lng: props.mapConfig.mapLon }}
      defaultOptions={props.mapConfig.defaultOptions}
    >
      <Marker position={{ lat: props.mapConfig.markerLat, lng: props.mapConfig.markerLon }} />
    </GoogleMap>
  ))
);

export class GoogleMaps extends Component {
  render() {
    return (
      <CustomMap
        googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + this.props.mapConfig.apiKey}
        loadingElement={<div style={{ height: `80%` }} />}
        containerElement={<div style={{ height: `80vh` }} />}
        mapElement={<div style={{ height: `80%` }} />}
        mapConfig={this.props.mapConfig}
      />
    );
  }
}

export default GoogleMaps;
