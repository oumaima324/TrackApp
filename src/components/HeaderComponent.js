import React, { Component } from 'react';
import { StyleSheet, View,Text} from 'react-native';


class HeaderComponent extends Component {

  render ()
  {

    return(
         <View style={styles.header}>

        <Text style={styles.headerText}>{this.props.children}</Text>
        </View>
    );
  }
}

const styles= StyleSheet.create({
  header:{
    width :'90%',
    height :'15%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText:{
    fontWeight :'bold',
    fontSize :25,
    color: '#333',


  },
});
export default HeaderComponent;
