import React, { useContext } from 'react';
import './Item.css';
import AppContext from '../../context/AppContext';
import addToCartImage from '../../assets/addToCart.svg';

const Item = ({product}) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className="Item">
			<img src={product.image} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={ () => handleClick (product)} >
					<img src={addToCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default Item;