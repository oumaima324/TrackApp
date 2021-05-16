import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListeTraceurs from '../scenes/ListeTraceurs';
import Historique from '../scenes/Historique';
import ListSection from '../scenes/ListSection';
import Map from '../scenes/Map';
import Plus from '../scenes/Plus';
import Evénements from '../scenes/Evénements';

const Tab = createBottomTabNavigator();

export default function Apps() {

return (
    <NavigationContainer style={styles.navigationContaier}>
      <Tab.Navigator >
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="ListTraceur" component={ListeTraceurs} />
        <Tab.Screen name="Historique" component={Historique} />
        <Tab.Screen name="ListSection" component={ListSection} />
        <Tab.Screen name="Plus" component={Plus} />
        <Tab.Screen name="Evénements" component={Evénements} />

      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles= StyleSheet.create({
  name:{
   width :'100%',
   height :'10%',
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: 'red'
  },

});
