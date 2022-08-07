import React, { useContext, useState } from 'react'
import AppContext from '../../context/AppContext'
import shoppingCart from '../../assets/icon_shopping_cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    const [toggleOrders, setToggleOrders] = useState(false);
    const {state:{cart}}=useContext(AppContext);
  return (
      <div
          className="navbar-shopping-cart"
          onClick={() => setToggleOrders(!toggleOrders)}
      >
          <img src={shoppingCart} alt="shopping cart" />
          {cart.length > 0 ? <div>{cart.length}</div> : null}

      </div>
  )
}

export default CartWidget