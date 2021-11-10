import React,{useContext,useEffect} from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native';
import PosContext from '../hooks/position/posContext';
import CedesContext from '../hooks/cedes/cedesContext';
import ProfeContext from '../hooks/profecional/ProfeContex';

const Home=({navigation,route})=>{
    const {resetPos}=useContext(PosContext)
    const {resetCedes} = useContext(CedesContext)
    const {resetProfe} = useContext(ProfeContext)
    useEffect(()=>{
        resetCedes();
        resetPos();
        resetProfe();
    },[])
    console.log(route)
    return(
      <View>
          <View style={styles.header}>
              <Image source={require('../assets/1.jpg')} style={styles.image}/>
              <View style={{backgroundColor:'rgba(255,20,200,0.5)',position:'absolute',width:'100%',height:'100%',top:0,left:0,elevation:2}}></View>
          </View>
              <Text style={styles.title}>Beatifull</Text>
              <Text style={styles.text}>Salon</Text>
              <TouchableOpacity style={styles.button}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:'1em',textAlign:'center'}} onPress={()=>navigation.navigate("citas")} >Get Started</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button,{backgroundColor:'rgb(255,50,200)'}]}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:'1em',textAlign:'center'}}>My Points</Text>
              </TouchableOpacity>
      </View>
    );
}

const styles=StyleSheet.create({
    header:{
        width:"100vw",
        height:'65vh',
        margin:'20px auto',
        borderBottomRightRadius:'30%',
        borderBottomLeftRadius:'30%',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        overflow:'hidden'
    },
    title:{
        fontSize:'1.6em',
        textAlign:'center',
        color:'rgb(255,200,50)',
        fontWeight:'bold'
    },
    text:{
        fontSize:'0.8em',
        textAlign:'center',
        color:'rgb(255,50,200)',
        fontWeight:'bold',
        marginBottom:20
    }
    ,
    image:{
        position:'absolute',
        width:'100%',
        height:'100%',
        elevation:1
    },
    button:{
        width:'80%',
        backgroundColor:'rgb(255,200,50)',
        borderRadius:'50px',
        padding:'10px',
        margin:'auto',
        marginBottom:20
    }
})

export default Home