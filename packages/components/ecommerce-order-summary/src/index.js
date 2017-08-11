import React from "react"
import { View, Text, Image, StyleSheet } from 'react-primitives';

export default class Product extends React.Component {
  render() {
    const {
      subtotal,
      shipping,
      tax,
      rewards,
      orderTotal,
    } = this.props

    return (
      <View style={styles.orderSummary}>
        <View style={styles.attribute}>
            <Text style={styles.label}>Subtotal</Text>
            <Text style={styles.value}>{subtotal}</Text>
        </View>
        <View style={styles.attribute}>
            <Text style={styles.label}>Shipping</Text>
            <Text style={styles.value}>{shipping}</Text>
        </View>
        <View style={styles.attribute}>
            <Text style={styles.label}>Tax</Text>
            <Text style={styles.value}>{tax}</Text>
        </View>
        <View style={styles.attribute}>
            <Text style={styles.label}>Rewards</Text>
            <Text style={styles.value}>{rewards}</Text>
        </View>
        <View style={styles.attribute}>
            <Text style={styles.label}>Order Total</Text>
            <Text style={styles.value}>{orderTotal}</Text>
        </View>
        <View style={styles.checkout}>
          <Text style={styles.text}>Checkout</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  orderSummary: {
    width: 200,
    height: 'auto',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da',
    padding: 8,
    flex: 1
  },
  attribute: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  label: {
    fontWeight: 'bold',
  },
  value: { },
  checkout: {
    marginTop: 16,
    padding: 16,
    color: "#fff",
    backgroundColor: "#ff8a00"
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  }
});