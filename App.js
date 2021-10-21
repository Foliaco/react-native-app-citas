import React from 'react';
import {View,ScrollView,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './app/Home'
import Citas from './app/Citas';
const Stack=createStackNavigator();

const App=()=>{
  return (
    <View style={styles.content}>  
      <NavigationContainer>
        <Stack.Navigator initialRouteName="citas" screenOptions={{headerShown:false}}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="citas" component={Citas} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
};

const styles=StyleSheet.create({
  content:{
    position:'relative',
    minHeight:'100vh',
    backgroundColor:'white'
  }
})


export default App;