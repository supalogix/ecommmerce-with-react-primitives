import React from 'react';
import { render } from 'react-sketchapp';
import { Image, View, Text, StyleSheet } from 'react-primitives';
import Cart from "ecommerce-cart"

export default (context) => {
  render(<Cart />, context.document.currentPage());
}
