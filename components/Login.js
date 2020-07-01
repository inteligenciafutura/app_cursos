import React from 'react';
import { AppLoading } from 'expo';
import { Container, Button, Header, Item, Input, Footer, Content, Form, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage, Alert } from 'react-native';

import firebase from '../database/firebaseDb';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      email:'',
      password:''
    };
  }

  
  loginUser = (email, password) =>{
    try {
      if(this.state.email.length < 6){
        alert("Debe ingresar el correo")
        return;
      }
      if(this.state.password.length < 6){
        alert("Debe ingresar la contraseña")
        return;
      }
      firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
        //console.log(user)
        alert( JSON.stringify(user))
      })
      this.props.navigation.navigate('Tiendas')
    } catch (error) {
     console.log(error.toString())
    }
   }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
        <Container>
        <Header />
        <Content padder>
        <Form>
            <Item>
              <Input placeholder="Username" onChangeText={email => this.setState({email})} />
            </Item>
            <Item last>
              <Input placeholder="Password" onChangeText={password => this.setState({password})} />
            </Item>
            <Button onPress={()=> this.loginUser(this.state.email, this.state.password)}>
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
        <Footer />
      </Container>
    );
  }
}