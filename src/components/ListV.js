
import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';



const list = [
{
  name: 'Traceur',
  lists: <ModalDropdown options={['CLIO4 rouge', 'Dacia Dokker', 'JUMPY 15933 B 7']}/>

},
{
  name: 'Filter',
  lists : <ModalDropdown options={['Aujourd' , 'Dernière heure ', 'derniere semaine', 'Hier', 'Il ya 3 jours', 'Cette semaine', 'La semaine derniere', 'Ce mois ']}/>,


},

]


class ListV extends Component {


  render () {
    return (
      <View>
       <FlatList
         keyExtractor = {(item, index) => index.toString()}
         data={list}
         renderItem = {({ item }) => (
           <ListItem bottomDivider>

             <ListItem.Content>
               <ListItem.Title>{`${item.name}`}</ListItem.Title>


             </ListItem.Content>

           <ListItem.Title> {item.lists} </ListItem.Title>

           </ListItem>

         )}

       />



      </View>

);
}
}

export default ListV;
