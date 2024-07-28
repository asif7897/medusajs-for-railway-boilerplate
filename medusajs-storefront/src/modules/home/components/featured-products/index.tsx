import '../featured-products/product-rail/style.css'; // Path to your CSS file
import LocalizedClientLink from "@modules/common/components/localized-client-link"


const FeaturedProducts: React.FC = () => {
  const backgroundImageSrc = 'https://res.cloudinary.com/dqgrlf8uf/image/upload/v1719258169/samples/ecommerce/analog-classic.jpg';

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

