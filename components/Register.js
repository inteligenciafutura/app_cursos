import React from 'react';
import { AppLoading } from 'expo';
import { Container, Button, Header, Item, Input, Footer, Content, Form, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      correo:'',
      clave:'',
      nombreCompleto:''
    };
  }

  Registro = () =>{
 const { correo }  = this.state ;
 const { clave }  = this.state ;
 const { nombreCompleto }  = this.state ;

    fetch('http://192.168.0.9/pruebas/registro.php',{
method: 'POST',
header:{
'Accept' : 'application/json',
'Content-type' : 'application/json'
},
body:JSON.stringify({
correo : correo,
clave : clave,
nombreCompleto : nombreCompleto
})
})
.then( (respuesta) => respuesta.json() )
.then((responseJson) =>{
alert(responseJson);
})
.catch((error)=>{
console.log(error);
})
    
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
              <Input placeholder="Nombre Completo" onChangeText={nombreCompleto => this.setState({nombreCompleto})} />
            </Item>
            <Item>
              <Input placeholder="Correo" onChangeText={correo => this.setState({correo})} />
            </Item>
            <Item last>
              <Input placeholder="Password" onChangeText={clave => this.setState({clave})} />
            </Item>
            <Button onPress={this.Registro}>
              <Text>Registro</Text>
            </Button>
          </Form>
        </Content>
        <Footer />
      </Container>
    );
  }
}