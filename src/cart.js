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

    // increse Quantity
    handleIncreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
        // set state
        this.setState({
            products: products,
        });
    };

    // decrease Quantity
    handleDecreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        // whan the quantity is zero we return
        if (products[index].qty === 0) {
            return;
        }

        products[index].qty -= 1;
        // set state
        this.setState({
            products: products,
        });
    };

    // handleDeleteProduct
    handleDeleteProduct = (id) => {
        const { products } = this.state;
        const items = products.filter((item) => item.id !== id);
        // return the [] contain {}
        this.setState({
            products: items,
        });

    };

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((products) => {
                    return (
                        <CartItem
                            products={products}
                            key={products.id}
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                            onDeleteItem={this.handleDeleteProduct}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Cart;
