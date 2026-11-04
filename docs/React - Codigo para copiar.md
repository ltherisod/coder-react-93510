# React - APIs, children y custom hooks

Clase guiada revisada. Todos los datos del recorrido y del detalle provienen de la misma API.

## Página 1 - El recorrido de esta clase

```text
API de productos
  -> función que obtiene y adapta los datos
  -> estado del catálogo
  -> sección visual con children
  -> lógica extraída a useProducts
```

## Página 4 - Responsabilidades actuales

```text
ItemListContainer -> obtiene y guarda los productos
ItemList          -> recorre el array con map
Item              -> muestra una tarjeta
Navbar            -> presenta la navegación
```

## Página 4 - Item.jsx / agregar la categoría debajo del nombre

```jsx
<p className="item-category">{prod.category}</p>
```

## Página 5 - Endpoint del catálogo / abrir en el navegador

```text
https://dummyjson.com/products/category/laptops?limit=6
```

## Página 5 - Forma abreviada / ejemplo para leer la estructura

```json
{
  "products": [
    {
      "id": 78,
      "title": "Laptop de ejemplo",
      "thumbnail": "https://servidor/imagen.webp",
      "price": 999.99,
      "category": "laptops",
      "description": "Información del producto",
      "stock": 7
    }
  ],
  "total": 5
}
```

## Página 6 - Consola del navegador / demostración del docente

```javascript
const response = await fetch(
  "https://dummyjson.com/products/category/laptops?limit=6"
);
console.log(response.status, response.ok);
const result = await response.json();
console.log(result.products);
```

## Página 6 - La comprobación antes de leer los datos

```javascript
if (!response.ok) {
  throw new Error("No pudimos cargar los productos.");
}
```

## Página 7 - Crear src/services/productsApi.js / archivo completo

```javascript
const API_URL =
  "https://dummyjson.com/products/category/laptops?limit=6";
export async function getProductsFromApi() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("No pudimos cargar los productos.");
  }
  const result = await response.json();
  if (!Array.isArray(result.products)) {
    throw new Error("La respuesta no contiene una lista de productos.");
  }
  return result.products.map((product) => ({
    id: product.id,
    name: product.title,
    image: product.thumbnail,
    price: product.price,
    category: product.category,
    description: product.description,
    stock: product.stock
  }));
}
```

## Página 8 - Estados del catálogo

```text
data = []       -> los productos disponibles para renderizar
loading = true  -> la consulta todavía no terminó
error = null    -> todavía no hay un error para mostrar
```

## Página 9 - ItemListContainer.jsx / reemplazar contenido completo

```jsx
import { useEffect, useState } from "react";
import { getProductsFromApi } from "../../services/productsApi";
import ItemList from "../ItemList/ItemList";
import "./itemlistcontainer.css";
const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let active = true;
    const loadProducts = async () => {
      try {
        const products = await getProductsFromApi();
        if (active) setData(products);
      } catch (error) {
        if (active) setError(error.message);
      } finally {
        if (active) setLoading(false);
      }
    };
    loadProducts();
    return () => { active = false; };
  }, []);
  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p role="alert">{error}</p>;
  if (data.length === 0) return <p>No hay productos disponibles.</p>;
  return (
    <div className="item-list-container">
      <h2 className="container-title">{greeting}</h2>
      <ItemList data={data} />
    </div>
  );
};
export default ItemListContainer;
```

## Página 11 - Crear src/components/Section/Section.jsx / archivo completo

```jsx
import "../ItemListContainer/itemlistcontainer.css";
const Section = ({ title, children }) => {
  return (
    <section className="item-list-container">
      <h2 className="container-title">{title}</h2>
      {children}
    </section>
  );
};
export default Section;
```

## Página 11 - ItemListContainer.jsx / agregar este import

```javascript
import Section from "../Section/Section";
```

## Página 11 - Reemplazar solo el return final del contenedor

```jsx
return (
  <Section title={greeting}>
    <ItemList data={data} />
  </Section>
);
```

## Página 12 - La composición del catálogo

```text
ItemListContainer
  -> Section: presenta el título y el marco
       -> ItemList: muestra la lista recibida
            -> Item: presenta cada producto
```

## Página 13 - Separación después de la extracción

```text
productsApi.js -> fetch y adaptación de los productos
useProducts    -> productos, carga, error y efecto
ItemListContainer -> contenido de la sección
Section        -> título y children
ItemList / Item -> lista y tarjetas
```

## Página 14 - Crear src/hooks/useProducts.js / archivo completo

```javascript
import { useEffect, useState } from "react";
import { getProductsFromApi } from "../services/productsApi";
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let active = true;
    const loadProducts = async () => {
      try {
        const result = await getProductsFromApi();
        if (active) setProducts(result);
      } catch (error) {
        if (active) setError(error.message);
      } finally {
        if (active) setLoading(false);
      }
    };
    loadProducts();
    return () => { active = false; };
  }, []);
  return { products, loading, error };
};
```

## Página 15 - ItemListContainer.jsx / versión final completa

```jsx
import { useProducts } from "../../hooks/useProducts";
import ItemList from "../ItemList/ItemList";
import Section from "../Section/Section";
const ItemListContainer = ({ greeting }) => {
  const { products, loading, error } = useProducts();
  return (
    <Section title={greeting}>
      {loading && <p>Cargando productos...</p>}
      {!loading && error && <p role="alert">{error}</p>}
      {!loading && !error && products.length === 0 && (
        <p>No hay productos disponibles.</p>
      )}
      {!loading && !error && products.length > 0 && (
        <ItemList data={products} />
      )}
    </Section>
  );
};
export default ItemListContainer;
```

## Página 16 - Dos operaciones sobre la misma API

```text
Listado:
GET https://dummyjson.com/products/category/laptops?limit=6
Respuesta: objeto con products, que contiene un array.
Detalle:
GET https://dummyjson.com/products/78
Respuesta: el objeto del producto directamente.
```

## Página 17 - Archivos de la implementación final de clase

```text
src/services/productsApi.js
src/hooks/useProducts.js
src/components/Section/Section.jsx
src/components/ItemListContainer/ItemListContainer.jsx
src/components/ItemList/ItemList.jsx
src/components/Item/Item.jsx
```

## Página 18 - Responsabilidades de la entrega

```text
getProductById(productId) -> consulta y adapta un producto
ItemDetailContainer      -> administra la promesa y los estados
ItemDetail               -> presenta el producto completo
ItemCount                -> limita la cantidad según el stock
```

## Página 19 - Crear src/components/ItemCount/ItemCount.jsx / apoyo

```jsx
import { useState } from "react";
const ItemCount = ({ stock }) => {
  const [quantity, setQuantity] = useState(0);
  const increase = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };
  const decrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  return (
    <div>
      <p>Disponibles: {stock}</p>
      <button onClick={decrease} disabled={quantity === 0}>
        -
      </button>
      <span aria-live="polite"> {quantity} </span>
      <button onClick={increase} disabled={quantity >= stock}>
        +
      </button>
    </div>
  );
};
export default ItemCount;
```

## Página 19 - Dentro de ItemDetail / cuando el producto ya está disponible

```jsx
<ItemCount key={prod.id} stock={prod.stock} />
```
