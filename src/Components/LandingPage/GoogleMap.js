import GoogleMapReact from "google-map-react";
// import AnyReactComponent from "./GoogleMapMarker";
import React from "react";
const AnyReactComponent = ({ text }) => <div className='test'>{text}</div>;

class SimpleMap extends React.Component {
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        yesIWantToUseGoogleMapApiInternals>
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={"Kreyser Avrora"}
        />
      </GoogleMapReact>
    );
  }
}
export default SimpleMap;
