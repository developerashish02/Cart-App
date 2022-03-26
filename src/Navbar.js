import React from 'react';
const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>

                {/* Cart logo */}
                <img src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
                    alt="nav-cart-icon"
                    style={styles.cartIcon}
                />
                {/* Count of the cart items */}
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )

}
const styles = {
    cartIcon: {
        height: 42,
        marginRight: 20,
        top: 10
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative',
        right: 10
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
};

export default Navbar; 