import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'


import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'

const Checkout = () => {
    const [secondMail, setSecondMail] = useState('')
    const [user, setUser] = useState({})
    const [orderId, setOrderId] = useState('')
      const [loading, setLoading] = useState(false)
      const [error, setError]= useState(null)
    const { cart, total, clear } = useContext(CartContext)
    const userData = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value
            }
        )

    }


    const finalizarCompra = (e) => {
        //prev la carga
        e.preventDefault()
        // validacion
        if(!user.name || !user.lastname || !user.address || !user.email || !secondMail){
            setError('Por favor complete los campos')
        }else if ( user.email !== secondMail){
            setError('Los correos no coinciden')
        }else{
            setError(null)
            setLoading(true)
            let order = {
                comprador: user,
                compra: cart,
                total: total(),
                fecha: serverTimestamp()
            }
            const orderColl = collection(db, "orders")
            addDoc(orderColl, order)
                .then((res) => {
                    setOrderId(res.id)
                    clear()
                })
                .catch((err)=> console.log(err))
                .finally(()=> setLoading(false))
        }


    }

    if (!cart.length  && !orderId){
        return <EmptyCart/>
    }

    return (
        <div className='container my-5' style={{ maxWidth: '640px' }}>
            {
                orderId
                    ? <div className='cars shadow border-0 text-center p-5'>
                        <h1> Muchas gracias por tu compra!</h1>
                        <p>La ordser {orderId}, se generó correctamente</p>
                        <Link className='btn btn-dark' to='/'>Volver a Home</Link>
                    </div>

                    : <div className='card shadow border-0 p-4 p-md-5'>
                        <h2 className='fw-bold mb-1'>Finalizar compra</h2>
                        <p className='text-body-secondary mb-4'>Completa con tus datos para terminar tu compra</p>

                        {error && <div className='alert alert-danger py-2' role='alert'>{error}</div>}

                        <form onSubmit={finalizarCompra}>
                            <div className='row g-3 mb-3'>
                                <div className='col-md-6'>
                                    <label htmlFor='name' className='form-label'>Nombre</label>
                                    <input id='name' name="name" className='form-control' type="text" placeholder='Ingrese su nombre' onChange={userData} />
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor='lastname' className='form-label'>Apellido</label>
                                    <input id='lastname' name="lastname" className='form-control' type="text" placeholder='Ingrese su apellido' onChange={userData} />
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='address' className='form-label'>Dirección</label>
                                <input id='address' name="address" className='form-control' type="text" placeholder='Ingrese su dirección' onChange={userData} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='email' className='form-label'>Email</label>
                                <input id='email' name="email" className='form-control' type="email" placeholder='Ingrese su email' onChange={userData} />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='secondEmail' className='form-label'>Repetir email</label>
                                <input id='secondEmail' name="secondEmail" className='form-control' type="email" placeholder='Repita su email' onChange={(e) => setSecondMail(e.target.value)} />
                            </div>
                            <button className='btn btn-success w-100 fw-semibold' type='submit' disabled={loading} >{loading ? 'Procesando Compra..' : "Terminar Compra"}</button>
                        </form>
                    </div>
            }

        </div>
    )
}

export default Checkout