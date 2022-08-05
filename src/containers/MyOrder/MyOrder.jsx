import React, { useContext } from 'react';
import OrderItem from '../../components/OrderItem/OrderItem';
import AppContext from '../../context/AppContext'
import './MyOrder.css';
import arrow from '../../assets/arrow.svg';

const MyOrder = () => {
	const { state } = useContext(AppContext)
	return (
		<div className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product = {product} key = {`orderItem-${product.id}`} />
				))}
				<OrderItem />
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</div>
	);
}

export default MyOrder;