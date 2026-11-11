import { useEffect, useState } from "react"
import { getProducts } from "../mocks/AsyncMock" //asi importamos lo que exportamos con export solo
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"


//1. DECLARAR EL COMPONENTE

const ItemListContainer = ({greeting})=> {
    //const {greeting}=props
    const [data, setData]=useState([])

    const {type} = useParams()
 console.log(type, 'categoria')
 
    useEffect(()=>{
        getProducts()
        .then((res)=>{
            if(type){
                //filtrar
                setData(res.filter((prod)=> prod.category === type))
            }else{
                //no filtro
                setData(res)
            }
        })
        //estar a la escucha del cambio de categoria
    },[type])
   
//2. retorno JSX
// console.log('ItemListContainer', data)
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