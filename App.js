import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './components/Login';
import RegisterScreen from './components/Register';
import HomeScreen from './components/Home';
import ListResourcesScreen from './components/ListResources';
import Tiendas from './components/Tiendas';

class HomeScreens extends React.Component {
render() {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Home Screen</Text>
</View>
);
}
}

const AppNavigator = createStackNavigator({
Home: {
screen: HomeScreen
},
Register: {
screen: RegisterScreen
},
Login: {
screen: LoginScreen
},
ListaRecursos: {
screen: ListResourcesScreen
},
Tiendas: {
    screen: Tiendas
    }
});

export default createAppContainer(AppNavigator);