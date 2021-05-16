import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';
import { List , ListItem, SearchBar } from 'react-native-elements';



 class FlatList extends Component {

   DATA = []





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
        <FlatList
        data={this.props.DATA}
        renderItem={({ item }) => (


          <View style={styles.item}>
            <Text style={styles.title} >{`${item.name.first} ${item.name.last}`}</Text>
            <Text style={styles.title}>{item.email}</Text>
          </View>
          )}
          keyExtractor={item => item.email}
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
export default FlatList;
