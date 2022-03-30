import "./App.css";
import Cart from "./cart";
import Navbar from "./Navbar";
import React from 'react'
import { collection, getDocs, onSnapshot, addDoc } from 'firebase/firestore';
import { db } from "./firebase-config";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			products: [],
			loading: "true",
		};
	}
	// fetching data from firestore 
	componentDidMount() {
		onSnapshot(collection(db, 'products'), (snapshort) => {
			const prod = snapshort.docs.map((doc) => {
				const data = doc.data()
				data['id'] = doc.id
				return data
			})
			this.setState({
				products: prod,
				loading: false,
			})
		})
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

	// handle Add 
	handleAddCart = () => {
		const addCollection = collection(db, 'products')
		addDoc(addCollection, {
			img: '',
			price: 29999,
			qty: 5,
			title: "key board",
		})

			.then(responce => {
				console.log(responce);
			})
			.catch((error) => {
				alert("Product not be added")
			})
	}

	render() {
		const { products, loading } = this.state;
		return (
			<div className="App">
				<Navbar count={this.getCartCount()} />
				<Cart
					products={products}
					onIncreaseQuantity={this.handleIncreaseQuantity}
					onDecreaseQuantity={this.handleDecreaseQuantity}
					onDeleteItem={this.handleDeleteProduct}
				/>

				{loading && <h1>Loading Product...</h1>}
				{/* Add product */}
				<button
					onClick={this.handleAddCart}
					style={{
						padding: 15, fontSize: 20, backgroundColor: " #555555", color: 'white',
						margin: 15
					}}
				>Add Product</button>

				{/* Total price */}
				<div style={style.total}>
					Total Price : {this.getCartTotal()}
				</div>
			</div>
		);
	}

}

// style added for footer 
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

