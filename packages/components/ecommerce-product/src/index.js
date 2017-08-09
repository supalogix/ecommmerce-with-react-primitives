import React from "react"
import { View, Text, Image, StyleSheet } from 'react-primitives';

export default class Product extends React.Component {
  render() {
    const {
      title,
      byLine,
      actualPrice,
      retailPrice,
      deliveryDate,
      rating,
      productFeatures
    } = this.props

    return (
      <View style={styles.product}>
        <Text style={styles.title}>{title}</Text>
        <Text>{byLine}</Text>
        <Text>{actualPrice}</Text>
        <Text>{retailPrice}</Text>
        <Text>{deliveryDate}</Text>
        <Text>{rating}</Text>
        <Text>{productFeatures}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  product: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'red',
  }
});