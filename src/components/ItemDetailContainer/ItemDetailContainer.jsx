import { useProduct } from "../../hooks/useProduct"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { data, loading, error } = useProduct(78);

  return (
    <div>
      { loading && <p>Cargando producto...</p> }
      { error && <p>{error}</p> }
      { !loading && !error && <ItemDetail product={data} /> }
    </div>
  )
}

export default ItemDetailContainer