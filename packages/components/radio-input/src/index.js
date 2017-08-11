import React from "react"
import { View, Text, Image, StyleSheet, Touchable } from 'react-primitives';

export const RadioInput = () => {
    return (
        <Touchable>
            <View style={styles.radio}>
            </View>
        </Touchable>
    );
};

const styles = StyleSheet.create({
  radio: {
    width: 15,
    height: 15,
    borderRadius: 20,
    borderWidth: 2, 
    borderStyle: 'solid', 
    borderColor: 'white',
    boxShadow: "0 0 0 2px #d5d5d5",
    shadowOpacity: 2,
    shadowColor: "#d5d5d5",
    shadowRadius: 2
   }
});

export default RadioInput;