import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text,Modal, TouchableOpacity, ScrollView} from 'react-native';
import {FaRegHandPaper} from 'react-icons/fa';
import {GiBarefoot,GiHairStrands,GiSaloonDoors} from 'react-icons/gi';
import data from '../../data/services.json';

const Circles=({navigation})=>{

    const [on, setOn] = useState(false)
    const [service,setService]=useState([])
    const [type,setType]=useState(null)
    const getPage=type1=>{
        setType(type1)
        setOn(true);
        data.forEach(e=>{
            if(e.area===type1){
                setService(e.services);
            }
        })
       
        console.log(service)
    }
    const next=(name,price)=>{
        setOn(false)
        navigation.push('step2',{
                type,
                name,
                price
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
          <Modal visible={on} transparent={true} animationType={'fade'}>
                <View style={styles.back}>
                    <ScrollView style={styles.front}>
                        {
                            service.map((e,i)=>(
                                <TouchableOpacity 
                                key={i} 
                                style={{width:"100%",alignItems:'center',justifyContent:'space-between',flexDirection:'row',borderBottomColor:'rgba(0,0,0,0.9)',borderBottomWidth:'0.3px',padding:10}}
                                onPress={()=>{
                                        next(e.name,e.price)
                                    }}>
                                    <Text style={{fontSize:'1em'}}>{e.name}</Text>
                                    <Text style={{fontSize:'1em',fontWeight:'bold'}}>${e.price}</Text>
                                </TouchableOpacity>
                            ))
                            }
                    </ScrollView>
                </View>
          </Modal>
      </View>
    );
}

const styles=StyleSheet.create({
    back:{
        backgroundColor:'rgba(0,0,0,0.6)',
        position:'relative',
        width:'100vw',
        height:'100vh',
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden'
    },
    front:{
        maxHeight:'60vh',
        width:'80vw',
        margin:'auto',
        borderRadius:'3px',
        backgroundColor:'white'
    },
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