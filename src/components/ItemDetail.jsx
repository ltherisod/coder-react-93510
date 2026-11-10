import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({productDetail}) => {
  return (
    <div className='container my-5'>
      <div className='card shadow border-0 overflow-hidden'>
        <div className='row g-0 align-items-center'>
          <div className='col-md-6 bg-body-tertiary p-4 text-center'>
            <img
              src={productDetail.img}
              alt={productDetail.name}
              className='img-fluid rounded'
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

              <ItemCount stock={productDetail.stock} initial={1}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
