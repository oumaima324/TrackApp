import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LoadingScene from '../scenes/LoadingScene';
import AuthScene from '../scenes/AuthScene';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={LoadingScene} options={{headerShown: false}}  />
        <Stack.Screen name="AuthScene" component={AuthScene} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
