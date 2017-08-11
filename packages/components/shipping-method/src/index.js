import React from "react"
import { View, Text, Image, StyleSheet, Touchable } from 'react-primitives';
import RadioInput from '../../radio-input/src/index.js';

export default class ShippingMethod extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.product}>
        <RadioInput>
        </RadioInput>
        <Image style={styles.image} source="https://s.images-iherb.com/i/ss/UPS-Grd.gif">
        </Image>
      </View>
      // <Touchable>
      //   <View style={styles.product}>
      //   </View>
      // </Touchable>
    );
  }
}

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
  image: {
    width: 50,
    height: 50
  }
});
