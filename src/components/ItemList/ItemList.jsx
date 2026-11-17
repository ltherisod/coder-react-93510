import Item from '../Item/Item'
import "./itemlist.css";

const ItemList = ({ products }) => {
  return (
    <div className='item-list'>
      {products.map((prod) => <Item key={prod.id} prod={prod} />)}
    </div>
  )
}

export default ItemList