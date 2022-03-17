import React from "react";
import CartItem from "./cartItem";

const Cart = (props) => {
    const { products } = props;
    return (
        <div className="cart">
            {products.map((products) => {
                return (
                    <CartItem
                        products={products}
                        key={products.id}
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onDeleteItem={props.onDeleteItem}
                    />
                );
            })}
        </div>
    );

}

export default Cart;
