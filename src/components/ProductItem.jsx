import React, { useContext, useState, useEffect } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext.js'
import AddCart from '@icons/bt_add_to_cart.svg'
import AddedCart from '@icons/bt_added_to_cart.svg'

const ProductItem = ({product}) => {
	// Context
	const { addToCart, removeFromCart, state:{cart, lastIdRemoved} } = useContext(AppContext);

	//State atento de cambiar icono de addCart
	const [toggleIconCart, setToggleIconCart] = useState(false);

	//UseEffect que reacciona con la acción de removeFromCart, evita some(), solose haca cuando se remueva un item del cart
	useEffect(() => {
		function imRemoved() {
			if(lastIdRemoved === product.id){
				setToggleIconCart(false);
			}
		}
		imRemoved();
	}, [lastIdRemoved])

	//UseEffect primera carga del componente, se encarga de poner addCart 
	useEffect(() => {
		function imInCart(){
			if(cart.some(({id})=> id === product.id)) {
				setToggleIconCart(true);
			}
		}
		imInCart();
	}, [])

	const handleClick = item => {
		toggleIconCart ? removeFromCart(item) : addToCart(item);
		setToggleIconCart(!toggleIconCart);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>

					{	toggleIconCart ? (
						<img src={AddedCart} alt="" />
					) : (
						<img src={AddCart} alt="" />
					)

					}

				</figure>
			</div>
		</div>
	);
}

export default ProductItem;