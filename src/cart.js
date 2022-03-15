import React from "react";
import CartItem from "./cartItem";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: "Mobail Phone",
                    qty: 1,
                    img: "",
                    id: 1,
                },
                {
                    price: 499,
                    title: "Watch",
                    qty: 11,
                    img: "",
                    id: 2,
                },
                {
                    price: 15000,
                    title: "Laptop",
                    qty: 100,
                    img: "",
                    id: 3,
                },
            ],
        };
    }

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((products) => {
                    return <CartItem products={products} key={products.id} />;
                })}
            </div>
        );
    }
}

export default Cart;
