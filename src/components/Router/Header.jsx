import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import CartIcon from "./CartIcon";
import logo from "./../../icons/logo.png";
import { useCart } from '../hooks/CartContext'; // Import useCart

function Header() {
    const { cart } = useCart(); // Get cart items from context

    return (
        <header>
            <div>
                <Link to="/">
                    <img src={logo} alt="Company Logo" style={{ width: '60px', height: 'auto' }} /> 
                </Link>
            </div>
            <Nav/>
            <CartIcon itemCount={cart.length} /> {/* Pass the item count to CartIcon */}
        </header>
    );
}

export default Header;
