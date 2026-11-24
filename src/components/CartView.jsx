import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap'
import CartItem from './CartItem'

const CartView = () => {
    const { cart, clear, total } = useContext(CartContext)

    return (
        <div className='container my-4'>
            <h2>Tu carrito 🛒</h2>
            <Table striped bordered hover responsive className='align-middle'>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th className='text-center'>Cantidad</th>
                        <th className='text-end'>Precio unitario</th>
                        <th className='text-end'>Subtotal</th>
                        <th className='text-center'>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((compra) => <CartItem key={compra.id} compra={compra} />)}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4} className='text-end fw-bold'>Total a pagar:</td>
                        <td className='text-end fw-bold'>${total()},00</td>
                        <td></td>
                    </tr>
                </tfoot>
            </Table>
            <div className='d-flex justify-content-between'>
                <Button variant='danger' onClick={clear}>Vaciar carrito</Button>
                <button className='btn btn-success'>Terminar compra</button>
            </div>
        </div>
    )
}

export default CartView
