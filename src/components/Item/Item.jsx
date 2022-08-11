import React, { useContext, useEffect } from 'react';
import './Item.css';
import AppContext from '../../context/AppContext';
import addToCartImage from '../../assets/addToCart.svg';
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const Item = ({product}) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}
	useEffect( () => {
		const queryDb = getFirestore();
		const queryDoc = doc(queryDb, 'products', '9zG4pmDWHDv9sqQk5LGC');
		getDoc(queryDoc)
			.then(res => console.log(res))
	})

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