import React from 'react';
import Item from '../../components/Item/Item';
import useGetProducts from '../../hooks/useGetProducts';
import './ItemList.css';

const API = 'https://fakestoreapi.com/products';

const ItemList = () => {
	const products = useGetProducts(API);

	return (
		<section className="main-container">
			<div className="ItemList">
				{products.map(product => (
					<Item product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export default ItemList;