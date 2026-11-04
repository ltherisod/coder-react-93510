import "./item.css";

const Item = ({ prod }) => {
  return (
    <div className="item-card">
      <div className="item-image">
        <img src={prod.image} alt={prod.name} />
      </div>
      <div className="item-content">
        <p className="item-name">{prod.name}</p>
        <p className="item-stock">Precio: ${prod.price}</p>

        <div>
          <button>Ver detalles</button>
        </div>
      </div>
    </div>
  )
}

export default Item