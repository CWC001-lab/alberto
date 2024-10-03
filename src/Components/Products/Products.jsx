import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useCart } from '../data/CartContext';
import productsData from '../Navbar/data'; // Importing the products data
import { FaCartPlus, FaHeart } from 'react-icons/fa';

function Products() {
  const { cartItems, addToCart, addToWishlist } = useCart();
  const [clickCounts, setClickCounts] = useState({});

  const handleAddToCart = (product) => {
    const currentCount = clickCounts[product.id] || 0;

    if (currentCount === 1) {
      alert(`${product.name} is already in your cart.`);
    } else {
      addToCart(product);
      setClickCounts({ ...clickCounts, [product.id]: 1 });
    }
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
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
            <Button variant="primary" onClick={() => handleAddToCart(product)}>
              <FaCartPlus />
            </Button>
            <Button variant="outline-danger" onClick={() => handleAddToWishlist(product)}>
              <FaHeart />
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Products;