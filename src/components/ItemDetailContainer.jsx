import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mocks/AsyncMock'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})

    useEffect(() => {
        getOneProduct('02')
            .then((res) => setProductDetail(res))
            .catch((err) => console.log(err))
    }, [])
    return (
        <>
            <ItemDetail productDetail={productDetail} />
        </>
    )
}

export default ItemDetailContainer