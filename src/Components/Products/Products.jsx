import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useCart } from '../data/CartContext';
import productsData from '../data/data'; // Importing the products data
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import "./Products.css"; // Import the custom CSS file

function Products() {
  const { addToCart, addToWishlist } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
      handleClose();
    }
  };

  const handleAddToWishlist = () => {
    if (selectedProduct) {
      addToWishlist(selectedProduct);
      handleClose();
    }
  };

  return (
    <div className="d-flex flex-wrap">
      {productsData.map(product => (
        <Card key={product.id} style={{ width: '18rem', marginTop: '6rem' }}>
          <Card.Img variant="top" src={product.image} alt={product.name} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              Price: ${product.price.toFixed(2)}
            </Card.Text>
            <Button variant="primary" onClick={() => handleShow(product)}>
              View More
            </Button>
          </Card.Body>
        </Card>
      ))}

      {/* Modal for displaying product details */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div className="image-container">
            <img src={selectedProduct?.image} alt={selectedProduct?.name} style={{ width: '100%' }} />
          </div>
          <div className="info-container">
            <h5>Price: ${selectedProduct?.price.toFixed(2)}</h5>
            <p>Description: {selectedProduct?.description || 'No description available.'}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddToCart}>
            <FaCartPlus /> Add to Cart
          </Button>
          <Button variant="outline-danger" onClick={handleAddToWishlist}>
            <FaHeart /> Add to Wishlist
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Products;