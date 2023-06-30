import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
    const numProducts = 5;
    return (
        <div className="cart-widget">
            <i className="fas fa-shopping-cart shopping-cart"></i>
            <span className="cart-widget-count">{numProducts}</span>
        </div>
    );
};

export default CartWidget;
