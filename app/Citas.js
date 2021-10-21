import React, { useState } from 'react';
import { Text, View,StyleSheet, Animated, TouchableOpacity } from 'react-native';
import {AiFillBackward} from 'react-icons/ai'
import { ScrollView } from 'react-native-gesture-handler';
import Circles from './components/circles';
const Citas=({navigation})=>{

    const [colors,setColors]=useState(200);
    const color=()=>{
        setColors(50)
        setTimeout(()=>{
            navigation.navigate('home');
            setColors(200)
        },300)
    }
 

    return(
      <View>
        <View style={styles.header}>
            <Text style={styles.text}>Citas With Salon</Text>
            <TouchableOpacity style={[styles.button,{backgroundColor:`rgb(255,${colors},50)`}]} onPress={color} >
                <AiFillBackward style={{color:'white',fontSize:'1em'}}/>
            </TouchableOpacity>

        </View>
        <ScrollView>
            <Circles color="rgb(255,200,50)" data={[{id:'1',option:'Local'}]} dec={"Elige el tipo de servicio :)"} pos={"row"} />
            <Circles color="rgb(50,200,255)" data={[{id:'2',option:'Domicilos'}]} dec={"Elige a su respectivo especialista"} pos={"row-reverse"} />

        </ScrollView>
      </View>
    );
}

const styles=StyleSheet.create({
    header:{
        width:'100vw',
        padding:10,
        backgroundColor:'rgb(255,50,200)',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:'1em'
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:'100px',
        transition:'200ms'
    }
})
export default Citas;