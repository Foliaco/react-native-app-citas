import React,{useContext} from 'react'
import {Button, Text, View} from 'react-native';
import Footer from './components/Footer';
import Header from './components/header';

//contexts
import ProfeContext from '../hooks/profecional/ProfeContex';
import CedesContext from '../hooks/cedes/cedesContext';


const dat=new Date();
const day=dat.getDate();
const mont=dat.getMonth()+1;
const year=dat.getFullYear();
const fecha=`${year}-${mont}-${day}`;
const h=dat.getHours()+1;
const min=dat.getMinutes();

const Step6=({navigation,route})=>{

      const {profe} = useContext(ProfeContext)
      const {ubic}=useContext(CedesContext);

      console.log(profe,ubic)
      console.log("context")
      console.log(route.params,"6")
      return (
        <View>

        <Header navigation={navigation} direction='home' />
        <View style={{width:'95%',padding:10,paddingTop:30,paddingBottom:20,margin:'auto',marginTop:20,marginBottom:0,backgroundColor:'white',borderColor:'rgb(255,200,50)',borderWidth:0.5}}>
          <View style={{width:'95%',padding:5,margin:'auto'}}>
            <Text style={{color:'rgba(255,200,50,0.8)',marginBottom:3,fontWeight:'bold',fontSize:'1.5em'}}>Orden Salon</Text>
            <Text style={{color:'rgba(0,0,0,0.8)',marginBottom:3,fontSize:'.95em'}}>Servcio de : {profe.prof}</Text>
            <Text style={{color:'rgba(0,0,0,0.8)',marginBottom:3,fontSize:'.95em'}}>Cliente : some Cliente</Text>
            <Text style={{color:'rgba(0,0,0,0.8)',marginBottom:3,fontSize:'.95em'}}>Fecha de Pedido: {fecha}</Text>
            <Text style={{color:'rgba(0,0,0,0.8)',marginBottom:3,fontSize:'.95em'}}>Ubicacion({route.params.time[1].type.pos}): {ubic.cede}</Text> 
          </View>
        <View style={{width:'100%',margin:'auto',padding:5,borderBottomLeftRadius:5,borderBottomRightRadius:5, borderTopWidth:0.4,borderTopColor:'rgb(255,200,50)'}}>
          <View style={{width:'100%',margin:'auto',marginBottom:20,padding:5}}>
              <Text style={{color:'rgba(0,0,0,0.8)',marginBottom:3,fontSize:'1em'}}>Detalles del pedido:</Text>
              <Text style={{color:'rgba(0,0,0,0.8)',marginBottom:3,fontSize:'1em'}}>Servicio especifico: {route.params.time[1].type.service.name}</Text>
              <Text style={{color:'rgba(0,0,0,0.8)',marginBottom:3,fontSize:'1em'}}>Precio : ${route.params.time[1].type.service.price}</Text>
              <Text style={{color:'rgba(0,0,0,0.8)',marginBottom:3,fontSize:'1em'}}>Profecional encargado : {profe.name}</Text>
              <Text style={{color:'rgba(0,0,0,0.8)',marginBottom:20,fontSize:'1em'}}>Fecha de la Cita : {route.params.time[0].fecha}</Text>
              <Text style={{color:'rgba(0,0,0,0.8)',marginBottom:20,fontSize:'1em'}}>Hora de la Cita : {route.params.time[0].hour}</Text>

          </View>

          <Button
            title="Completar Pedido"
            color='rgb(255,200,50)'
          />
        </View>
        </View>
        <Footer pos='fixed' navigation={navigation}/>
        </View>
      )
  }

  export default Step6;