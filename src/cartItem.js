import React from "react";

class CartItem extends React.Component {
	render() {
		const { price, title, qty } = this.props.products;
		// get the All function and properties
		const { products, onIncreaseQuantity, onDecreaseQuantity, onDeleteItem } =
			this.props;

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
							onClick={() => onIncreaseQuantity(products)}
						/>

						{/* decresase the quantity  */}
						<img
							alt="remove item"
							className="action-icons"
							src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png"
							onClick={() => onDecreaseQuantity(products)}
						/>

						{/* delete cart item   */}
						<img
							src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png "
							alt="delete item "
							className="action-icons "
							onClick={() => onDeleteItem(products.id)}
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
