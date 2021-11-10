import React, { useContext, useState, useEffect } from 'react';
import { Button, StyleSheet, Text, Animated, View } from 'react-native';
import Header from './components/header';
import { BiDice1, BiDice2, BiDice3, BiDice4, BiDice5 } from 'react-icons/bi'
import PosContext from '../hooks/position/posContext';
import Profecional from './components/Profecional';
import Footer from './components/Footer';



const Step3 = ({ route, navigation }) => {


    const { position } = useContext(PosContext);
  
    

    return (
 
        <View style={{width:'100vw',maxWidth:'100vw',overflowX:'hidden'}}>
            <Header navigation={navigation} direction='home' />
            <View style={styles.cont}>
                <Text style={{ color: 'rgb(255,50,200)', fontSize: '1.3em' }}>Reserva Online en 5 pasos</Text>
                <View style={[styles.cont, { justifyContent: 'space-between', flexDirection: 'row' }]}>
                    <BiDice1 style={{ fontSize: '3.1em', color: position === 1 ? 'rgba(255,200,50,0.9)' : 'rgba(0,0,0,0.7)', transition: '200ms' }} />
                    <BiDice2 style={{ fontSize: '3.1em', color: position === 2 ? 'rgba(255,200,50,0.9)' : 'rgba(0,0,0,0.7)', transition: '200ms' }} />
                    <BiDice3 style={{ fontSize: '3.1em', color: position === 3 ? 'rgba(255,200,50,0.9)' : 'rgba(0,0,0,0.7)', transition: '200ms' }} />
                    <BiDice4 style={{ fontSize: '3.1em', color: position === 4 ? 'rgba(255,200,50,0.9)' : 'rgba(0,0,0,0.7)', transition: '200ms' }} />
                    <BiDice5 style={{ fontSize: '3.1em', color: position === 5 ? 'rgba(255,200,50,0.9)' : 'rgba(0,0,0,0.7)', transition: '200ms' }} />
                </View>
            </View>
                <View style={{width:'100vw'}}>
                        <View style={{width:'100vw'}}>
                            <Profecional route={route} navigation={navigation} type={route.params.type} />
                        </View>
                </View>
               <Footer navigation={navigation} pos={'fixed'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    cont: {
        width: '90%',
        height:'15vh',
        margin:'auto',
        marginTop:10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Step3;