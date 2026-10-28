import { useEffect, useState } from "react"
import { getProducts } from "../mocks/AsyncMock" //asi importamos lo que exportamos con export solo
import ItemCount from "./ItemCount" //asi importamos con el export default
import ItemList from "./ItemList"


//1. DECLARAR EL COMPONENTE

const ItemListContainer = ({greeting})=> {
    //const {greeting}=props
    const [data, setData]=useState([])

    useEffect(()=>{
        getProducts()
        .then((res)=> setData(res))
    },[])
   
//2. retorno JSX
console.log('ItemListContainer', data)
return (
    <div>
        <h1>{greeting}</h1>
        {/* render de lista */}
       {/* {data.map((prod)=> <p key={prod.id}>{prod.name}</p>)} */}
       <ItemList data={data}/>
    </div>
)

}
//3.EXPORTAR PARA PODER USARLO

export default ItemListContainer