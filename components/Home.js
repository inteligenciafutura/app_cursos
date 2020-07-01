import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

import firebase from '../database/firebaseDb';

export default class Aboutscreen extends Component {
render() {
return (

<Content>

 <Card>
    <CardItem header>
      <Text>Si ya estas registrado haga clic en login</Text>
    </CardItem>

    <CardItem>
    <Body>
    <Button
    onPress={() => this.props.navigation.navigate('Login')}
    title="Login"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
    />
    </Body>
    </CardItem>
 </Card>

 <Card>
    <CardItem header>
      <Text>Si no estas registrado haga clic en registrar</Text>
    </CardItem>

    <CardItem>
    <Body>
    <Button
  onPress={() => this.props.navigation.navigate('Register')}
  title="Registro"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </Body>
    </CardItem>
 </Card>

 <Card>
    <CardItem header>
      <Text>Tiendas</Text>
    </CardItem>

    <CardItem>
    <Body>
    <Button
  onPress={() => this.props.navigation.navigate('Tiendas')}
  title="Ver"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </Body>
    </CardItem>
 </Card>

 <Card>
    <CardItem header>
      <Text>Carrito de compras</Text>
    </CardItem>

    <CardItem>
    <Body>
    <Button
  onPress={() => this.props.navigation.navigate('Carrito')}
  title="Ver"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </Body>
    </CardItem>
 </Card>

</Content>

)
}
}