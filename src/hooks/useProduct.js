import { useState, useEffect } from 'react';
import { getProductApi } from '../services/productApi';

export const useProduct = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const product = await getProductApi(id);
        setData(product);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, []);

  return { data, loading, error };
};
