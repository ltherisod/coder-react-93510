import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'

const CartItem = ({ compra }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <tr>
            <td>
                <img src={compra.img} alt={compra.name} style={{ width: '5rem' }} />
            </td>
            <td>{compra.name}</td>
            <td className='text-center'>{compra.quantity}</td>
            <td className='text-end'>${compra.price},00</td>
            <td className='text-end'>${compra.price * compra.quantity},00</td>
            <td className='text-center'>
                <Button variant='danger' size='sm' onClick={() => removeItem(compra.id)}>X</Button>
            </td>
        </tr>
    )
}

export default CartItem
