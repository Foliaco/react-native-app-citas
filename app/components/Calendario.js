import React,{useEffect, useState, useContext} from 'react';
import {View,Text,ScrollView,TouchableOpacity,Modal, StyleSheet, Button} from 'react-native';
import {AiOutlineMore,AiOutlineMinus} from 'react-icons/ai';
import Spinner from 'react-native-loading-spinner-overlay';
import {Calendar} from 'react-native-calendars';
import fechasProf from '../../data/fechas.json';

//contextos
import ProfeContext from '../../hooks/profecional/ProfeContex';
import PosContext from '../../hooks/position/posContext';
const dat=new Date();
const day=dat.getDate();
const mont=dat.getMonth()+1;
const year=dat.getFullYear();
const fecha=`${year}-${mont}-${day}`;
const h=dat.getHours()+1;
const min=dat.getMinutes();

const Calendario=({route,navigation})=>{

    const [date, setDate] = useState(fecha);
    const [hora, setHora] = useState(h);
    const [minutes, setMinutes] = useState(min+30);
    const [disableOne,setDisableOne] = useState(false);
    const [disableTwo,setDisableTwo] = useState(true);
    const [next,setNext]=useState(false)
    const [ultimate,setUltimate]=useState(null);
    const [modal,setModal]=useState({show:false,msj:null,pass:true});

    const {addPos} = useContext(PosContext)

    useEffect(()=>{
        if(hora<h&&hora<9){
            setDisableTwo(true)
        }
        else{
        setDisableTwo(false)
        }
        if(minutes>59||minutes<0){
            setMinutes(0);
        }
    },[hora,minutes])

    //useContext
    const showModalTime=(msj,pass,show)=>{
        
            setModal({show,msj,pass:true})
        setTimeout(()=>{
            setModal({show,msj,pass})
            setNext(true)
        },3000)
    }
    const {profe} = useContext(ProfeContext)
    const searchFreeTime=()=>{
        const newF=[]
        fechasProf.forEach(f=>{
            if(f.id===profe.id){
                newF.push(f)
            }
        })
        console.log(newF[0])
        if(newF[0].fechas[date]){
            const hour=newF[0].fechas[date].h;//12:30 - 2:30
            const minu=newF[0].fechas[date].m;
            let tranH=hour+2;//tiempo estimado 2h 12+2
            
            if(hora <= tranH){
                if(hora==hour){
                    showModalTime('Este horario ya esta ocupado, por favor ingrese otro.',false,true)
                    console.log('Este horario ya esta ocupado, por favor ingrese otro.')
                }
                else if(hora>=tranH&&minutes>=minu){
                    showModalTime('Este horario esta disponible!',false,true)
                    setUltimate({fecha:`${date}`,hours:`${hora}-${minutes}-00`})
                    console.log(`Este horario esta disponible!`)

                }
                else if(hora>=tranH&&minutes<=minu){
                    showModalTime('Este horario ya esta ocupado, por favor ingrese otro.',false,true)
                    console.log('Este horario ya esta ocupado, por favor ingrese otro.')

                }
            }
            else{
                showModalTime('Este horario esta disponible!',false,true)
                setUltimate({fecha:`${date}`,hour:`${hora}-${minutes}-00`})

                console.log(`Este horario esta disponible!`)

            }
        }
        else{
            showModalTime('Este horario esta disponible!',false,true)
            setUltimate({fecha:`${date}`,hour:`${hora}-${minutes}-00`})
            console.log(`Este horario esta disponible!`)

        }
        
    }

 
    return(
      <ScrollView>
          <View>
              <Text style={{fontSize:'1.4em',textAlign:'center',fontWeight:'bold'}}>Selecciona la Fecha y Hora</Text>
          </View>
          <View style={{width:'90%',margin:'auto',marginTop:20}}>
              <Calendar
                current={date}
                onDayPress={(day)=>setDate(day.dateString)}
                markedDates={{
                    [date]:{
                        color:'white',
                        selectedColor:'rgb(255,50,200)',
                        selected:true,
                        marked:true,
                        dotColor:'white'
                    }
                }}
                theme={{headerText:'rgb(255,50,200)'}}
                hideArrows={false}
                disableArrowLeft={true}
                minDate={fecha}
              />
            <View>
                <View style={{flexDirection:'row',backgroundColor:'white',padding:10,alignItems:'center',justifyContent:'space-around'}}>
                        <View style={{padding:10,alignItems:'center',justifyContent:'space-around'}}>
                            <TouchableOpacity style={{fontSize:'1.3em',padding:10,backgroundColor:'white',borderWidth:'0.2px',borderColor:'rgba(0,0,0,0.2)',borderRadius:'3'}}
                            disabled={disableOne}
                            onPress={()=>{
                                if(hora>=19){
                                    setDisableOne(true)
                                }
                                console.log(hora)
                                setHora(hora+1)
                            }}>
                                <AiOutlineMore color='rgba(200,50,255,0.9)' fontSize='1.2em'/>
                            </TouchableOpacity>
                            <Text style={{padding:10,color:'rgb(0,0,0,0.9)',fontSize:'1.3em'}}>
                                {hora}
                            </Text>
                            <TouchableOpacity style={{fontSize:'1.3em',padding:10,backgroundColor:'white',borderWidth:'0.2px',borderColor:'rgba(0,0,0,0.2)',borderRadius:'3'}}
                            disabled={disableTwo}
                            onPress={()=>{
                                    setHora(hora-1)
                                console.log(hora)
                            }}
                            >
                                <AiOutlineMinus color='rgba(255,50,200,0.9)' fontSize='1.2em'/>
                            </TouchableOpacity>
                        </View>
                        <View style={{padding:10,alignItems:'center',justifyContent:'space-around'}}>
                            <TouchableOpacity style={{fontSize:'1.3em',padding:10,backgroundColor:'white',borderWidth:'0.2px',borderColor:'rgba(0,0,0,0.2)',borderRadius:'3'}}
                            disabled={disableOne}
                            onPress={()=>{
                                if(minutes>=30 && hora<9){
                                    setDisableOne(true)
                                }
                                setMinutes(minutes+1)
                                console.log(minutes)
                            }}>
                                <AiOutlineMore color='rgba(200,50,255,0.9)' fontSize='1.2em'/>
                            </TouchableOpacity>
                            <Text style={{padding:10,color:'rgb(0,0,0,0.9)',fontSize:'1.3em'}}>
                                {minutes}
                            </Text>
                            <TouchableOpacity style={{fontSize:'1.3em',padding:10,backgroundColor:'white',borderWidth:'0.2px',borderColor:'rgba(0,0,0,0.2)',borderRadius:'3'}}
                            disabled={disableTwo}
                            onPress={()=>{
                                    setMinutes(minutes-1)

                                console.log(minutes)
                            }}
                            >
                                <AiOutlineMinus color='rgba(255,50,200,0.9)' fontSize='1.2em'/>
                            </TouchableOpacity>
                        </View>
                </View>
                <TouchableOpacity
                                disabled={false}
                                onPress={()=>{
                                   searchFreeTime(); 
                                }}
                                style={{ display: 'block', width: '80vw', margin: 'auto',marginTop:20,borderRadius:4, padding: 8,
                                         justifyContent: 'center', alignItems: 'center',
                                         backgroundColor: 'rgba(255,200,50,0.9)' }}>
                                <Text style={{color:'white',fontSize:'.9em',textAlign:'center',fontWeight:'bold'}}>Consultar</Text>
                </TouchableOpacity>
                {
                    ultimate===null?null:
                    <TouchableOpacity
                                
                                onPress={()=>{
                                   console.log(ultimate)
                                   
                                   navigation.navigate('step6',{
                                       "time":[ultimate,route.params]
                                   })
                                   addPos();
                                }}
                                style={{ display: 'block', width: '80vw', margin: 'auto',marginTop:20,borderRadius:4, padding: 8,
                                         justifyContent: 'center', alignItems: 'center',
                                         backgroundColor: 'rgba(255,200,50,0.9)' }}>
                                <Text style={{color:'white',fontSize:'.9em',textAlign:'center',fontWeight:'bold'}}>Next</Text>
                </TouchableOpacity>}
            </View>
            <Modal visible={modal.show} transparent={true}>
                <Spinner
                    visible={modal.pass}
                    textContent={'Consultando...'}
                    textStyle={{fontSize:'1em',color:'rgb(255,50,200)',marginBottom:20}}
                    

                />
                {
                    modal.msj===null?null:
                
                <View style={styles.back}>
                    <View style={styles.front}>

                    <Text style={{marginBottom:20,color:'rgb(255,50,200)'}}>{modal.msj===null?null:modal.msj}</Text>
                   
                    <View style={{marginBottom:20,padding:10,alignItems:'center',justifyContent:'center'}}>
                    </View>
                                <Button
                                    title='Close'
                                    color='rgb(255,50,200)'
                                    onPress={()=>setModal({show:false,msj:'close'})}
                                    />
                    </View>
                </View>
                }
            </Modal>
          </View>
      </ScrollView>
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
        padding:20,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },

})
export default Calendario;