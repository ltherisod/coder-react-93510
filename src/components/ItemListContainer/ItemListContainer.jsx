import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList"
import { useNavigate, useParams } from "react-router";
import { getProducts } from "../../mocks/asyncMock";
import Loading from "../Loading/Loading";

import "./itemlistcontainer.css";
import { IoIosArrowBack } from "react-icons/io";

const ItemListContainer = ({ greeting }) => {
  const { type } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    getProducts()
      .then((data) => {
        if (type) {
          const filteredProducts = data.filter((product) => product.category === type);
          setProducts(filteredProducts);
        } else {
          setProducts(data);
        }
      })
      .catch((errorMessage) => setError(errorMessage))
      .finally(() => setIsLoading(false))
  }, [type]);

  if (isLoading === true) return <Loading />

  if (error !== null) return <div>404 - {error}</div>

  return (
    <div className="item-list-container">
      {
        type && (
          <button className="button-to-back" onClick={() => navigate(-1)} >
            <IoIosArrowBack />
            <p>Volver atras</p>
          </button>
        )
      }
      <h2>{type ? greeting + " " + type : greeting}</h2>
      <ItemList products={products} />
    </div>
  )

}

export default ItemListContainer