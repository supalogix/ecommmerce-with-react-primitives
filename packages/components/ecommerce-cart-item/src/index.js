import React from "react"
import { View, Text, Image, StyleSheet } from 'react-primitives';

export default class CartItem extends React.Component {
  render() {
    const {
      title,
      price,
      quantity
    } = this.props

    return (
      <View style={styles.cartItem}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.quantity}>{quantity}</Text>
        <Text style={styles.decrement}>-</Text>
        <Text style={styles.increment}>+</Text>
        <Text style={styles.remove}>Remove</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cartItem: {
    width: 200,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da',
    padding: 8,
    flex: 1
  },
  title: { 

  },
  price: {

  },
  quantity: {

  },
  decrement: {
    borderRadius: 1,
    borderWidth: 2,
    borderColor: "#000000",
    padding: 8,
    backgroundColor: "#ff0000"
  },
  increment: {
    borderRadius: 1,
    borderWidth: 2,
    borderColor: "#000000",
    padding: 8,
    backgroundColor: "#00ff00"
  },
  remove: {
    borderRadius: 1,
    borderWidth: 2,
    borderColor: "#000000",
    padding: 8
  }
});