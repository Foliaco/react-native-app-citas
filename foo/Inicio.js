import React from 'react';
import {Text,StyleSheet,TouchableOpacity,Image,View} from 'react-native';

const Inicio=({navigation})=>{

    return(
        <View>
        <View style={styles.cont} className='viewImages' >
        <Image style={styles.img} source={require('../assets/javascrip.png')} />
        </View>


        <TouchableOpacity style={styles.butt} onPress={()=> navigation.navigate('citas')}>
        <Text style={styles.text}>Reservar Cita</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.butt} >
        <Text style={styles.text}>Consultar Puntos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.butt} >
        <Text style={styles.text}>Whatsapp</Text>
        </TouchableOpacity>

        </View>
    );
}


const styles=StyleSheet.create({
    butt:{
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        width:'70%',
        backgroundColor:'rgba(0,40,255,0.9)',
        margin:'auto',
        marginTop:10,
        marginBottom:20,
        padding:10,
        borderRadius:4
    },
    text:{
        color:'white',
        fontSize:16,
        lineHeight:21,
        fontWeight:'bold'
    },
    cont:{
        width:'70vw',
        height:'70vw',
        borderRadius:4,
        margin:'auto',
        marginTop:10,
        overflow:'hidden'
    },
    img:{
        width:'100%',
        height:'100%',
        marginBottom:20
    }
})

export default Inicio;