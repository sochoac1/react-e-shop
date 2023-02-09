import React, { useContext } from 'react';
import AppContext from '@context/AppContext.js'
import '@styles/OrderItem.scss';

import CloseIcon from '@icons/icon_close.png'
import { index } from 'mathjs';

const OrderItem = ({ product, indexValue }) => {
	// const { indexValue } = product;
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = index => {
		removeFromCart(index);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src={CloseIcon} alt="close" onClick={()=>handleRemove(indexValue)}/>
		</div>
	);
}

export default OrderItem;