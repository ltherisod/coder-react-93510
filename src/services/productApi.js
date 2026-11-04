export const getProductsApi = async () => {
  const response = await fetch('https://dummyjson.com/products/category/laptops');
  if (!response.ok) {
    throw new Error('No pudimos cargar los productos');
  }

  const data = await response.json();

  const products = data.products.map((product) => {
    return {
      id: product.id,
      name: product.title,
      image: product.thumbnail,
      price: product.price,
      category: product.category,
      description: product.description,
      stock: product.stock,
    };
  });
  return products;
};

export const getProductApi = async (id) => {
  const response = await fetch('https://dummyjson.com/products/' + id);
  if (!response.ok) {
    throw new Error('No pudimos cargar los productos');
  }

  const data = await response.json();

  return {
    id: data.id,
    name: data.title,
    image: data.thumbnail,
    images: data.images,
    price: data.price,
    category: data.category,
    description: data.description,
    stock: data.stock,
  };
};
