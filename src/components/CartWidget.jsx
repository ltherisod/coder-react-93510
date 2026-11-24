import React, { useContext } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import Badge from 'react-bootstrap/Badge';
import { CartContext } from '../context/CartContext';
const CartWidget = () => {
   const {cart, cartQty}= useContext(CartContext)

  return (
    <div>
        <TiShoppingCart fontSize={'1.5rem'}/>
       {  cart.length > 0 && <Badge pill bg="danger">{cartQty()}</Badge>}
    </div>
  )
}

export default CartWidget