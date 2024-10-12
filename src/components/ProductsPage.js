import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './hooks/CartContext'; 
import useApi from './hooks/ApiHook';
import "./css/productPage.css"

function ProductPage() {
  const { id } = useParams(); // Get the product ID from the URL
  const { items, isLoading, isError } = useApi('https://v2.api.noroff.dev/online-shop');
  const { addToCart } = useCart(); // Access addToCart function from context

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching product details.</div>;
  }

  // Find the product by its id
  const product = items.find(item => item.id === id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product); // Use the context method to add to cart
  };

  return (
    <div className='container'>
      <h1>{product.title}</h1>
      <img src={product.image.url} alt={product.image.alt || product.title} style={{ width: '300px' }} />
      <p>{product.description}</p>
      <p className='originalPrice'>Price: ${product.price.toFixed(2)}</p>
      {product.discountedPrice && <p>Discounted Price: ${product.discountedPrice.toFixed(2)}</p>}

      <button onClick={handleAddToCart} className="add-to-cart-button">
        Add to Cart
      </button>

      {/* Display reviews if any */}
      <div className="reviews-section">
        <h2>Reviews</h2>
        {product.reviews && product.reviews.length > 0 ? (
          <ul>
            {product.reviews.map((review) => (
              <li key={review.id} className="review-item">
                <p><strong>{review.username}</strong> - Rating: {review.rating}/5</p>
                <p>{review.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available for this product.</p>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
