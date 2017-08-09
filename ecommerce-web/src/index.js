import React from "react"
import {render} from "react-dom"
import { View, Text, Image, StyleSheet } from 'react-primitives';
import Product from "ecommerce-product"

render(
    <Product />,
    document.getElementById("root")
)