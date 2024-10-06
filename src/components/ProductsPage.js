import React from 'react';
import { useParams } from 'react-router-dom';
import useApi from './hooks/ApiHook';

function ProductPage() {
  const { id } = useParams(); // Get the product ID from the URL
  const { items, isLoading, isError } = useApi('https://v2.api.noroff.dev/online-shop');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching product details.</div>;
  }

  // Find the product by its id
  const product = items.find(item => item.id === id);

  // If the product is not found, show an error message
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image.url} alt={product.image.alt || product.title} style={{ width: '300px' }} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {product.discountedPrice && <p>Discounted Price: ${product.discountedPrice}</p>}
    </div>
  );
}

export default ProductPage;
