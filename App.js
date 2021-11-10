import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/Home'
import Citas from './app/Citas';
import Step2 from './app/Step2';
import Step3 from './app/Step3';
import Step4 from './app/Step4';
import Step5 from './app/Step5';

//Cotextos
import PosState from './hooks/position/posStatus';
import CedesStatus from './hooks/cedes/cedesStatus';
import ProfeState from './hooks/profecional/profeState';
import Step6 from './app/Step6';

const Stack = createStackNavigator();

const App = () => {
  return (
    <CedesStatus>
      <PosState>
        <ProfeState>
        <View style={styles.content}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="step6" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="home" component={Home} />
              <Stack.Screen name="citas" component={Citas} />
              <Stack.Screen name='step2' component={Step2} />
              <Stack.Screen name='step3' component={Step3} />
              <Stack.Screen name='step4' component={Step4} />
              <Stack.Screen name='step5' component={Step5} />
              <Stack.Screen name='step6' component={Step6} />

            </Stack.Navigator>
          </NavigationContainer>
        </View>
        </ProfeState>
      </PosState>
    </CedesStatus>
  )
};

const styles = StyleSheet.create({
  content: {
    position: 'relative',
    minHeight: '100vh',
    backgroundColor: 'white'
  }
})


export default App;