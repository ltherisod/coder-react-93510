import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";

const ItemDetail = ({ product }) => {

  return (
    <div className="item-detail">
      <div className="img-container-item-detail">
        <img className="img-item-detail" src={product.image} alt="" />
      </div>
      <div className="text-item-detail">
        <p className="title-item-detail">{product.name}</p>
        <p className="description-item-detail">{product.description}</p>
        <p className="price-item-detail">Precio: ${product.price}</p>
        <ItemCount stock={product.stock} />
      </div>
    </div>
  )
}

export default ItemDetail