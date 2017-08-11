import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-primitives';
import Product from "ecommerce-product"

const props = {
    title: "Android Title",
    byLine: "By Line",
    actualPrice: "Actual Price",
    retailPrice: "Retail Price",
    deliveryDate: "Delivery Date",
    rating: "Rating",
    productFeatures: "Product Features"
}

export default class ecommerceNative extends Component {
  render() {
    return ( <Product {...props} />)
  }
}