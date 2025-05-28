import React from "react";

const BlogDetail = ({ params }) => {
    return (
        <div>
            <h1>Blog Detail: {params.slug}</h1>
            <p>This is the product detail page {params.slug}</p>
        </div>
    );
};

export default BlogDetail;