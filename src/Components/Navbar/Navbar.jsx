import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useCart } from '../data/CartContext';
import { FaCartPlus, FaHeart } from 'react-icons/fa';

function Navigation() {
  const { cartItems = [], wishlistItems = [] } = useCart(); // Provide default empty array

  return (
    <Navbar collapseOnSelect expand="lg" className="fixed-top bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Alberto</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/technology">Technology</Nav.Link>
            <NavDropdown title="Explore" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/products">Products</NavDropdown.Item>
              <NavDropdown.Item href="/technology">Technology</NavDropdown.Item>
              <NavDropdown.Item href="/galleries">Gallery</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/support">Support</Nav.Link>
            <Nav.Link eventKey={2} href="/contact">Contact</Nav.Link>
            <Nav.Link href="/cart">
              <FaCartPlus />
              ({cartItems.length})
            </Nav.Link>
            <Nav.Link href="/wishlist">
              <FaHeart />
              ({wishlistItems.length})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;