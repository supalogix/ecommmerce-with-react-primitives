import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-primitives';
import Product from "ecommerce-product"
import Cart from "ecommerce-cart"

export default class ecommerceNative extends Component {
  render() {
    return ( <Cart />)
  }
}