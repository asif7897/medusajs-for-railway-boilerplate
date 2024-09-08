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
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <button
          style={{
            position: "absolute",
            bottom: "2rem", // Position at the bottom
            right: "2rem", // Position to the right
            zIndex: 50,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "250px", // Button width
            height: "60px", // Button height
            fontSize: "1rem",
            fontWeight: "600",
            color: "#004d00", // Green text initially
            backgroundColor: "transparent", // Transparent background before hover
            borderRadius: "0.375rem", // Rounded corners
            border: "2px solid white", // White rectangle border
            cursor: "pointer",
            outline: "none",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#004d00"; // Green background on hover
            e.currentTarget.style.color = "white"; // White text on hover
            e.currentTarget.style.borderColor = "#004d00"; // Remove white border on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent"; // Original background color
            e.currentTarget.style.color = "white"; // Green text
            e.currentTarget.style.borderColor = "white"; // White border
          }}
          onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0, 77, 0, 0.5)")} // Focus ring
          onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
        >
          <span
            style={{
              padding: "0.5rem 1rem",
              display: "block",
              transition: "background-color 0.3s ease",
            }}
          >
            Shop Now
          </span>
        </button>
      </div>
    </Link>
  );
}

export default FeaturedProducts;
