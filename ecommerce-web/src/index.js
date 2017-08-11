import React from "react"
import {render} from "react-dom"
import { View, Text, Image, StyleSheet } from 'react-primitives';
import Product from "ecommerce-product"
import OrderSummary from "ecommerce-order-summary"
import CartItem from "ecommerce-cart-item"
import ShippingMethod from "shipping-method"
import Cart from "ecommerce-cart"

const styles = {
    page: {
        marginLeft: 16
    }
}

render(
    <View style={styles.page}>
        <Cart />
    </View>,
    document.getElementById("root")
)
