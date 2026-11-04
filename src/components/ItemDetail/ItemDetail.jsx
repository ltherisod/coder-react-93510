import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <div className="detail-image">
        <img src={product.image} alt="" />
      </div>

      <div className="detail-description">
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </div>
  )
}

export default ItemDetail