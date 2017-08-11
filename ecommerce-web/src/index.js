import React from "react"
import {render} from "react-dom"
import { View, Text, Image, StyleSheet } from 'react-primitives';
import Product from "ecommerce-product"
import OrderSummary from "ecommerce-order-summary"

const props = {
    subtotal: "$11.99",
    shipping: "$1.99",
    tax: "$1.99",
    rewards: "",
    orderTotal: "$20.11"
}

render(
    <OrderSummary {...props} />,
    document.getElementById("root")
)