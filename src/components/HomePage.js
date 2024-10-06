import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ImgMediaCard from './Card';
import useApi from "./hooks/ApiHook";

function Home() {
  const { items, isLoading, isError } = useApi(
    'https://v2.api.noroff.dev/online-shop'
  );
  const [searchQuery, setSearchQuery] = useState("");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }


    // Filter products based on search query
    const filteredProducts = items.filter(product => 
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div>
        {/* Search Bar */}
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '10px', marginBottom: '20px', width: '90%' }}
        />
  
        {/* Product List */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {filteredProducts.length === 0 ? (
            <div>No products available</div>
          ) : (
            filteredProducts.map((product) => (
              <Link 
                to={`/products/${product.id}`} 
                key={product.id} 
                style={{ textDecoration: 'none' }}
              >
                <ImgMediaCard
                  title={product.title}
                  description={product.description}
                  image={product.image} 
                  price={product.price}
                  discountedPrice={product.discountedPrice}
                />
              </Link>
            ))
          )}
        </div>
      </div>
    );
  }

export default Home;
