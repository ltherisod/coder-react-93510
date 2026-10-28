import {useState, useEffect} from "react"

const ItemCount = ()=> {
// const [variableDeEstado, funcionModificadora]= useState(VALORINICIAL)
const [count, setCount] =useState(1)
const [buy, setBuy]= useState(false)

const sumar = ()=> {
    setCount( count + 1)
}
const restar = ()=> {
    setCount( count - 1)
}
console.log('ItemCount')
const shop = ()=> {
    setBuy(!buy)
}

//useEffect(()=>{//logica},[array de dependencias])

//1. SIN EL ARRAY DE DEPENDENCIAS (SE EJECUTA SIMPRE USO: CASI NUNCA)
useEffect(()=>{
    console.log('ME EJECUTO SIEMPRE!')
})

//2. CON EL ARRAY DE DEPENDENCIAS vacio(SE EJECUTA UNA SOLA VEZ, USO: CASI SIEMPRE)

useEffect(()=> {
    console.log('ME EJECUTO UNA SOLA VEZ')
},[])

//3. CON EL ARRAY DE DEPENDENCIAS ESCUCHANDO (DATOS) (USA : CASI SIEMPRE, SE EJECUTA CUANDO MONTA EL COMPONENTE Y SIEMPRE QUE LO QUE ESCUCHE SE ACTUALICE)

useEffect(()=> {
    //logica (funciones, llamados a apis)
    console.log('Me ejecuto cuando monta el componente y siempre que BUY cambie', buy)
},[buy])

    return (
        <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span className="btn">{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
            <button className="btn btn-primary" onClick={shop}>Comprar</button>
        </div>
    )
}

export default ItemCount