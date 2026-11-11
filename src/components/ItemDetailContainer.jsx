import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mocks/AsyncMock'
import { useParams, useNavigate } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})

//     const params = useParams()
// console.log(params, 'useParams')
   const {id} = useParams()
   const navegar = useNavigate()
console.log(id, 'useParams')
//PRE ENTREGA 5 (NAVEGACION)
   useEffect(() => {
        getOneProduct(id)
            .then((res) => setProductDetail(res))
            .catch((err) => navegar('/error'))
    }, [id])


    // PRE ENTREGA 4
    // useEffect(() => {
    //     getOneProduct('02')
    //         .then((res) => setProductDetail(res))
    //         .catch((err) => console.log(err))
    // }, [])


    return (
        <>
            <ItemDetail productDetail={productDetail} />
        </>
    )
}

export default ItemDetailContainer