import { useEffect, useState } from "react"
import { getProducts } from "../mocks/AsyncMock" //asi importamos lo que exportamos con export solo
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"
import LoaderComponent from "./LoaderComponent"


//1. DECLARAR EL COMPONENTE

const ItemListContainer = ({greeting})=> {
    //const {greeting}=props
    const [data, setData]=useState([])
    const [loader, setLoader]= useState(false)

    const {type} = useParams()
 console.log(type, 'categoria')


//FIREBASE
 useEffect(()=>{
    //PRENDER EL LOADER
    setLoader(true)
    //1. CONECTAR A NUESTRA COLL
    const prodColl = type 
    ? query(collection(db, "products"), where("category", "==", type)) 
    : collection(db, "products")

    //2. Pedir los datos
    getDocs(prodColl)
    .then((res)=> {
        const list = res.docs.map((doc)=>{
            return {
                id:doc.id,
                ...doc.data()
            }
        })
       setData(list)
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoader(false))
       
    },[type])

 //PROMESA
    // useEffect(()=>{
    //     getProducts()
    //     .then((res)=>{
    //         if(type){
    //             //filtrar
    //             setData(res.filter((prod)=> prod.category === type))
    //         }else{
    //             //no filtro
    //             setData(res)
    //         }
    //     })
    //     //estar a la escucha del cambio de categoria
    // },[type])
   
//2. retorno JSX
// console.log('ItemListContainer', data)
return (
    <>
    {
        loader 
        ? <LoaderComponent text={type ? 'Cargando Categoría...' : 'Cargando Productos'}/> 
        :  <div>
        <h1>{greeting} {type && <span>{type}</span>}</h1>
       <ItemList data={data}/>
    </div>
    }
    </>
  
)

}
//3.EXPORTAR PARA PODER USARLO

export default ItemListContainer