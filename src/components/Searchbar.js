import { SearchBar } from 'react-native-elements';
import React, { Component } from 'react';

export default class Searchbar extends React.Component {


  render() {


    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme round
      />
    );
  }
}
