/**
 * @format
 */
import React, {Component} from 'react';
import {Text, View, AppRegistry} from 'react-native';
import Footer from './src/Footer';
//import Tracer from './src/scenes/Tracer';
//import FlatListDemo from './src/scenes/FlatListDemo';
//import TracerList from './src/scenes/TracerList';
import ListeTraceurs from './src/scenes/ListeTraceurs';
import Plus from './src/scenes/Plus';
import Testside from './src/scenes/Testside';
//import Example from './src/scenes/Example';
//import ListViewSelectExample from './src/scenes/ListViewSelectExample';
import Historique from './src/scenes/Historique';
//import listeTracer from './src/components/listeTracer';
import ListSection from './src/scenes/ListSection';
//import Searchbar from './src/components/Searchbar';
//import Film from './src/components/Film';
import Apps from './src/navigation/Apps';


const Sample = () =>{
  return(
    <View>
    <Footer>bonjour</Footer>
    <Text> hello </Text>
    <Footer>Hiiii</Footer>

    </View>
  );
}

AppRegistry.registerComponent('TrackApp', () =>Apps);
