import React from 'react';
import { render } from 'react-sketchapp';
import { Image, View, Text, StyleSheet } from 'react-primitives';
import Product from "ecommerce-product"
import OrderSummary from "ecommerce-order-summary"

const props = {
    title: "Sketch Title",
    byLine: "By Line",
    actualPrice: "Actual Price",
    retailPrice: "Retail Price",
    deliveryDate: "Delivery Date",
    rating: "Rating",
    productFeatures: "Product Features"
}

const orderSummaryProps = {
    subtotal: "$11.99",
    shipping: "$1.99",
    tax: "$1.99",
    rewards: "",
    orderTotal: "$20.11"
}

export default (context) => {
  render(<OrderSummary {...orderSummaryProps} />, context.document.currentPage());
}
