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
					price: 999,
					title: "Mobail Phone",
					qty: 1,
					img: 'https://images.unsplash.com/photo-1581795686346-b0f855c430e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iYWlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
					id: 1,
				},
				{
					price: 499,
					title: "Watch",
					qty: 11,
					img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
					id: 2,
				},
				{
					price: 1500,
					title: "Laptop",
					qty: 100,
					img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
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
		background: 'cyan',
		color: 'green',
		height: 20,
		
	}
}

export default App;
