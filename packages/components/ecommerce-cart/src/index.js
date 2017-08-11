import React from "react"
import {render} from "react-dom"
import { View, Text, Image, StyleSheet } from 'react-primitives';
import OrderSummary from "ecommerce-order-summary"
import ShippingMethod from "shipping-method"

const shippingMethodProps = [
    {
        imageSource: "https://s.images-iherb.com/i/ss/UPS-Grd.gif",
        title: "Estimated Delivery: August 15 - August 16",
        shippingType: "Expedited - $0.00 FREE!",
        promos: [
            "Free shipping for orders over $20.00!",
            "No Po Box or APO"
        ]
    },
    {
        imageSource: "https://s.images-iherb.com/i/ss/USPS-Pri.gif",
        title: "Estimated Delivery: August 15 - August 21",
        shippingType: "PO BOX or APO Address - $0.00 FREE!",
        promos: [
            "Free shipping for orders over $20.00!",
            "Orders of $80 or less, max 6 lbs., APO takes up to 4 weeks"
        ]
    },
    {
        imageSource: "https://s.images-iherb.com/i/ss/UPS-Int.gif",
        title: "Estimated Delivery: August 15",
        shippingType: "Two Day - $10.27",
    },
    {
        imageSource: "https://s.images-iherb.com/i/ss/UPS-Int.gif",
        title: "Estimated Delivery: August 14",
        shippingType: "Next Day - $13.28",
    },
]

const orderSummaryProps = {
    subtotal: "$11.99",
    shipping: "$1.99",
    tax: "$0.89",
    rewards: "",
    orderTotal: "$14.87"
}

export default () => <View style={styles.cart}>
    <View style={styles.shippingMethods}>
        <View style={styles.shippingMethod}> <ShippingMethod {...shippingMethodProps[0]} /> </View>
        <View style={styles.shippingMethod}> <ShippingMethod {...shippingMethodProps[1]} /> </View>
        <View style={styles.shippingMethod}> <ShippingMethod {...shippingMethodProps[2]} /> </View>
        <View style={styles.shippingMethod}> <ShippingMethod {...shippingMethodProps[3]} /> </View>
    </View>
    <View style={styles.orderSummary}>
        <OrderSummary {...orderSummaryProps} />
    </View>
</View>

const styles = {
    orderSummary: {
        display: 'block'
    },
    shippingMethods: {
        paddingBottom: 8
    },
    shippingMethod: {
        marginTop: 8,
    }
}