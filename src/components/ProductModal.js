import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap"

const ProductModal = ({ product, setShowModal, showModal }) => {
    return (
        <Modal isOpen={showModal} toggle={() => setShowModal(!showModal)}>
            <ModalHeader toggle={() => setShowModal(!showModal)}>
                {product.name}
            </ModalHeader>
            <ModalBody>
                <p>{product.description}</p>
                <img src="product.image" alt={product.image} />
            </ModalBody>
        </Modal>
    );
};
export default ProductModal;