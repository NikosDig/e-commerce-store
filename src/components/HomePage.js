import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImgMediaCard from './Card';
import useApi from './hooks/ApiHook';
import './css/HomePage.css'; // Import your CSS file

function Home() {
  const { items, isLoading, isError } = useApi(
    'https://v2.api.noroff.dev/online-shop'
  );
  const [searchQuery, setSearchQuery] = useState('');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  // Filter products based on search query
  const filteredProducts = items.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <div className='searchBarContainer'>
         <input
           type="text"
           placeholder="Search products..."
           value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}
          />
      </div>
      {/* Product List */}
      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <div>No products available</div>
        ) : (
          filteredProducts.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              style={{ textDecoration: 'none' }}
            >
              <div className="product-card">
                <ImgMediaCard
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                  discountedPrice={product.discountedPrice}
                />
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
