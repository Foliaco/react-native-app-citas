import React from 'react';
import { View,ScrollView } from 'react-native';
import Circles from './components/circles';
import Footer from './components/Footer';
import Header from './components/header';
const Citas=({navigation})=>{

  
 

    return(
      <View >
        <Header navigation={navigation} direction='home'/>
        <ScrollView  >
            <Circles navigation={navigation}/>
        </ScrollView>
        <Footer navigation={navigation} pos={'fixed'}/>
      </View>
    );
}


export default Citas;