"use client"; // Indicate this is a Client Component

import React from 'react';
import Link from 'next/link';
import '../featured-products/product-rail/style.css'; // Ensure this path is correct

interface FeaturedProductsProps {
  collections: any; // Define proper types if possible
  region: any; // Define proper types if possible
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ collections, region }) => {
  const backgroundImageSrc = 'https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722540421/women_2_bkiqbm.webp';

  return (
    <Link href="/collections/women's_suit">
      <div
        className="featured-products-wrapper"
        style={{
          backgroundImage: `url(${backgroundImageSrc})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",  // Center content vertically
          justifyContent: "center",  // Center content horizontally
          padding: "20px",  // Adds some padding from the edges
          position: "relative", // Ensures text overlay is positioned correctly
          cursor: "pointer", // Change cursor to pointer to indicate it's clickable
        }}
      >
        <div className="text-overlay">
          <span className="featured-products-text">Women Wear</span>
        </div>
      </div>
    </Link>
  );
}

export default FeaturedProducts;
