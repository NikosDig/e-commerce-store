import React from 'react';
import ImgMediaCard from './Card';
import useApi from "./hooks/ApiHook";

function Home() {
  const { items, isLoading, isError } = useApi(
    'https://v2.api.noroff.dev/online-shop'
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {items.length === 0 ? (
        <div>No products available</div>
      ) : (
        items.map((product) => (
          <ImgMediaCard
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image} // Ensure your API provides this field, or handle accordingly
            price={product.price} // Add this field
            discountedPrice={product.discountedPrice} // Add this field
          />
        ))
      )}
    </div>
  );
}

export default Home;
