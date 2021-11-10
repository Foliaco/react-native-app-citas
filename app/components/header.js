import React,{useState} from 'react';
import {View,Text,TouchableOpacity, StyleSheet} from 'react-native'
import {AiFillBackward} from 'react-icons/ai'

const Header=({navigation,direction})=>{
    const [colors,setColors]=useState(200);
    const color=()=>{
        setColors(50)
        setTimeout(()=>{
            navigation.navigate(direction);
            setColors(200)
        },300)
    }

    return(
    <View style={styles.header}>
        <Text style={styles.text}>Citas With Salon</Text>
        <TouchableOpacity style={[styles.button,{backgroundColor:`rgb(255,${colors},50)`}]} onPress={color} >
            <AiFillBackward style={{color:'white',fontSize:'1em'}}/>
        </TouchableOpacity>
    </View>
    );
}
const styles=StyleSheet.create({
    header:{
        width:'100vw',
        padding:10,
        height:'10vh',
        marginBottom:20,
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
export default Header;