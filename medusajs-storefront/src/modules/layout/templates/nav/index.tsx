import { headers } from "next/headers";
import { Suspense } from "react";

import { listRegions } from "@lib/data";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import CartButton from "@modules/layout/components/cart-button";
import SideMenu from "@modules/layout/components/side-menu";
import MegaMenu from "Components/MegaMenu/MegaMenu";

const imageUrls = {
  st1366: 'https://res.cloudinary.com/dqgrlf8uf/image/upload/v1723764992/1_cw6stl.webp',
  nf2535: 'https://res.cloudinary.com/dqgrlf8uf/image/upload/v1723765350/448339000_470383098861849_8993076245366460543_n_1719565453121_1_jdlnh9.webp',
  women1: 'https://res.cloudinary.com/dqgrlf8uf/image/upload/v1723766143/M2720-P3800_1723125820159_mq6rud.webp',
  women2: 'https://res.cloudinary.com/dqgrlf8uf/image/upload/v1723765541/M2726-P3800_1723126877702_o1mzrd.webp',
  acce1: 'https://res.cloudinary.com/dqgrlf8uf/image/upload/v1723765839/hgjkloyygfdg_rfmfxm.webp',
  acce2: 'https://res.cloudinary.com/dqgrlf8uf/image/upload/v1723798009/B_TIE_1.2_pwiyhm.webp'
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
        { "name": "Elite Panjabi", "handle": "elite_panjabi" },
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
        { "name": "Box-tie", "handle": "box_tie" },
        { "name": "Luxury-belt", "handle": "luxury_belt" }
      ],
      image: [imageUrls.acce1, imageUrls.acce2]
    }
  ];

  return (
    <div className="sticky top-0 inset-x-0 group" style={{ zIndex: 100000 }}>

<header className="relative mx-auto duration-200 bg-gray-700 pt-5 ">


        <nav className="txt-xsmall-plus text-white font-bold flex items-center justify-between w-full h-full text-large-regular">
          
          
          <div className="flex flex-col w-full">
            <div className="content-container w-full h-12 items-center flex">
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="flex-1 basis-0 h-full flex items-center">
                    <div className="h-full">
                      <SideMenu regions={regions} />
                    </div>
                  </div>
                  

                  <div className="flex items-center h-full pb-4">
      <LocalizedClientLink
        href="/"
        className="transition-transform transform hover:scale-105 hover:text-yellow-500 transition-all duration-300 flex items-center"
        data-testid="nav-store-link"
      >
        <img
          src="https://res.cloudinary.com/dqgrlf8uf/image/upload/v1723844942/png_icon_nbifsc.png"
          alt="Site Logo"
          className="h-8 sm:h-10 md:h-12 lg:h-14 transition-transform duration-300"
        />
      </LocalizedClientLink>
    </div>

                  <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
                    <div className="hidden small:flex items-center gap-x-6 h-full">
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

            <div className="sm:flex hidden justify-center items-center bg-[#000] pt-[10px] pb-[10px] poppins">
              <MegaMenu Arr={Arr} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
