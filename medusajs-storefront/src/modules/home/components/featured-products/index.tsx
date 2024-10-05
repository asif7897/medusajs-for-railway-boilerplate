"use client"; // Indicate this is a Client Component

import React from 'react';
import Link from 'next/link';
import '../featured-products/product-rail/style.css'; // Ensure this path is correct

interface FeaturedProductsProps {
  collections: any; // Define proper types if possible
  region: any; // Define proper types if possible
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ collections, region }) => {
  const backgroundImageSrc = 'https://res.cloudinary.com/dgzmsjcxx/image/upload/v1728122136/section%20two/gjzaanxzlyxxuzt4fa3z.webp';

  return (
    <div
      className="featured-products-wrapper relative overflow-hidden rounded-lg"
      style={{
        backgroundImage: `url(${backgroundImageSrc})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "400px", // Minimum height to ensure it's visible on mobile
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 h-full w-full flex items-center justify-end"> {/* Change justify-center to justify-end */}
        <div className="text-white pr-4 md:pr-8"> {/* Removed text-center, added padding right */}
          <h4 className="mb-6 text-xl font-semibold">Discover Premium Suits</h4>

          <Link href="/collections/women's_suit">
            <button
              className="rounded border-2 border-neutral-50 px-7 py-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:outline-none"
            >
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
