import React from 'react';
import {TouchableOpacity,StyleSheet,View} from 'react-native';
import {BsWhatsapp,BsFacebook} from 'react-icons/bs';
import {FiMail} from 'react-icons/fi'
const Footer=(props)=>{

    return(
      <View style={styles.flex}>
            <TouchableOpacity style={styles.whatCont}>
                <BsWhatsapp color="white" style={styles.face}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.faceCont}>
                <BsFacebook style={styles.face} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mailCont}>
                <FiMail color="white" style={styles.face}/>
            </TouchableOpacity>
      </View>
    );
}

const styles=StyleSheet.create({
    flex:{
        width:'100%',
        borderTopWidth:'0.2px',
        borderColor:'rgba(0,0,0,0.2)',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:15,
        position:'absolute',
        bottom:0
    },
    face:{
        color:'white',
        width:15,
        height:15
    },
    faceCont:{
        padding:5,
        backgroundColor:'rgba(0,20,255,0.9)',
        borderRadius:100
    },
    whatCont:{
        padding:5,
        backgroundColor:'rgba(0,255,40,0.9)'
    },
    mailCont:{
        padding:5,
        backgroundColor:'rgba(255,0,30,0.9)'
    }

})

export default Footer;