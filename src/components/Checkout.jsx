import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'


import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'

const Checkout = () => {


   

  return (
    <div className='container my-5' style={{ maxWidth: '640px' }}>
     <div className='card shadow border-0 p-4 p-md-5'>
            <h2 className='fw-bold mb-1'>Finalizar compra</h2>
            <p className='text-body-secondary mb-4'>Completa con tus datos para terminar tu compra</p>

           

            <form onSubmit={finalizarCompra}>
                <div className='row g-3 mb-3'>
                    <div className='col-md-6'>
                        <label htmlFor='name' className='form-label'>Nombre</label>
                        <input id='name' name="name" className='form-control' type="text" placeholder='Ingrese su nombre' />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='lastname' className='form-label'>Apellido</label>
                        <input id='lastname' name="lastname" className='form-control' type="text" placeholder='Ingrese su apellido' />
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor='address' className='form-label'>Dirección</label>
                    <input id='address' name="address" className='form-control' type="text" placeholder='Ingrese su dirección' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input id='email' name="email" className='form-control' type="email" placeholder='Ingrese su email' />
                </div>
                <div className='mb-4'>
                    <label htmlFor='secondEmail' className='form-label'>Repetir email</label>
                    <input id='secondEmail' name="secondEmail" className='form-control' type="email" placeholder='Repita su email' />
                </div>
                <button className='btn btn-success w-100 fw-semibold' type='submit' >Terminar Compra</button>
            </form>
        </div>
    
    </div>
  )
}

export default Checkout