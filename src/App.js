import "./App.css";
import Cart from "./cart";
import Navbar from "./Navbar";
import React from 'react'

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			products: [
				{
					price: 74900,
					title: "Apple iPhone 13",
					qty: 1,
					img: 'https://m.media-amazon.com/images/I/71gm8v4uPBL._SX522_.jpg',
					id: 1,
				},
				{
					price: 499,
					title: "Apple watch series 7",
					qty: 1,
					img: 'https://i.guim.co.uk/img/media/0a8586ac1723de4bcc878e30eb9dd6f970147457/206_408_4967_2981/master/4967.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=1ffaa0730b7d432a59c2a7301f82a65f',
					id: 2,
				},
				{
					price: 64900,
					title: "Apple i pad pro",
					qty: 1,
					img: "https://m.media-amazon.com/images/I/81Y5WuARqpS._AC_SX342_.jpg",
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

	// count total quantity 
	getCartCount = () => {
		const { products } = this.state;
		let count = 0;

		products.forEach((product) => {
			count += product.qty;
		})

		return count;
	}

	// Total price of the cart Item 
	getCartTotal = () => {
		const { products } = this.state;

		let Carttotal = 0;
		products.map((product) => {
			Carttotal = Carttotal + product.qty * product.price;
		})

		return Carttotal;
	}

	render() {
		const { products } = this.state;
		return (
			<div className="App">
				<Navbar count={this.getCartCount()} />
				<Cart
					products={products}
					onIncreaseQuantity={this.handleIncreaseQuantity}
					onDecreaseQuantity={this.handleDecreaseQuantity}
					onDeleteItem={this.handleDeleteProduct}
				/>

				{/* Total price */}
				<div style={style.total}>
					Total:{this.getCartTotal()}
				</div>
			</div>
		);
	}

}

const style = {
	total: {
		fontSize: 25,
		padding: 20,
		background: 'black',
		color: 'white',
		height: 20,
		
	}
}

export default App;
