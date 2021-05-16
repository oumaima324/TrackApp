import React from 'react';
import { StyleSheet, View, Text, SectionList,SafeAreaView, Button } from 'react-native';
import SectionListSidebar from 'react-native-sectionlist-sidebar';
import HeaderComponent from '../components/HeaderComponent';
import ButtonComponent from '../components/ButtonComponent';

export default class ListSection extends React.Component {
  state = {
    data: [
      {
        title: 'GÉNERAL',
        data: [
          { name: 'Traceur', result: 'CLIO4 rouge' },
          { name: 'Immatriculation', result: '52039 A 4' },
          { name: 'Odomètre', result:'154890 km' },
          { name: 'Dispositifs GPS', result: 'Graviton FM-Light' },
          { name: 'Carte SIM', result: '06688888' },
        ] },
      {
       title: 'LOCALISATION',
        data: [
          { name: 'Addresse', result: 'Unnamed Road, Souk El Had Des Bradia, Morocco' },
          { name: 'Position', result: '32.447392 °, -6.542719 °' },
          { name: 'Altitude', result: '458 m' },
          { name: 'Angle', result: '0 °' },
          { name: 'Vitesse', result: '0 km/h' },
          { name: 'time(position)', result: '2021-05-04 23:47:16' },
        ] },
        {
         title: 'CAPTEURS',
          data: [
            { name: 'Contact', result: 'Off' },
            { name: 'Allimentation', result: '12.84 V' },
            { name: 'Signal GPS', result: '8' },
            { name: 'Etat', result: 'Déverrouillé' },
            { name: 'Moteur', result: 'Off' },
            { name: 'Gsm Signal', result: '97 %' },
          ] },


    ],
  };



  render() {
    return (
      <View style={styles.container}>
       <HeaderComponent> Traceur</HeaderComponent>
        <SectionList
            sections={this.state.data}
            keyExtractor={(item, index) => item + index}
            renderSectionHeader={({section}) => <Text style={styles.header}>{section.title}</Text>}
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemResult}>{item.result}</Text>
              </View>
            )}
        />
               <SafeAreaView style={{flexDirection:'row',alignItems:'center',}}>
                <View style={styles.buttonContainer}>
                    <ButtonComponent
                      label={'Deverouillé'}
                      style={{
                         backgroundColor:'#A71F3C',
                         }}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <ButtonComponent
                        label={'verouillé'}
                        style={{
                           backgroundColor:'#8A8D8C',
                           }}
                    />
                </View>
                </SafeAreaView>

      </View>




    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 7,
    paddingHorizontal: 10,
    backgroundColor: '#A8A8A8',
    paddingBottom: 9
  },
  itemContainer: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingHorizontal: 10,
    paddingBottom: 9
  },
buttonContainer:{
  flex:1,
},
  itemName: {
    flex: 1,
    color: 'black',
  },
  itemResult: {
    color: 'gray',
  },
  container: {
      flex: 1,

  },

});
