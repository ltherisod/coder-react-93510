import {useState, useEffect} from "react"

const ItemCount = ({initial, stock})=> {
// const [variableDeEstado, funcionModificadora]= useState(VALORINICIAL)
const [count, setCount] =useState(initial)


const sumar = ()=> {
    // solo suma si todavía no llegó al stock
    if (count < stock) {
        setCount( count + 1)
    }
}
const restar = ()=> {
    // solo resta si es mayor a 0, así nunca queda negativo
    if (count > 0) {
        setCount( count - 1)
    }
}




    return (
        <div className="d-flex align-items-center gap-3 flex-wrap">
            <div className="input-group w-auto">
                <button className="btn btn-outline-danger fw-bold px-3" onClick={restar}>-</button>
                <span className="input-group-text bg-body fw-bold px-4">{count}</span>
                <button className="btn btn-outline-success fw-bold px-3" onClick={sumar}>+</button>
            </div>
            <button
                className="btn btn-primary fw-semibold px-4 flex-grow-1"
                disabled={stock === 0 || count === 0}
            >
                Comprar
            </button>
        </div>
    )
}

export default ItemCount