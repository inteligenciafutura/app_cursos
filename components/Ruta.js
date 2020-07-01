import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { View } from 'native-base';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 6.2199099;
const LONGITUDE = -75.5879654;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'Digita tu clave aquí';

class Example extends Component {

constructor(props) {
super(props);

// AirBnB's Office, and Apple Park
this.state = {
distancia:0,
duracion:0
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
    strokeWidth={3}
    strokeColor="hotpink"
    apikey={GOOGLE_MAPS_APIKEY}
    onReady={result => {
      this.setState({distancia:result.distance})
      this.setState({duracion:result.duration})
      console.log(`Distance: ${result.distance} km`)
      console.log(`Duration: ${result.duration} min.`) 
    }}
  />
)}
<View>
  <Text>La distancia es de {this.state.distancia}</Text>
  <Text>El tiempo es de {this.state.duracion}</Text>
</View>
</MapView>
);
}
}

export default Example;