import React from "react"
import Product from "ecommerce-product"
import ProductProxy from "./index"
import {expect} from "chai"

describe("Ecommerce Product Proxy", () => {
    it("assert properties", () => {
        const props = {
            title: "Title",
            byLine: "By Line",
            actualPrice: "Actual Price",
            retailPrice: "Retail Price",
            deliveryDate: "Delivery Date",
            rating: "Rating",
            productFeatures: "Product Features"
        }

        const proxy = ProductProxy(<Product {...props} />)
        expect(proxy.title).to.equal(props.title)
        expect(proxy.byLine).to.equal(props.byLine)
        expect(proxy.actualPrice).to.equal(props.actualPrice)
        expect(proxy.retailPrice).to.equal(props.retailPrice)
        expect(proxy.deliveryDate).to.equal(props.deliveryDate)
        expect(proxy.rating).to.equal(props.rating)
        expect(proxy.productFeatures).to.equal(props.productFeatures)
    })
})