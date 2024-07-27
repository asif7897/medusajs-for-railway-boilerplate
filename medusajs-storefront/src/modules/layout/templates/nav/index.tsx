import { headers } from "next/headers"
import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import MegaMenu from "Components/MegaMenu/MegaMenu"
import st1366 from '../../../../../public/assets/st1366.png'
import nf2535 from '../../../../../public/assets/nf2535.png'
import women1 from '../../../../../public/assets/women-1.jpg'
import women2 from '../../../../../public/assets/women-2.jpg'
import acce1 from '../../../../../public/assets/acces-1.jpg'
import acce2 from '../../../../../public/assets/acces-2.jpg'

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)
  const Arr = [
    {
      "main_category": "Men",
      "sub_categories": [
        { "name": "Blazer", "handle": "blazer" },
        { "name": "Single Blazer", "handle": "s_blazer" },
        { "name": "Tiebox", "handle": "tiebox" },
        { "name": "Suit", "handle": "suit" },
        { "name": "Punjabi", "handle": "punjabi" },
        { "name": "Formal Shirt", "handle": "shirt" },
        { "name": "Pant", "handle": "pant" }
      ],
      image: [st1366, nf2535]
      // image: ["https://medusajs-frontend-production-28be.up.railway.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnf2535.9d8b5746.png&w=384&q=75", "https://medusajs-frontend-production-28be.up.railway.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fst1366.ea9d30dc.png&w=384&q=75"]
    },
    {
      "main_category": "Women",
      "sub_categories": [
        { "name": "Blazer", "handle": "blazer_w" },
        { "name": "Single Blazer", "handle": "s_blazer_w" },
        { "name": "Suit", "handle": "suit_w" }
      ],
      image: [women1, women2]
    },
    {
      "main_category": "Accessory",
      "sub_categories": [
        { "name": "Tiebox", "handle": "tiebox" },
        { "name": "Belt", "handle": "belt" },
        { "name": "Tie-pin", "handle": "tie_pin" }
      ],
      image: [acce1, acce2]
    }
  ]

  return (
    <div className="sticky top-0 inset-x-0 group" style={{
      zIndex: 100000
    }}>
      <header className="relative mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className=" txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex flex-col w-full" >
            <div className="content-container w-full h-12 items-center flex">

              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center w-full" >
                  <div className="flex-1 basis-0 h-full flex items-center">
                    <div className="h-full">
                      <SideMenu regions={regions} />
                    </div>
                  </div>

                  <div className="flex items-center h-full">
                    <LocalizedClientLink
                      href="/"
                      className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
                      data-testid="nav-store-link"
                    >
                      S E A S K Y |
                    </LocalizedClientLink>
                  </div>

                  <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
                    <div className="hidden small:flex items-center gap-x-6 h-full">
                      {process.env.FEATURE_SEARCH_ENABLED && (
                        <LocalizedClientLink
                          className="hover:text-ui-fg-base "
                          href="/search"
                          scroll={false}
                        >
                          Search
                        </LocalizedClientLink>
                      )}
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base poppins"
                        href="/account"
                      >
                        Account
                      </LocalizedClientLink>
                    </div>
                    <Suspense
                      fallback={
                        <LocalizedClientLink
                          className=" hover:text-ui-fg-base poppins flex gap-2 "
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

            <div className="sm:flex hidden justify-center items-center bg-[#000] pt-[10px] pb-[10px] poppins ">
              <MegaMenu Arr={Arr} />
              {/* <img src=""/> */}
            </div>
          </div>
        </nav>

      </header>
    </div>
  )
}
