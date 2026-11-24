import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({productDetail}) => {
  const [purchase, setPurchase]= useState(false)
// const contexto = useContext(CartContext)

// console.log(contexto, 'contexto')
const {cart, addItem} = useContext(CartContext)

console.log(cart, 'contexto')
  const onAdd = (cantidad)=> {
    addItem(productDetail, cantidad)
    setPurchase(true)
  console.log('cantidad:', cantidad)
  }
  return (
    <div className='container my-5'>
      <div className='card shadow border-0 overflow-hidden'>
        <div className='row g-0'>
          <div className='col-md-6 bg-body-tertiary p-4 d-flex align-items-center justify-content-center'>
            <img
              src={productDetail.img}
              alt={productDetail.name}
              className='img-fluid rounded'
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </div>

          <div className='col-md-6'>
            <div className='card-body p-4 p-lg-5 d-flex flex-column gap-3'>
              <span className='badge text-bg-dark text-uppercase align-self-start'>
                {productDetail.category}
              </span>
              <h2 className='card-title fw-bold mb-0'>Detalle de: {productDetail.name}</h2>
              <p className='card-text text-body-secondary mb-0'>{productDetail.description}</p>
              <p className='fs-2 fw-bold text-primary mb-0'>${productDetail.price},00</p>
              <p className='text-success fw-semibold mb-0'>
                Stock: {productDetail.stock} unidades disponibles
              </p>

              <hr className='my-2' />

              {
                purchase
                  ? <div className='d-flex gap-3 flex-wrap'>
                      <Link className='btn btn-outline-dark flex-grow-1' to='/'>Seguir Comprando</Link>
                      <Link className='btn btn-dark flex-grow-1' to='/cart'>Ir al Carrito</Link>
                    </div>
                  : <ItemCount stock={productDetail.stock} initial={1} onAdd={onAdd} />
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
