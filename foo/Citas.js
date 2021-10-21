import React,{useState} from 'react';
import {View,StyleSheet,Text,TouchableOpacity,Modal,TextInput} from 'react-native';
import {BiHome,BiStoreAlt} from 'react-icons/bi';
import {BiHome} from 'react-icons/bi'
import Profecional from './Profecional'

const Citas=({navigation})=>{

    const [visible, setVisible] = useState(false)
    const [desc,setDesc]=useState("");

    const click=type=>{
        setVisible(true)
    }

    return(

    <View style={{marginBottom:50}}>
      <View style={style.cont}>
            <TouchableOpacity style={style.left} onPress={()=>click()}>
                <BiHome color="white" style={{fontSize:50}}/>
                <Text>Domicilio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.right} onPress={()=>click2()}>
                <BiStoreAlt color="white" style={{fontSize:50}} />
                <Text>Local</Text>
            </TouchableOpacity>
            <Modal 
                visible={visible}
                transparent={true}
               >
                <View style={style.back}>

                <View style={style.modal}>

                    <Text>Ubicanos para tu Domicilio{"\n"}<BiHome color="rgba(0,40,255,0.9)" style={{fontSize:'1.1em'}}/></Text>

                    <View>
                        <TextInput 
                            placeholder="Descripcion del lugar"
                            onChangeText={(e)=>{
                                        setDesc(e);
                                        console.log(text);
                                    }}
                            
                            value={desc}
                        />
                    </View>
                    
                </View>

                </View>
            </Modal>
      </View>
            <Profecional/>
    </View>
    );
}
const style=StyleSheet.create({
    cont:{
        width:'80%',
        margin:'auto',
        marginTop:20,
        marginBottom:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10
    },
    left:{
        padding:10,
        backgroundColor:`rgba(0,40,255,0.9)`,
        borderRadius:'5px',
        justifyContent:'center',
        alignItems:'center'
    },
    right:{
        padding:10,
        backgroundColor:`rgba(0,40,255,0.9)`,
        borderRadius:'5px',
        justifyContent:'center',
        alignItems:'center'
    },
    modal:{
        width:'80vw',
        margin:'auto',
        height:'80vw',
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        padding:20,
        backgroundColor:'white',
        borderWidth:0.5,
        borderColor:'rgba(0,0,0,0.5)',
        borderRadius:'4px'
    },
    back:{
        backgroundColor:'rgba(0,0,0,0.2)',
        width:'100vw',
        height:'100vh'
    }
})
export default Citas;