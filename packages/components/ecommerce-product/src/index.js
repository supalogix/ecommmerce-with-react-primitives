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
        <Text style={styles.byLine}>{byLine}</Text>
        <Text style={styles.actualPrice}>{actualPrice}</Text>
        <Text style={styles.retailPrice}>{retailPrice}</Text>
        <Text style={styles.deliveryDate}>{deliveryDate}</Text>
        <Text style={styles.rating}>{rating}</Text>
        <Text style={styles.description}>{productFeatures}</Text>
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