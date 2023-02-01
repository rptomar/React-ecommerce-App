import React, { useState } from "react";
import ProductModal from "./ProductModal";


const Product = ({ product }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <li>
            <div
                onClick={() => setShowModal(!showModal)}
                onMouseEnter={() => setShowModal(!showModal)}
                onMouseLeave={() => setShowModal(!showModal)}
            >
                {product.name}
            </div>
            {showModal && (
                <ProductModal
                    product={product}
                    setShowModal={setShowModal}
                    showModal={showModal}
                />
            )}
        </li>
    );
};
export default Product;