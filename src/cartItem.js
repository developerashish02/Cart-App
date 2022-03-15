import React from "react";


class CartItem extends React.Component {
	// Adding state to the componets
	constructor() {
		super();
		this.state = {
			price: 999,
			title: "Phone",
			qty: 0,
			img: "",
		};

	}

	// increase Quantity 
	increaseQuantity = () => {
		// render the the increse the quantity using setState 
		this.setState((prevState) => {
			return {
				qty: prevState.qty + 1,
			}
		})
	}

	// decreaseQuantity 
	decreaseQuantity = () => {
		const { qty } = this.state;
		if (qty === 0) {
			return;
		}
		// render the the decrease the quantity using setState 
		this.setState((prevState) => {
			return {
				qty: prevState.qty - 1,
			}
		})
	}
	render() {
		const { price, title, qty } = this.state;
		return (
			<div className="cart-item">
				<div className="left-block">
					<img style={styles.image} />
				</div>
				<div className="right-block">
					<div style={{ fontSize: 25 }}>{title}</div>
					<div style={{ color: "#777" }}> Rs {price} </div>
					<div style={{ color: "#777" }}> Qty {qty}</div>
					<div className="cart-item-actions">
						{/* increase the quantity  */}
						<img
							src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png "
							alt="Add item "
							className="action-icons "
							onClick={this.increaseQuantity}
						/>

						{/* decresase the quantity  */}
						<img
							alt="remove item"
							className="action-icons"
							src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png"
							onClick={this.decreaseQuantity}
						/>

						{/* remove cart item   */}
						<img
							src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png "
							alt="delete item "
							className="action-icons "
						/>
					</div>
				</div>
			</div>
		);
	}
}

// Applied Styles
const styles = {
	image: {
		height: 110,
		width: 110,
		borderRadius: 4,
		background: "#ccc",
	},
};

export default CartItem;
