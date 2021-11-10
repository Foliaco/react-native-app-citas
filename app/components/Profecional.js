import React,{useState,useContext} from 'react';
import { View, Text, Modal, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {AiOutlineUser} from 'react-icons/ai';
import ProfeContext from '../../hooks/profecional/ProfeContex'
import profeData from '../../data/profesionales.json';
import PosContext from '../../hooks/position/posContext';
const Profecional=({type,navigation,route})=>{

    const [visible, setVisible] = useState(false);
    const selectProfe=[]
    const {profe,addProfe} =useContext(ProfeContext);
    const {addPos} =  useContext(PosContext)
    profeData.forEach((e)=>{
        if(e.prof===type){
            selectProfe.push(e)
        }
    })

    return(
      <View>
          <View style={{width:'100%',padding:20,backgroundColor:'white'}}>
              <Text style={{fontSize:'1em',marginBottom:'10',fontWeight:'bold',color:'rgb(255,200,50)'}}>Quien te atendera?</Text>
              <Text style={{fontSize:'0.95em',marginBottom:'10'}} ><AiOutlineUser color='rgba(255,50,200)' style={{fontSize:'1.3em',paddingRight:10}} />Profecionales en {type}</Text>
              <Text style={{fontSize:'0.9em',marginBottom:'10'}}>Eligen quien te atendera o asignamos uno aleatoreamente</Text>
          </View>
          <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',paddingLeft:20,paddingRight:20}}>
             <View style={{backgroundColor:'rgb(255,20,200)',padding:10,borderRadius:3,justifyContent:'center',alignItems:'center',width:'12%'}}>
                <AiOutlineUser style={{color:'white',fontSize:'1.3em'}} />
            </View>
            <Text style={{width:'86%',padding:10,backgroundColor:'rgba(0,0,0,0.04)',color:'rgba(0,0,0,0.8)',fontSize:'1.1em'}} 
                    onPress={()=>setVisible(true)}>
                    {profe.name}
            </Text>
          </View>
          <Modal visible={visible} animationType='fade' transparent={true}>
                  <View style={styles.back}>
                        <ScrollView style={styles.front}>
                            {
                                selectProfe.map((e,i)=>(
                                    <TouchableOpacity key={i} style={{marginBottom:10,marginTop:10,padding:10,borderBottomColor:'rgba(0,0,0,0.2)',borderBottomWidth:'0.2px',justifyContent:'center',alignItems:'center'}}>
                                        <Text  key={i} style={{fontSize:'1.1em'}} onPress={(event)=>{
                                                                                    setVisible(false);
                                                                                    addProfe(e)
                                                                                    
                                                                                    }}>{e.name}</Text>
                                    </TouchableOpacity>
                                        ))
                            }
                        </ScrollView>
                  </View>
              </Modal>
              {
                        profe.id <= 0 ?
                            (<TouchableOpacity
                                disabled={true}
                                style={{ display: 'block', width: '80vw', margin: 'auto',marginTop:20,borderRadius:4, padding: 8,
                                         justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color:'rgba(0,0,0,0.2)',fontSize:'.9em',textAlign:'center',fontWeight:'bold'}}>Siguiente</Text>
                            </TouchableOpacity>
                            )
                            :
                            (<TouchableOpacity
                                disabled={false}
                                onPress={()=>{
                                    addPos()
                                    navigation.push('step5',{"type":route.params,"profe":profe})
                                }}
                                style={{ display: 'block', width: '80vw', margin: 'auto',marginTop:20,borderRadius:4, padding: 8,
                                         justifyContent: 'center', alignItems: 'center',
                                         backgroundColor: 'rgba(255,200,50,0.9)' }}>
                                <Text style={{color:'white',fontSize:'.9em',textAlign:'center',fontWeight:'bold'}}>Siguiente</Text>
                            </TouchableOpacity>
                            )
                    }
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

})

export default Profecional;