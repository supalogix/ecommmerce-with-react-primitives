import React from "react"
const ReactPrimitives = require('react-primitives');
const {
  Animated,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Easing,
  Dimensions,
} = require('react-native');

ReactPrimitives.inject({
  StyleSheet,
  View,
  Text,
  Image,
  Easing,
  Animated,
  Platform: {
    OS: Platform.OS,
    Version: Platform.Version,
  },
  Dimensions
});
//import { View, Text, Image, StyleSheet } from 'react-primitives';

export default class Product extends React.Component {
  render() {
    return (
      <View style={styles.product}>
        <Image></Image>
        <Text>Title</Text>
        <Text>By Line</Text>
        <Text>Actual Price</Text>
        <Text>Retail Price</Text>
        <Text>Delivery Date</Text>
        <Text>Rating</Text>
        <Text>Product Features Short</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  product: {
    width: 100,
    height: 100,
  }
});