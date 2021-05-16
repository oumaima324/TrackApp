import React, { Component } from 'react';
import { StyleSheet, View,Text, TouchableOpacity} from 'react-native';



  const ButtonComponent= ({label,style})=>
  {

    return(
         <TouchableOpacity style={[styles.buttonContainer, style]}>
         <Text style={styles.ButtonText}>{label}</Text>
         </TouchableOpacity>
    )
  };


const styles= StyleSheet.create({
buttonContainer:{
  width:'100%',
  height:50,
  alignItems:'center',
  justifyContent:'center',
  marginBottom: 5,
},
ButtonText:{
  color:'white',
  fontSize:20,
  fontWeight:'bold',
},
});
export default ButtonComponent;
