import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Checkboxs from '../components/Checkboxs';




const list = [
{
  name: 'Durée d arret',
  lists: <ModalDropdown options={['>1min ', '>2min', '>5min','>10min']}/>

},
{
  name: 'arrets',
  lists : <Checkboxs> </Checkboxs>,



},

{
  name: 'Evénements',
  lists : <Checkboxs> </Checkboxs>,



},

]


class ListOptions extends Component {


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

export default ListOptions;
