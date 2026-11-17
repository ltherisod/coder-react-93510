import { useParams } from "react-router";
import { getProductById } from "../../mocks/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((errorMessage) => setError(errorMessage))
      .finally(() => setIsLoading(false))
  }, []);

  if (isLoading === true) return <Loading />

  if (error !== null) return <div>404 - {error}</div>

  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer