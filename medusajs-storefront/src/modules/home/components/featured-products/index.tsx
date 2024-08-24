import React from 'react';
import '../featured-products/product-rail/style.css'; // Path to your CSS file
import LocalizedClientLink from "@modules/common/components/localized-client-link";

interface FeaturedProductsProps {
  collections: any; // Replace `any` with the actual type of collections
  region: any; // Replace `any` with the actual type of region
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ collections, region }) => {
  const backgroundImageSrc = 'https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722540421/women_2_bkiqbm.webp';

  return (
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
        alignItems: "flex-end",  // Aligns content to the bottom
        justifyContent: "flex-end",  // Aligns content to the right
        padding: "20px",  // Adds some padding from the edges
      }}
    >
      <div className="buttonLinkWrapper">
        <LocalizedClientLink href="/collections/suit_w">
          <span className="featured-products-link">Women wear</span>
        </LocalizedClientLink>
      </div>
    </div>
  );
}

export default FeaturedProducts;
