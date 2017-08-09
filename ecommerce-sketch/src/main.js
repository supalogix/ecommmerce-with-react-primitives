import React from 'react';
import { render } from 'react-sketchapp';
import { Image, View, Text, StyleSheet } from 'react-primitives';
import Product from "ecommerce-product"

export default (context) => {
  render(<Product />, context.document.currentPage());
}
