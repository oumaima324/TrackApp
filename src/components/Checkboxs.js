import React, { useState } from "react";
import {Text, StyleSheet, View } from "react-native";
import CheckBox from '@react-native-community/checkbox';

const Checkboxs = () => {
  const [isSelected, setSelection] = useState(false);

  return (

      <View style={styles.checkboxContainer}>
      <View style={styles.container}>

        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "red",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default Checkboxs;
