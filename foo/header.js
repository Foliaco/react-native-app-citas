import React,{useState} from 'react';
import './styles/index.css';
import {Text,View,StyleSheet,TouchableOpacity,Animated} from 'react-native';
import {AiOutlineMenu,AiOutlineUser} from 'react-icons/Ai';

const Header=({navigation})=>{

    const [down, setDown] = useState(new Animated.Value(-1000))
    const [active,setActive]=useState(false)
    const styles=StyleSheet.create({
        title:{
            color:'rgba(0,40,255,0.9)',
            fontSize:20,
            fontWeight:'bold',
            marginLeft:20
        },
        button:{
            padding:6,
            borderRadius:5,
            backgroundColor:'rgba(0,40,255,0.9)'
        },
        header:{
            justifyContent:"flex-start",
            alignItems:"center",
            backgroundColor:"white",
            borderBottomWidth:0.3,
            borderColor:"rgba(0,0,0,0.2)",
            height:'10vh',
            paddingLeft:10,
            width:'100vw',
            flexDirection:"row",
        },
        listCont:{
            width:'100vw',
            height:'100vh',
            justifyContent:'flex-start',
            alignItems:'center',
            backgroundColor:'white',
            position:'fixed',
            top:65,
            left:0,
            zIndex:4
        },
        cont:{
            position:'relative',
            maxHeight:'65px',
            zIndex:2
        },
        list:{
            justifyContent:'flex-start',
            alignItems:'center',
            width:'100%'
        },
        item:{
            padding:10,
            justifyContent:'flex-start',
            alignItems:'center',
            width:'100%',
            borderTopWidth:0.2,
            borderBottomWidth:0.2,
            borderColor:'rgba(0,0,0,.2)',
        },
        textItem:{
            fontSize:'0.9em',
            textAlign:'left',
            width:'90%',
            fontWeight:'bold',
            color:`rgba(0,0,0,0.7)`
        },
        user:{
            padding:20,
            borderTopWidth:0.2,
            borderBottomWidth:0.2,
            borderColor:'rgba(0,0,0,.2)',
            width:'100%',
            justifyContent:'flex-start',
            alignItems:'center'
        }
        
    })

    const showMenu=()=>{
        if(active===false){

        Animated.timing(down,{
            toValue:0,
            duration:300,
            useNativeDriver:false
        }).start();
            setActive(true)
        }
        else{
            Animated.timing(down,{
                toValue:-1000,
                duration:300,
            useNativeDriver:false

            }).start();
            setActive(false)
        }
    }


    return(
        <Animated.View style={styles.cont}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.button}  onPress={()=>showMenu()}>
                <AiOutlineMenu color='white' style={{width:20,height:20}} />
            </TouchableOpacity>
            
            <Text style={styles.title} >Claudia Chacon</Text>
        </View>

        <Animated.View style={[styles.listCont,
            {transform:[{translateX:down}]}]}>
            <View style={styles.user}>
                <Text><AiOutlineUser color='rgba(0,40,255,0.9)' style={{fontSize:'2em'}} /> User Example</Text>
            </View>
            <View style={styles.list}>
                <TouchableOpacity style={styles.item} >
                    <Text style={styles.textItem} onPress={(e)=>{
                                                                    e.target.color='blue';
                                                                    navigation.navigate('home')
                                                                }}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.textItem}>Mis Historial de citas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.textItem}>Mis Datos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.textItem}>Mis puntos Chacon</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.textItem}>Nuestros Servicios</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.textItem}>Sucursales y Horarios</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.textItem}>Promociones y Alianzas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.textItem}>Quienes Somos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.textItem}>Salir</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
        </Animated.View>
    )
}


export default Header;