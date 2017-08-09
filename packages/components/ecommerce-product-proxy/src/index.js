import React from "react"
import ReactShallowRenderer from "react-test-renderer/shallow"

export default (Product) => {
    const renderer = new ReactShallowRenderer();
    renderer.render(Product);
    
    const {props:{children}} = renderer.getRenderOutput();

    const title = children[0].props.children;
    const byLine = children[1].props.children;
    const actualPrice = children[2].props.children;
    const retailPrice = children[3].props.children;
    const deliveryDate = children[4].props.children;
    const rating = children[5].props.children;
    const productFeatures = children[6].props.children;

    return {
        title,
        byLine,
        actualPrice,
        retailPrice,
        deliveryDate,
        rating,
        productFeatures
    }
}