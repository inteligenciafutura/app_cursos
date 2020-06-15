import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 6.2257614;
const LONGITUDE = -75.5987237;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Tiendas extends React.Component {
constructor(props) {
super(props);

this.state = {
region: {
latitude: LATITUDE,
longitude: LONGITUDE,
latitudeDelta: LATITUDE_DELTA,
longitudeDelta: LONGITUDE_DELTA,
},
markers:[]
}
this.Tiendas()
}

Tiendas = () =>{
   
fetch('http://192.168.0.9/pruebas/tiendas.php',{
    method: 'GET',
    cache: 'no-cache',
    mode: 'cors',
    headers: {
    'Accept': 'aplication/json',
    'Content-Type': 'application/json'
    },
    })
    .then((response) => response.json())
    .then((responseJson) => {
    //alert( JSON.stringify(responseJson))
    this.setState({markers:responseJson})
    })
    .catch((error) => {
    console.error(error);
    });
       
}

render() {
return (
<View style={styles.container}>

<MapView
provider={this.props.provider}
style={styles.map}
scrollEnabled={true}
zoomEnabled={true}
pitchEnabled={false}
rotateEnabled={false}
initialRegion={this.state.region}
showsUserLocation={true}
followsUserLocation={true}
>

{this.state.markers.map(marker => (
<Marker
coordinate={{
 latitude : parseFloat(marker.latitud),
 longitude : parseFloat(marker.longitud)
}}
title={marker.nombre}
onPress={()=> 
/* 1. Navigate to the Details route with params */
this.props.navigation.navigate('Ruta', {
    latitudeDestino: parseFloat(marker.latitud),
    longitudeDestino: parseFloat(marker.longitud),
    })
}
/>
))}

</MapView>

</View>
);
}
}

Tiendas.propTypes = {
provider: ProviderPropType,
};

const styles = StyleSheet.create({
container: {
...StyleSheet.absoluteFillObject,
justifyContent: 'flex-end',
alignItems: 'center',
},
scrollview: {
alignItems: 'center',
paddingVertical: 40,
},
map: {
height: '100%',
width: '100%',
},
});

export default Tiendas;