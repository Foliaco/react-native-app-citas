import React from 'react'
import {Button, Text, View} from 'react-native';
import Footer from './components/Footer';
import Header from './components/header';

const Step6=({navigation,route})=>{
    //console.log(route,"6")
      return (
        <View>

        <Header navigation={navigation} direction='home' />
        <View style={{width:'95%',padding:10,margin:'auto',marginBottom:0,backgroundColor:'rgb(255,200,50)'}}>
          <View style={{width:'95%',padding:5,margin:'auto',backgroundColor:'rgba(255,50,200,0.3)'}}>
            <Text style={{color:'white',marginBottom:3,fontWeight:'bold',fontSize:'1.5em'}}>Orden Salon</Text>
            <Text style={{color:'white',marginBottom:3,fontSize:'1em'}}>Servcio de : some Service</Text>
            <Text style={{color:'white',marginBottom:3,fontSize:'1em'}}>Cliente : some Cliente</Text>
            <Text style={{color:'white',marginBottom:3,fontSize:'1em'}}>Fecha de Pedido: {Date.now()}</Text>
            <Text style={{color:'white',marginBottom:3,fontSize:'1em'}}>Ubicacion(Local): Exito-Castellana</Text> 
          </View>
        </View>
        <View style={{width:'90%',margin:'auto',backgroundColor:'white',padding:5,borderBottomLeftRadius:5,borderBottomRightRadius:5}}>
          <View style={{width:'90%',margin:'auto',marginBottom:20,padding:5}}>
              <Text style={{marginBottom:3,fontSize:'1em'}}>Detalles del pedido:</Text>
              <Text style={{marginBottom:3,fontSize:'1em'}}>Area : Cabello - Peluqueria</Text>
              <Text style={{marginBottom:3,fontSize:'1em'}}>Servicio especifico: Teñir Cabello</Text>
              <Text style={{marginBottom:3,fontSize:'1em'}}>Precio : $9999</Text>
              <Text style={{marginBottom:3,fontSize:'1em'}}>Profecional encargado : Some Profecional</Text>
              <Text style={{marginBottom:20,fontSize:'1em'}}>Fecha de la Cita : 2022-01-22</Text>
          </View>

          <Button
            title="Completar Pedido"
            color='rgb(255,50,200)'
          />
        </View>
        <Footer pos='fixed' navigation={navigation}/>
        </View>
      )
  }

  export default Step6;