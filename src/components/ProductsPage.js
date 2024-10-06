
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import useApi from './hooks/ApiHook'; // Make sure this hook is correctly implemented

// function ProductPage() {
//   const { id } = useParams(); // Get the product ID from the URL
//   const { items, isLoading, isError } = useApi('https://v2.api.noroff.dev/online-shop');

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error fetching product details.</div>;
//   }

//   // Find the product by its id
//   const product = items.find(item => item.id === id);

//   // If the product is not found, show an error message
//   if (!product) {
//     return <div>Product not found.</div>;
//   }

//   // Calculate the discount percentage
//   const discountPercentage = product.discountedPrice < product.price
//     ? ((product.price - product.discountedPrice) / product.price * 100).toFixed(0)
//     : null;

//   const handleAddToCart = () => {
//     // Implement your cart logic here
//     alert(`${product.title} has been added to the cart!`); // Replace with your cart logic
//   };

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <img 
//         src={product.image.url} 
//         alt={product.image.alt || product.title} 
//         style={{ width: '300px' }} 
//       />
//       <p>{product.description}</p>

//       <div>
//         <p>
//           Price: <strong>${product.price.toFixed(2)}</strong>
//         </p>
//         {product.discountedPrice && (
//           <>
//             <p>
//               Discounted Price: <strong>${product.discountedPrice.toFixed(2)}</strong>
//             </p>
//             {discountPercentage && (
//               <p>
//                 Discount: <span style={{ color: 'red' }}>-{discountPercentage}%</span>
//               </p>
//             )}
//           </>
//         )}
//       </div>

//       <button onClick={handleAddToCart} className="add-to-cart-button">
//         Add to Cart
//       </button>

//       {product.reviews && product.reviews.length > 0 && (
//         <div className="product-reviews">
//           <h2>Reviews:</h2>
//           {product.reviews.map((review) => (
//             <div key={review.id} className="review">
//               <p><strong>{review.username}</strong> (Rating: {review.rating}): {review.description}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductPage;



import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './hooks/CartContext'; // Import the cart context
import useApi from './hooks/ApiHook';

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
    <div>
      <h1>{product.title}</h1>
      <img src={product.image.url} alt={product.image.alt || product.title} style={{ width: '300px' }} />
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      {product.discountedPrice && <p>Discounted Price: ${product.discountedPrice.toFixed(2)}</p>}

      <button onClick={handleAddToCart} className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductPage;

