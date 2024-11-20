import { headers } from "next/headers";
import { Suspense } from "react";

import { listRegions } from "@lib/data";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import CartButton from "@modules/layout/components/cart-button";
import SideMenu from "@modules/layout/components/side-menu";
import MegaMenu from "Components/MegaMenu/MegaMenu";

const imageUrls = {
  st1366: 'https://res.cloudinary.com/dvzdodv1r/image/upload/v1731502077/black_ri1u8p.png',
  nf2535: 'https://res.cloudinary.com/dvzdodv1r/image/upload/v1731502073/sky_blue_1_nk8pww.png',
  women1: 'https://res.cloudinary.com/dvzdodv1r/image/upload/v1731501380/sea_sky_nov/women/euyyizmclqte6syqmnwy.png',
  women2: 'https://res.cloudinary.com/dvzdodv1r/image/upload/v1731501378/sea_sky_nov/women/wlnbabwrzp9nzsgbapd3.png',
  acce1: 'https://res.cloudinary.com/dvzdodv1r/image/upload/v1731501384/sea_sky_nov/accessories/frasaznpuoyyqhwdqpul.jpg',
  acce2: 'https://res.cloudinary.com/dvzdodv1r/image/upload/v1731502440/seasky_tie_5_3st5_bg_sjx1iq.jpg'
};

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions);
  
  const Arr = [
    {
      "main_category": "Men",
      "sub_categories": [
        { "name": "Premium Suit", "handle": "premium_suit" },
        { "name": "Platinum Blazer", "handle": "platinum_blazer" },
        { "name": "Formal Shirt", "handle": "formal_shirt" },
      //  { "name": "Elite Panjabi", "handle": "elite_panjabi" },
        { "name": "Half Coat", "handle": "half_coat" },
        { "name": "Formal Pant", "handle": "formal_pant" }
      ],
      image: [imageUrls.st1366, imageUrls.nf2535]
    },
    {
      "main_category": "Women",
      "sub_categories": [
        { "name": "Women's-suit", "handle": "women's_suit" }
      ],
      image: [imageUrls.women1, imageUrls.women2]
    },
    {
      "main_category": "Accessory",
      "sub_categories": [
        { "name": "Luxury-belt", "handle": "luxury_belt" },
        { "name": "Box-tie", "handle": "box_tie" }
       
      ],
      image: [imageUrls.acce1, imageUrls.acce2]
    }
  ];

  return (
    <div className="sticky top-0 inset-x-0 group" style={{ zIndex: 100000 }}>
      <header className="relative mx-auto duration-200 bg-black pt-5">
        <nav className="txt-xsmall-plus text-white font-bold flex items-center justify-between w-full h-full text-large-regular">
          <div className="flex flex-col w-full">
            {/* Content container */}
            <div className="relative flex flex-col w-full">
              {/* Border line */}
              <div className="absolute bottom-0 left-0 w-full border-b border-gray-800 transition-all duration-500 hover:border-gray-500"></div>
              {/* Inner content */}
              <div className="flex items-center h-12 relative mx-4">
                <div className="flex flex-col w-full">
                  <div className="flex justify-between items-center w-full">  
                    <div className="flex-1 basis-0 h-full flex items-center">
                      <div className="h-full">
                        <SideMenu regions={regions} />
                      </div>
                    </div>


                   <div className="flex items-center h-full my-2 -mt-2">
  <LocalizedClientLink
    href="/"
    className="transition-transform transform hover:scale-105 hover:text-yellow-500 transition-all duration-300 flex items-center"
    data-testid="nav-store-link"
  >
  {/**  <img
    logo png   src="https://res.cloudinary.com/dgzmsjcxx/image/upload/v1728120237/sea_sky/ex9kb3ea0htacqrnupgv.webp"
      alt="sea sky"
      className="h-4 sm:h-5 md:h-6 lg:h-8 transition-transform duration-300"
    />      */} 

<h1
      className="text-center tracking-[0.5em]"
      style={{ letterSpacing: "0.5em" }}
    >
      SEA&nbsp;SKY
    </h1>


    
  </LocalizedClientLink>


</div>




                    <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end mx-4">
                      <div className="hidden small:flex items-center gap-x-6 h-full ">
                        {process.env.FEATURE_SEARCH_ENABLED && (
                          <LocalizedClientLink
                            className="hover:text-yellow-500 transition-colors duration-300"
                            href="/search"
                            scroll={false}
                          >
                            Search
                          </LocalizedClientLink>
                        )}
                        <LocalizedClientLink
                          className="hover:text-yellow-500 transition-colors duration-300 poppins"
                          href="/account"
                        >
                          Account
                        </LocalizedClientLink>
                      </div>
                      <Suspense
                        fallback={
                          <LocalizedClientLink
                            className="hover:text-yellow-500 transition-colors duration-300 poppins flex gap-2"
                            href="/cart"
                          >
                            Cart (0)
                          </LocalizedClientLink>
                        }
                      >
                        <CartButton />
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:flex hidden justify-center items-center bg-[#000] pt-[10px] pb-[10px] poppins">
              <MegaMenu Arr={Arr} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
