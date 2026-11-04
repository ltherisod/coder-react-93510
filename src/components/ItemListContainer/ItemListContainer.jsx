import ItemList from "../ItemList/ItemList"
import { useProducts } from "../../hooks/useProducts";
import "./itemlistcontainer.css";

const ItemListContainer = ({ greeting }) => {
  const { data, loading, error } = useProducts();

  return (
    <div className="item-list-container">
      <h2 className="container-title">{greeting}</h2>
      { loading && <p>Cargando productos...</p> }
      { error && <p>{error}</p> }
      { !loading && !error && <ItemList data={data} /> }
    </div>
  )

}

export default ItemListContainer