import { Button } from "@medusajs/ui";

const Hero = () => {
  return (
    <div
      className="w-full h-[60dvh] md:h-[90dvh] relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/banner_image/3/tie_mobile_zb5mva_oy66id.webp')`,
      }}
    >
      {/* Background Image */}
      <img
        src="https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/banner_image/3/tie_mobile_zb5mva_oy66id.webp"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
      />

      {/* Content */}
      <div className="absolute left-6 md:left-52 inset-y-0 flex flex-col justify-center items-start text-left gap-4 md:gap-6 z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wide">
          S E A &nbsp; S K Y
        </h2>
        <a href="/collections/box_tie" target="_self">
          <Button
            className="bg-black text-white hover:bg-gray-800 transition-colors duration-300"
            variant="primary"
          >
            SHOP NOW
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
