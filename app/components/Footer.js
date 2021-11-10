import React from 'react';
import { AiOutlineHome,AiFillPlusCircle,AiFillProfile } from 'react-icons/ai';
import { View, Text, TouchableOpacity } from 'react-native';

const Footer=({navigation,pos})=>{

    return(
      <View style={{width:"95%",display:'flex',flexDirection:'row',justifyContent: 'space-around',alignItems: 'center',borderTopLeftRadius:50,borderTopRightRadius:50,margin:"auto",backgroundColor:"rgb(255,50,200)",padding:20,position:pos,bottom:0,left:0,right: 0}}>
          <TouchableOpacity style={{display:'flex',alignItems: 'center',}}
            onPress={()=>{
                navigation.navigate("home")
            }}>
              <AiOutlineHome color="white" style={{fontSize:'1.3em'}}/>
              <Text style={{color:"white",fontSize:'0.9em'}}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{display:'flex',alignItems: 'center',}}>
              <AiFillProfile color="white" style={{fontSize:'1.3em'}}/>
              <Text style={{color:"white",fontSize:'0.9em'}}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{display:'flex',alignItems: 'center',}}>
              <AiFillPlusCircle color="white" style={{fontSize:'1.3em'}}/>
              <Text style={{color:"white",fontSize:'0.9em'}}>Puntos</Text>
          </TouchableOpacity>
      </View>
    );
}
export default Footer;