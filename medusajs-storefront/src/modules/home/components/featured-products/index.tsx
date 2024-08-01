import React from 'react';
import '../featured-products/product-rail/style.css'; // Path to your CSS file
import LocalizedClientLink from "@modules/common/components/localized-client-link";

// Define types for the props (Replace `any` with actual types if known)
interface FeaturedProductsProps {
  collections: any; // Replace `any` with the actual type of collections
  region: any; // Replace `any` with the actual type of region
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ collections, region }) => {
  const backgroundImageSrc = 'https://res.cloudinary.com/dqgrlf8uf/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1722538587/womens_were.png_real_jk3osp.webp';

  return (
    <div
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
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: 50, color: "white", marginBottom: "20px" }}>Women Premium Suit</h1>
      <div className="buttonLinkWrapper">
        <LocalizedClientLink href="/collections/suit_w">
          <span style={{ fontSize: 50, color: "white", marginBottom: "20px" }}>shop now </span>
        </LocalizedClientLink>
      </div>
    </div>
  );
}

export default FeaturedProducts;
