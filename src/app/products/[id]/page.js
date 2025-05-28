import React from "react";

const ProductDetail = ({ params }) => {
    return (
        <div>
            <h1>Product Detail: {params.id}</h1>
            <p>This is the product detail page {params.id}</p>
        </div>
    );
};

export default ProductDetail;
