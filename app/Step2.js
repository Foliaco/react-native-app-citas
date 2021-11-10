import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {AiFillShop,AiFillHome} from 'react-icons/ai';
import Header from './components/header';
import Footer from './components/Footer';

const Step2=({route,navigation})=>{
    console.log("stpe2",route)

    const getPage=(pos)=>{
        navigation.push('step3',{
            service:route.params,
            pos:pos
        })
    }

    return(
      <View>
          <View>
          <Header navigation={navigation} direction='citas'/>
          <Text style={styles.title}>Donde quiere su servicio de {route.params.type}?</Text>
          <View style={styles.content}>
                <TouchableOpacity style={[styles.card,{backgroundColor:'rgb(50,200,255)'}]} onPress={()=>{getPage('local')}}>
                    <AiFillShop style={{color:'white',fontSize:'6em'}}/>
                    <Text style={{color:'white',fontSize:'1.5em'}}>Local</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.card,{backgroundColor:'rgb(255,200,50)'}]} onPress={()=>{getPage('domicilio')}}>
                    <AiFillHome style={{color:'white',fontSize:'6em'}}/>
                    <Text style={{color:'white',fontSize:'1.5em'}}>Domicilio</Text>
                </TouchableOpacity>
          </View>
          <View style={[styles.content,{flexDirection:'column',justifyContent:'flex-start',marginBottom:10}]}>
                <View style={{borderBottomColor:'rgb(50,200,255)',backgroundColor:'white',padding:5,borderBottomWidth:'0.4px',marginBottom:20}}>
                    <Text style={{color:'rgb(50,200,255)',fontSize:'1.1em',fontWeight:'bold'}}>Local</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </View>
                <View style={{borderBottomColor:'rgb(255,200,50)',backgroundColor:'white',padding:5,borderBottomWidth:'0.4px',marginBottom:20}}>
                    <Text style={{color:'rgb(255,200,50)',fontSize:'1.1em',fontWeight:'bold'}}>Domicilio</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </View>
          </View>
          <Footer navigation={navigation} pos={'sticky'}/>
          </View>
      </View>
    );
}

const styles=StyleSheet.create({
    content:{
        width:'90vw',
        padding:15,
        justifyContent:'space-between',
        alignItems:'center',
        margin:'auto',
        marginBottom:10,
        marginTop:10,
        flexDirection:'row'
    },
    title:{
        textAlign:'center',
        fontSize:'1.2em',
        fontWeight:'bold',
        marginTop:10,
        color:'rgb(255,50,200)'
    },
    card:{
        width:'44%',
        height:'20vh',
        borderRadius:'3px',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Step2;