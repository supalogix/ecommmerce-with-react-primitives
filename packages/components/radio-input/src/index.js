import React from "react"
import { View, Text, Image, StyleSheet, Touchable } from 'react-primitives';

export const RadioInput = () => {
    return (
        <Touchable>
            <View style={styles.radioAndroid}>
            </View>
        </Touchable>
    );
};

const styles = StyleSheet.create({
  product: {
    width: 530,
    height: 110,
    margin: 'auto',
    marginTop: 200,
    borderRadius: 10,
    borderColor: '#ddd',
    borderStyle: 'solid',
    borderWidth: 1
  },
  title: {
    color: 'red',
    fontWeight: 'bold'
  },
  // radio: {
  //   width: 15,
  //   height: 15,
  //   borderRadius: 20,
  //   borderWidth: 2, 
  //   borderStyle: 'solid', 
  //   borderColor: 'white',
  //   boxShadow: "0 0 0 2px #d5d5d5",
  //   // shadowOpacity: 2,
  //   // shadowColor: "#d5d5d5",
  //   // shadowRadius: 2,
  //   marginTop: 48,
  //   marginLeft: 15 
  // },
  radioAndroid: {
    width: 10,
    height: 10,
    borderRadius: 20,
    borderWidth: 2, 
    borderStyle: 'solid', 
    borderColor: 'white',
    marginTop: 48,
    marginLeft: 15 
  }
});

export default RadioInput;