import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import "./item.css";

const Item = ({ prod }) => {
  return (
    <li className="item">
      <div className="img-item-container">
        <img className="img-item" src={prod.image} alt="" />
      </div>

      <div className="text-item-container">
        <p className="title-item">{prod.name}</p>
        <p className="price-item">${prod.price}</p>
        <Link to={`/item/${prod.id}`} className="button-item">
          <IoIosArrowForward />
          <p>MAS INFORMACION</p>
        </Link>
      </div>
    </li>
  )
}

export default Item