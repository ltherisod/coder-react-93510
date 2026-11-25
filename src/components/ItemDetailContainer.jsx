import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mocks/AsyncMock'
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const [loading, setLoading]= useState(true)

//     const params = useParams()
// console.log(params, 'useParams')
   const {id} = useParams()
   const navegar = useNavigate()
console.log(id, 'useParams')

//FIREBASE

useEffect(()=>{
//crear la ref, conectarse
const docRef= doc(db, "products", id)
//pido data
getDoc(docRef)
.then((res)=>{
    if(res.data()){
        setProductDetail({id:res.id, ...res.data()})
    }else{
        navegar('/error')
    }
})
.catch((err)=> navegar('/error'))
.finally(()=> setLoading(false))
},[id])

//PROMESA
//    useEffect(() => {
//         getOneProduct(id)
//             .then((res) => setProductDetail(res))
//             .catch((err) => navegar('/error'))
//     }, [id])





    return (
        <>
            {loading 
            ? <LoaderComponent text='Cardango detalle'/> 
            : <ItemDetail productDetail={productDetail} />}
        </>
    )
}

export default ItemDetailContainer