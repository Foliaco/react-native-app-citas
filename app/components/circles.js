import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity } from 'react-native';

const Circles=({color,dec,pos,data})=>{

    const [on, setOn] = useState(false)


    return(
      <View style={[styles.cont,{flexDirection:pos,borderBottomColor:color}]}>
            <View style={[styles.circle,{backgroundColor:color}]} onPress={()=>setOn(true)}>
            </View>
            <View style={styles.step}>
            <Text style={styles.text}>{dec}</Text>
            </View>
            <Modal visible={on}>
                <View style={styles.modal}>
                    {data.map((e,i)=>(
                        <TouchableOpacity key={i} style={{backgroundColor:color,margin:'auto',marginTop:10,borderRadius:'3px'}}>
                        <Text>{e.option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Modal>
      </View>
    );
}

const styles=StyleSheet.create({
    cont:{
        width:'90%',
        padding:15,
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:'0.3px',
        margin:'auto',
        marginBottom:20
    },
    circle:{
        borderRadius:'100px',
        height:'20vw',
        width:'20vw',
    },
    step:{
        width:"50vw",
        alignItems:'center'
    },
    text:{
        fontSize:'1em',
        color:'rgba(0,0,0.8)'
    },
    back:{
        width:'100vw',
        height:'100vh',
        backgroundColor:'rgba(0,0,0,0.2)',
        justifyContent:'center',
        alignItems:'center'
    },
    modal:{
        justifyContent:'center',
        alignItems:'center',
        width:'80vw',
        padding:30,
        backgroundColor:'white',
        borderRadius:'4px'
    }
})

export default Circles;