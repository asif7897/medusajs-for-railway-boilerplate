"use client";

import React, { useEffect, useState } from "react";

const Animation = () => {
  const imageBelt =
    "https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/random/seasky+wallet+smp+6-min.jpg";

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    padding: "20px",
    backgroundColor: "#ffffff",
  };

  const sectionStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: isDesktop ? "row" : "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
  };

  const imageStyle: React.CSSProperties = {
    width: isDesktop ? "60%" : "100%", // Increase the width for desktop
    height: isDesktop ? "500px" : "350px", // Adjust height for better visibility
    borderRadius: "10px",
    objectFit: "contain", // Ensure the image is fully contained without cropping
    maxWidth: "100%", // Prevent the image from overflowing
    maxHeight: "500px", // Limit the height for desktop
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const contentStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: isDesktop ? "flex-start" : "center",
    textAlign: isDesktop ? "left" : "center",
    flex: 1,
  };

  const buttonsContainerStyle: React.CSSProperties = {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: isDesktop ? "40px" : "24px",
    marginBottom: "10px",
  };

  const bodyTextStyle: React.CSSProperties = {
    fontSize: isDesktop ? "18px" : "16px",
    color: "#666",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center", fontSize: isDesktop ? "50px" : "28px" }}>
        ACCESSORIES
      </h1>

      {/* BELT Section */}
      <div style={sectionStyle}>
        <img src={imageBelt} alt="Belt" style={imageStyle} />
        <div style={contentStyle}>
          <div>
            <h2 style={headingStyle}>BELT</h2>
            <p style={bodyTextStyle}>
              Our premium belts are crafted from the finest materials, offering
              both style and durability. Perfect for every occasion, these belts
              are designed to complement your wardrobe effortlessly.
            </p>
          </div>

          <div>
            <h2 style={headingStyle}>WALLET</h2>
            <p style={bodyTextStyle}>
              Our premium wallets are crafted from the finest materials,
              offering both style and durability. Perfect for every occasion,
              these wallets are designed to complement your wardrobe effortlessly.
            </p>
          </div>

          <div style={buttonsContainerStyle}>
            <CustomButton text="SHOP BELT" href="/collections/luxury_belt" />
            <CustomButton text="SHOP WALLET" href="/collections/moneyBag" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom Button Component
const CustomButton = ({ text, href }: { text: string; href: string }) => {
  const buttonStyle: React.CSSProperties = {
    padding: "15px 30px",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#333",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    textDecoration: "none",
    marginTop: "10px",
  };

  return (
    <a
      href={href}
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#555";
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#333";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {text}
    </a>
  );
};

export default Animation;
