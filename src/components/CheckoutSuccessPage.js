import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutSuccessPage() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Order Successful!</h1>
            <p>Thank you for your purchase. Your order has been placed successfully.</p>
            <Link to="/">Go back to the store</Link>
        </div>
    );
}

export default CheckoutSuccessPage;
