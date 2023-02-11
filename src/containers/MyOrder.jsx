import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem.jsx';
import AppContext from '@context/AppContext.js'
import '@styles/MyOrder.scss';
import Flechita from '@icons/flechita.svg';

const MyOrder = () => {
	const { state:{cart} } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = cart.reduce(reducer, 0);
		return sum;
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={Flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{cart.length > 0? cart.map((product, index)=>(
					<OrderItem product={product} key={product.id} indexValue={index} />
				)): (<div className="cart-empty"> No tienes productos Agregados :( </div>)}
			</div>
			<div className="order">
				<p>
					<span>Total</span>
				</p>
				<p>${sumTotal()}</p>
			</div>
			<button className="primary-button">
				Checkout
			</button>
		</aside>
	);
}
export default MyOrder;