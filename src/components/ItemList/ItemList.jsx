import Item from '../Item/Item'
import "./itemlist.css";

const ItemList = ({ data }) => {
  return (
    <div className='item-list'>
      {data.map((prod) => <Item key={prod.id} prod={prod} />)}
    </div>
  )
}

export default ItemList