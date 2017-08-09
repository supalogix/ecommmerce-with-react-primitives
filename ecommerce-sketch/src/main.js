import React from 'react';
import { render } from 'react-sketchapp';
import { Image, View, Text, StyleSheet } from 'react-primitives';
import Product from "ecommerce-product"

const props = {
    title: "Sketch Title",
    byLine: "By Line",
    actualPrice: "Actual Price",
    retailPrice: "Retail Price",
    deliveryDate: "Delivery Date",
    rating: "Rating",
    productFeatures: "Product Features"
}

export default (context) => {
  render(<Product {...props} />, context.document.currentPage());
}
