import React, { useContext } from 'react';
import AppContext from '@context/AppContext.js'
import '@styles/OrderItem.scss';

import CloseIcon from '@icons/icon_close.png'
import { index } from 'mathjs';

const OrderItem = ({ product }) => {
	// const { indexValue } = product;
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (item) => {
		removeFromCart(item);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src={CloseIcon} alt="close" onClick={()=>handleRemove(product)}/>
		</div>
	);
}

export default OrderItem;