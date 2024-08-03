import React from 'react';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import styles from './CartIcon.module.css';


function CartIcon(itemCount) {

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
