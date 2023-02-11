import React, {useState, useContext } from 'react'
import '@styles/Header.scss'
import TheMenu from '@components/Menu.jsx'
import Menu from '@icons/icon_menu.svg'
import MyOrder from '@containers/MyOrder.jsx'
import Cart from '@icons/icon_shopping_cart.svg'
import AppContext from '@context/AppContext.js'
import Logo from '@logos/logo_yard_sale.svg'

const Header = () => {
    const [toggle, setToggle] = useState(false); /* Desplegar el menu*/
    const [toggleOrders,setToggleOrders] = useState(false); /*Desplegar las ordenes*/
    const { state:{cart}} = useContext(AppContext);

    const handleToggle = () => {
        setToggle(prevToggle => !prevToggle);
    }

    return (
    <nav>
        <img src={Menu} alt="menu" className="menu" />
        <div className="navbar-left">
            <img src={Logo} alt="logo" className="nav-logo" />
            <ul>
                <li>
                <a href="/">All</a>
                </li>
                <li>
                <a href="/">Clothes</a>
                </li>
                <li>
                <a href="/">Electronics</a>
                </li>
                <li>
                <a href="/">Furnitures</a>
                </li>
                <li>
                <a href="/">Toys</a>
                </li>
                <li>
                <a href="/">Others</a>
                </li>
            </ul>
        </div>
        <div className="navbar-right">
            <ul>
                <li className="navbar-email" onClick={handleToggle}>
                    platzi@example.com
                </li>
                <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
                <img src={Cart} alt="shopping cart" />
                {cart.length > 0 ? <div> {cart.length}</div> : null }
                </li>
            </ul>
        </div>
        {toggle ? <TheMenu /> : null}
        {toggleOrders && <MyOrder setToggleOrders={setToggleOrders} />}
    </nav>
    );
}

export default Header;