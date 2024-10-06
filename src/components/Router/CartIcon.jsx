
import React from 'react';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import styles from './CartIcon.module.css';
import { useCart } from '../hooks/CartContext'; // Import useCart to access cart data

function CartIcon() {
    const { cart } = useCart(); // Access the cart

    // Calculate total item count in the cart
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className={styles.cartIcon}>
            <Link to="/cart" className={styles.icon}>
                <Tooltip title="Cart">
                    <IconButton>
                        <LocalMallTwoToneIcon color="secondary" />
                        {itemCount > 0 && (
                            <span className={styles.badge}>{itemCount}</span>
                        )}
                    </IconButton>
                </Tooltip>
            </Link>
        </div>
    );
}

export default CartIcon;
