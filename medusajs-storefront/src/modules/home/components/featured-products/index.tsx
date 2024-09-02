"use client"; // Add this line to indicate this is a Client Component

import React from 'react';
import '../featured-products/product-rail/style.css'; // Path to your CSS file

interface FeaturedProductsProps {
  collections: any; // Replace `any` with the actual type of collections
  region: any; // Replace `any` with the actual type of region
  url?: string; // Optional URL for redirection (default: undefined)
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  collections,
  region,
  url = '/collections/women\'s_suit', // Default URL set here
}) => {
  const frontImageSrc = 'https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722540421/women_2_bkiqbm.webp';
  const backImageSrc = 'https://res.cloudinary.com/dqgrlf8uf/image/upload/v1724674876/3-%287%29_1724674874305.png';

  const handleClick = () => {
    window.location.href = url; // Redirects to the specified URL
  };

  return (
    <div className="featured-products-wrapper" onClick={handleClick}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div
            className="flip-card-front"
            style={{ backgroundImage: `url(${frontImageSrc})` }}
          />
          <div
            className="flip-card-back"
            style={{ backgroundImage: `url(${backImageSrc})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
