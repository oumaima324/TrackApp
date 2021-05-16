import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';
import { List , ListItem, SearchBar } from 'react-native-elements';
import HeaderComponent from '../components/HeaderComponent';
import Searchbar from '../components/Searchbar';


 class FlatListDemo extends Component {

   DATA = [
       {
   name: 'clio',
   vitesse:'5 Kms',
   Heure: 'il ya environ 2 heurs',

   },
   {
   name: 'dacia',
   vitesse:'3 Kms',
   Heure: 'il ya environ 2 heurs',

     },
   {
   name: 'JUMPY',
   vitesse:'10 Kms',
   Heure: 'il ya environ 2 heurs',

 },]





  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };




  render() {
    return (


      <View>
       <HeaderComponent>TRACEURS</HeaderComponent>
       <Searchbar></Searchbar>
      <FlatList
        data={this.DATA}
        renderItem={({ item }) => (


          <View style={styles.item}>
            <Text style={styles.title} >{`${item.name} ${item.vitesse}`}</Text>
            <Text style={styles.title}>{item.Heure}</Text>
          </View>
          )}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>




    );
  }
}


const styles = StyleSheet.create({

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },

});
export default FlatListDemo;
