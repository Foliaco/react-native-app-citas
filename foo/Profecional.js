import React,{useState,useEffect} from 'react';
import data from '../data/profesionales.json';
import {View,TouchableOpacity,Text,StyleSheet,ScrollView,Animated} from 'react-native';
import {BsDice1,BsDice2,BsDice3,BsDice4,BsDice5,BsDice6} from 'react-icons/bs';
import DateCitas from './DateCitas'
const Profecional=(props)=>{
    
    const [up, setUp] = useState(new Animated.Value(1000));
    const [prof,setProf]=useState('');
    const style=StyleSheet.create({
        content:{
            height:'50vh',
            width:'80%',
            margin:'auto',
            borderWidth:'0.2px',
            borderColor:'rgba(0,0,0,0.2)',
            borderRadius:'4px',
            overflow:'hidden'
        },
        card:{
            width:'90%',
            margin:'auto',
            marginBottom:10,
            marginTop:10,
            borderRadius:'3px',
            padding:8,
            borderWidth:'0.2px',
            borderColor:'rgba(0,0,0,0.2)',
            borderRadius:'4px'
        },
        date:{
            width:'80vw',
            margin:'auto',
            left:0,
            top:0,
            right:0,
            height:'100%',
            backgroundColor:'white',
            borderWidth:0.2,
            borderColor:'rgba(0,0,0,0.2)',
            left:up,
            position:'absolute',
            overflow:'hidden',
            borderRadius:'5px'
        },
        step:{
            padding:10,
            borderBottomWidth:0.2,
            borderBottomColor:'rgba(0,40,255,0.9)',
            fontSize:'0.7em',
            alignItems:'center'
        },
        cancel:{
            width:'30px',
            height:'30px',
            backgroundColor:'rgba(255,0,40,0.9)',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:'100px'
        },
        cancelText:{
            color:'white',
            fontSize:'0.9em',
            display:'inline'
        }
    })

    const showCard=()=>{
        Animated.timing(up,{
                toValue:0,
                duration:300,
                useNativeDriver:false

            }).start()
            
        }
    const back=()=>{
        Animated.timing(up,{
            toValue:1000,
            duration:300,
            useNativeDriver:false
        }).start()
    }

    return(
    <View>
      <ScrollView style={style.content}>
          <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',paddingRight:6}}>
          <Text style={style.step}><BsDice1 color="rgba(0,40,255,0.9)" style={{fontSize:'2em'}} /> - Elija a Su Profesional</Text>
          <TouchableOpacity style={style.cancel}>
          </TouchableOpacity>
          </View>
        {
            data.map((e,i)=>(
                <TouchableOpacity style={style.card} key={i} onPress={()=>{
                    showCard(e.id);
                    setProf({name:e.name,id:e.id});
                    }}>
                    <Text>{e.name} - <b>{e.prof}</b></Text>
                </TouchableOpacity>
            ))
        }
      </ScrollView>
      <Animated.View style={style.date} id='fecha'>
          <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',paddingRight:6}}>
          <Text style={style.step}><BsDice2 color="rgba(0,40,255,0.9)" style={{fontSize:'2em'}} /> - Consulte sus horarios libres</Text>
          <TouchableOpacity style={style.cancel} onPress={()=>back()}>
          </TouchableOpacity>
          </View>
          <DateCitas prof={prof}/>
      </Animated.View>
    </View>
    );
}

export default Profecional;
