import React from "react";


class CartItem extends React.Component {

	render() {
		console.log(this.props);
		const { price, title, qty } = this.props.products;
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
							onClick={() => this.props.onIncreaseQuantity(this.props.products)}
						/>

						{/* decresase the quantity  */}
						<img
							alt="remove item"
							className="action-icons"
							src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png"
							onClick={() => this.props.onDecreaseQuantity(this.props.products)}
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
