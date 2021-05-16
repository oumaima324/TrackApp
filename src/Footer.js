import React, { Component } from 'react';
import {  View,Text} from 'react-native';


class Footer extends Component {

  render ()
  {

    return(
        <Text>{this.props.children}</Text>
    );
  }
}
export default Footer;
