import React from 'react';
import { AppLoading } from 'expo';
import { Container, Button, Header, Item, Input, Footer, Content, Form, Text, Card, CardItem, Left, Thumbnail, Body, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage, Alert, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.Cursos()
    this.state = {
      isReady: false,
      correo:'',
      clave:'',
      listadoCursos:[]
    };
  }

  Cursos = () =>{

    fetch('http://192.168.0.9/pruebas/cursos.php',{
method: 'GET',
header:{
'Accept' : 'application/json',
'Content-type' : 'application/json'
}
})
.then( (respuesta) => respuesta.json() )
.then((responseJson) =>{
this.setState({listadoCursos:responseJson})
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
       <Text>Lista de cursos</Text>

       {this.state.listadoCursos.map(item => ( 
         <Card style={{flex: 0}}>
         <CardItem>
           <Left>
             <Thumbnail source={{uri: item.url}} />
             <Body>
       <Text>{item.nombre_curso}</Text>
               <Text note>{item.fecha_hora}</Text>
             </Body>
           </Left>
         </CardItem>
         <CardItem>
           <Body>
             <Image source={{uri: item.url}} style={{height: 200, width: 200, flex: 1}}/>
             <Text>
             {item.descripcion}
             </Text>
           </Body>
         </CardItem>
         <CardItem>
           <Left>
             <Button transparent textStyle={{color: '#87838B'}}>
               <Icon name="logo-github" />
               <Text>1,926 stars</Text>
             </Button>
           </Left>
         </CardItem>
       </Card>
       ))}

        </Content>
        <Footer />
      </Container>
    );
  }
}