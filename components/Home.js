import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'

export default class Aboutscreen extends Component {
render() {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Si ya estas registrado haga clic en login</Text>

<Button
  onPress={() => this.props.navigation.navigate('Login')}
  title="Login"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

<Text></Text>

<Text>Si no estas registrado haga clic en registrar</Text>
<Button
  onPress={() => this.props.navigation.navigate('Register')}
  title="Registro"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

</View>
)
}
}