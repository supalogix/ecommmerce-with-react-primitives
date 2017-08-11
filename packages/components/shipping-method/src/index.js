import React from "react"
import { View, Text, Image, StyleSheet, Touchable } from 'react-primitives';
import RadioInput from 'ecommerce-radio-input';

export default class ShippingMethod extends React.Component {
  render() {
    const {
      imageSource,
      title,
      shippingType,
      promos
    } = this.props

    return (
      <View style={styles.product}>
        <View style={styles.input}>
          <RadioInput />
          <Image 
            style={styles.image} 
            source={imageSource} />
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.shippingType}>{shippingType}</Text>
          {
            promos && promos.map(value => <Text style={styles.promo}>
              {value}
            </Text>)
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  product: {
    width: 530,
    borderRadius: 10,
    borderColor: '#ddd',
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 16,
    paddingBottom: 16
  },
  title: {
    color: '#458500',
    fontWeight: 'bold'
  },
  shippingType: {

  },
  promo: {

  },
  image: {
    width: 50,
    height: 50
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center"
  },
  description: {
    flex: 4
  }
});
