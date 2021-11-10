import React, { useState, useContext} from 'react';
import {View,StyleSheet,Modal,Text, TouchableOpacity,ScrollView} from 'react-native';
import {AiFillShop} from 'react-icons/ai';
import cedes from '../../data/ciudades.json';
import  cedesContext  from '../../hooks/cedes/cedesContext';
import PosContext from '../../hooks/position/posContext';

const UbicationDLocal=({route,navigation})=>{
    
    const [visible, setVisible] = useState(false);
    const {ubic,addCedes}=useContext(cedesContext);
    const { addPos } = useContext(PosContext);

    const par=route.params;
     
    return(
      <View>
          <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',paddingLeft:20,paddingRight:20}}>
              <View style={{backgroundColor:'rgb(255,20,200)',padding:10,borderRadius:3,justifyContent:'center',alignItems:'center',width:'12%'}}>
                  <AiFillShop style={{color:'white',fontSize:'1.3em'}} />
              </View>
              <Text style={{width:'86%',padding:10,backgroundColor:'rgba(0,0,0,0.04)',color:'rgba(0,0,0,0.8)',fontSize:'1.1em'}} 
                    onPress={()=>setVisible(true)}>
                    {ubic.cede}
            </Text>
          </View>
              <Modal visible={visible} animationType='fade' transparent={true}>
                  <View style={styles.back}>
                        <ScrollView style={styles.front}>
                            {
                                cedes.map((e,i)=>(
                                    <TouchableOpacity key={i} style={{marginBottom:10,marginTop:10,padding:10,borderBottomColor:'rgba(0,0,0,0.2)',borderBottomWidth:'0.2px',justifyContent:'center',alignItems:'center'}}>
                                        <Text  key={i} style={{fontSize:'1.1em'}} onPress={(event)=>{
                                                                                    setVisible(false)
                                                                                    addCedes(e);
                                                                                    }}>{e.cede}</Text>
                                    </TouchableOpacity>
                                        ))
                            }
                        </ScrollView>
                  </View>
              </Modal>
              <View style={{width:'93%',margin:'auto',marginTop:20,padding:5,backgroundColor:'white'}}>
                <View style={{width:"100%",marginBottom:20}}>
                    <Text style={{fontSize:'1.1em',fontWeight:'bold',color:'rgba(200,0,100,0.8)'}}>PROTOCOLO DE BIOSEGURIDAD</Text>
                    <Text style={{fontSize:'0.9em',color:'rgba(0,0,0,0.8)',paddingTop:10}}>Al llegar a tu cita se te pedira digilenciar la <b>Declaracion de Estado de Salud</b> 
                    como parte de las medidas implementadas en el marco de la emergencia sanitarias a raiz de COVID-19.
                    Debes presentar tu documento de identidad en fisico para tal fin.</Text>
                </View>
                </View>
                {
                        ubic.id <= 0 ?
                            (<TouchableOpacity
                                disabled={true}
                                style={{ display: 'block', width: '80vw', margin: 'auto', marginTop:20,borderRadius:4, padding: 8,
                                         justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color:'rgba(0,0,0,0.2)',fontSize:'.9em',textAlign:'center',fontWeight:'bold'}}>Siguiente</Text>
                            </TouchableOpacity>
                            )
                            :
                            (<TouchableOpacity
                                disabled={false}
                                onPress={()=>{
                                    addPos()
                                    navigation.push('step4',par)
                                }}
                                style={{ display: 'block', width: '80vw', margin: 'auto', marginTop:20,borderRadius:4, padding: 8,
                                         justifyContent: 'center', alignItems: 'center',
                                         backgroundColor: 'rgba(255,50,200,0.9)' }}>
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

export default UbicationDLocal;