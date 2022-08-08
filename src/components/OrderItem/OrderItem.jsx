import React, { useContext }from 'react';
import AppContext from '../../context/AppContext';
import './OrderItem.css';
import close from '../../assets/icon_close.png'

const OrderItem = (props) => {
	const { product, indexValue } = props
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (index) =>{
		removeFromCart(index);
	}
	return (
		<div className="OrderItem">
			<figure>
			<img src={product.image} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src={close}
			alt="close" 
			onClick={() => handleRemove(indexValue)}
			/>
		</div>
	);
}

export default OrderItem;