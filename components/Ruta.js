import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 6.2199099;
const LONGITUDE = -75.5879654;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyBBCGA-En7tf3H-HSh--XEOxEZWI64rBxo';

class Example extends Component {

constructor(props) {
super(props);

// AirBnB's Office, and Apple Park
this.state = {

};

this.mapView = null;
}

onMapPress = (e) => {

}

render() {
  const { params } = this.props.navigation.state;
  const latitudeDestino = params ? params.latitudeDestino : null;
  const longitudeDestino = params ? params.longitudeDestino : null;

const origin = {latitude: 6.2329847, longitude: -75.6045382};
const destination = {latitude: parseFloat(latitudeDestino), longitude: parseFloat(longitudeDestino)};

const coordinates=[
  {
  latitude: 6.2329847,
  longitude: -75.6045382,
  },
  {
  latitude: parseFloat(latitudeDestino),
  longitude: parseFloat(longitudeDestino),
  },
  ]

return (
<MapView
initialRegion={{
latitude: LATITUDE,
longitude: LONGITUDE,
latitudeDelta: LATITUDE_DELTA,
longitudeDelta: LONGITUDE_DELTA,
}}
style={StyleSheet.absoluteFill}
ref={c => this.mapView = c}
onPress={this.onMapPress}
>
{coordinates.map((coordinate, index) =>
<MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
)}
{(coordinates.length >= 2) && (
    <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
  />
)}
</MapView>
);
}
}

export default Example;