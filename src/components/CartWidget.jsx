import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import Badge from 'react-bootstrap/Badge';
const CartWidget = () => {
  return (
    <div>
        <TiShoppingCart fontSize={'1.5rem'}/>
        <Badge pill bg="danger">5</Badge>
    </div>
  )
}

export default CartWidget