import React from 'react';
import { useCart } from './hooks/CartContext';
import { useNavigate } from 'react-router-dom';
import "./css/CartPage.css"; // Ensure correct import

function CartPage() {
    const { cart, removeFromCart, clearCart } = useCart(); // Access the cart and remove/clear functions
    const navigate = useNavigate(); // Initialize useNavigate

    if (cart.length === 0) {
        return <div className="empty-cart-message">Your cart is empty.</div>; // Add a class for styling
    }

    // Calculate total amount
    const totalAmount = cart.reduce((total, item) => {
        return total + (item.discountedPrice || item.price) * item.quantity; // Multiply by quantity
    }, 0).toFixed(2); // Format to 2 decimal places

    const handleCheckout = () => {
        clearCart(); // Clear the cart when checking out
        navigate('/checkout-success'); // Navigate to the checkout success page
    };

    return (
        <div className="cart-page"> {/* Add class for styling */}
            <h1>Shopping Cart</h1>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <img src={item.image.url} alt={item.image.alt || item.title} />
                        <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                        {item.discountedPrice && (
                            <>
                                <p>
                                    Discounted Price: ${(item.discountedPrice * item.quantity).toFixed(2)}
                                </p>
                                <p>
                                    Discount: {((item.price - item.discountedPrice) / item.price * 100).toFixed(0)}%
                                </p>
                            </>
                        )}
                        <p>Quantity: {item.quantity}</p> {/* Display quantity */}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button> {/* Remove button */}
                    </li>
                ))}
            </ul>
            <h2>Total Amount: ${totalAmount}</h2>
            <button className="checkout-button" onClick={handleCheckout}>Checkout</button> {/* Checkout button */}
        </div>
    );
}

export default CartPage;
