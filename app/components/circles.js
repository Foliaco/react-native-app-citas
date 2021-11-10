import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, Alert } from 'react-native';
import {FaRegHandPaper} from 'react-icons/fa';
import {GiBarefoot,GiHairStrands,GiSaloonDoors} from 'react-icons/gi';

const Circles=({navigation})=>{

    const [on, setOn] = useState(false)

    const getPage=type=>{
        navigation.push('step2',{
            service:type
        });
    }


    return(
      <View style={styles.cont}>
          <TouchableOpacity style={[styles.label,{backgroundColor:'rgb(255,200,50)'}]} onPress={()=>getPage('Estilista')}>
                <Text style={styles.text}>Estilistas</Text>
                <GiSaloonDoors style={{fontSize:'1.5em'}} color='white'/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.label,{backgroundColor:'rgb(50,200,255)'}]} onPress={()=>getPage('Manicure')}>
                <Text style={styles.text}>Manicure</Text>
                <FaRegHandPaper style={{fontSize:'1.5em'}} color='white'/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.label,{backgroundColor:'rgb(200,255,50)'}]} onPress={()=>getPage('Pedicure')}>
                <Text style={styles.text}>Pedicure</Text>
                <GiBarefoot style={{fontSize:'1.5em'}} color='white'/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.label,{backgroundColor:'rgb(255,50,255)'}]} onPress={()=>getPage('Peluqueria')}>
                <Text style={styles.text}>Cabello</Text>
                <GiHairStrands style={{fontSize:'1.5em'}} color='white'/>
          </TouchableOpacity>
      </View>
    );
}

const styles=StyleSheet.create({
    cont:{
        width:'90%',
        padding:15,
        justifyContent:'center',
        alignItems:'center',
        margin:'auto',
        marginBottom:20,
        marginTop:70,
        flexDirection:'column'
    },
    label:{
        width:'95%',
        margin:'auto',
        borderRadius:50,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginBottom:30,
        padding:15
    },
    text:{
        color:'white',
        fontSize:'1em',
        fontWeight:'bold'
    }
})

export default Circles;