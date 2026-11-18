import { createContext, useState } from "react";

//creamos el context de nuestro carrito
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProductInCart = (newProduct) => {
    //si el producto se encuentra en el carrito, sumar sus cantidades

    //caso contrario agregarlo como nuevo
    setCart( [ ...cart, newProduct ] )
  }

  //  esta funcion debe devolver true si el producto ya se encuentra en el carrito
  // .some
  const isInCart = (productId) => {}

  const deleteProductById = (productId) => {
    const productsFiltered = cart.filter( (productCart) => productCart.id !== productId );
    setCart(productsFiltered);
  }

  const deleteCart = () => {
    setCart([]);
  }

  const totalQuantity = () => {
    const quantity = cart.reduce( (total, productCart) => total + productCart.quantity , 0);
    return quantity;
  }

  console.log(cart)

  return(
    <CartContext.Provider value={ { cart, addProductInCart, deleteProductById, deleteCart, totalQuantity } } >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }