import React from "react"
import {render} from "react-dom"
import { View, Text, Image, StyleSheet } from 'react-primitives';
import Product from "ecommerce-product"

const props = {
    title: "Web Title",
    byLine: "By Line",
    actualPrice: "Actual Price",
    retailPrice: "Retail Price",
    deliveryDate: "Delivery Date",
    rating: "Rating",
    productFeatures: "Product Features"
}

render(
    <Product {...props} />,
    document.getElementById("root")
)