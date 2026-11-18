import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router";

const Cart = () => {
  const { cart, deleteProductById, deleteCart } = useContext(CartContext);

  if( cart.length === 0 ){
    return (
      <div>
        <h2>No hay productos en el carrito 😢</h2>
        <Link to='/'>Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div>
      <h2>Productos en el carrito</h2>
        {
          cart.map((productCart) => (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <img src={productCart.image} alt="" width={100} />
              <p>{productCart.name}</p>
              <p>precio c/u: ${productCart.price}</p>
              <p>cantidad: {productCart.quantity}</p>
              <p>precio parcial: ${productCart.quantity * productCart.price}</p>
              <button onClick={ () => deleteProductById(productCart.id)} >eliminar</button>
            </div>
          ))
        }

        <button onClick={deleteCart} >Vaciar carrito</button>
    </div>
  )
}

export default Cart