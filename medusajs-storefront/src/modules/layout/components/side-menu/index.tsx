"use client"

import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Region } from "@medusajs/medusa"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment, useState } from "react"
import { Arrow, Arrow2 } from '../../../../Components/Icons/index'
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import FadeIn from "Components/Fade-effect/In/FadeIn"
import MenuItem from "Components/MegaMenu/MenuItem"

const SideMenuItems = {
  Home: "/",

  Store: "/store",
  "Shop By Category": "/",
  Search: "/search",
  Account: "/account",
  Cart: "/cart",

}

const SideMenu = ({ regions }: { regions: Region[] | null }) => {
  const toggleState = useToggleState()
  const [showCategory, setShowCategory] = useState(false)

  const LinkText = "text-xl leading-10 hover:text-ui-fg-disabled poppins flex items-center text-[#fff] justify-between"
  const mainBox = "flex flex-col h-full bg-[rgba(3,7,18,0.5)] rounded-rounded justify-between p-6 min-w-fit w-full max-w-[350px]"
  const [trigger, setTrigger] = useState(0);

  const handleClick = () => {
    setTrigger(prev => prev + 1); // Increment trigger to re-run animation
  };

  const Arr = [
    {
      "main_category": "Men",
      "sub_categories": [
        { "name": "Blazer", "handle": "blazer" },
        { "name": "Single Blazer", "handle": "s_blazer" },
        { "name": "Box-tie", "handle": "box_tie" },
        { "name": "Suit", "handle": "suit" },
        { "name": "Punjabi", "handle": "punjabi" },
        { "name": "Formal Shirt", "handle": "shirt" },
        { "name": "Pant", "handle": "pant" }
      ],
      image: ["https://medusajs-frontend-production-28be.up.railway.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnf2535.9d8b5746.png&w=384&q=75", "https://medusajs-frontend-production-28be.up.railway.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fst1366.ea9d30dc.png&w=384&q=75"]
    },
    {
      "main_category": "Women",
      "sub_categories": [
        { "name": "Blazer", "handle": "blazer_w" },
        { "name": "Single Blazer", "handle": "s_blazer_w" },
        { "name": "Women's-suit", "handle": "women's_suit" }
      ],
      image: ["https://medusajs-frontend-production-28be.up.railway.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomen-1.dc76cb6f.jpg&w=384&q=75", "https://medusajs-frontend-production-28be.up.railway.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomen-2.031fff47.jpg&w=384&q=75"]
    },
    {
      "main_category": "Accessory",
      "sub_categories": [
        { "name": "Box-tie", "handle": "box_tie" },
        { "name": "Luxury-belt", "handle": "luxury_belt" },
        //3 aug 
      //  { "name": "Tie-pin", "handle": "tie_pin" }
      ],
      image: ['https://medusajs-frontend-production-28be.up.railway.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facces-1.69702ddf.jpg&w=384&q=75', "https://medusajs-frontend-production-28be.up.railway.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facces-2.f358fb03.jpg&w=384&q=75"]
    }
  ]

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button className="poppins relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base">
                  Menu
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="flex flex-col absolute w-full  sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2 backdrop-blur-2xl pr-0"
                  style={{
                    // minWidth: "fit-content",
                    width: "100%",
                    maxWidth: "350px"
                  }}
                >

                  {showCategory ? <>
                    <div className={mainBox} style={{
                      // minWidth: "fit-content",
                      width: "100%",
                      maxWidth: "350px"
                    }}>
                      <div className="flex flex-col min-w-fit w-full max-w-[350px]">
                        <div className="flex justify-start gap-[10px]" id="xmark">
                          <button onClick={() => {
                            setShowCategory(false)
                            handleClick()
                          }}>
                            <Arrow2 size="30px" color="#fff" />
                          </button>
                          <p className={'text-2xl leading-10 text-[#fff] poppins'}>Shop by category</p>
                        </div>
                        <div className="flex flex-col">
                          {Arr.map((menu, index) => (
                            <div key={index} className={` flex flex-col poppins mt-[15px]`}>
                              <h3 className='poppins text-[15px] font-[600] font-[#000] mb-[10px]'>{menu.main_category}</h3>
                              {menu.sub_categories && menu.sub_categories.map((subMenu, subIndex) => (
                                <div key={subIndex} className={''}>
                                  <ul>
                                    <li><LocalizedClientLink
                                      href={`/collections/${subMenu.handle}`}
                                      className='poppins font-[300] tracking-[0.6px]'>{subMenu.name}</LocalizedClientLink></li>
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </> :
                    <div style={{
                      // minWidth: "fit-content",
                      width: "100%",
                      maxWidth: "350px"
                    }} className="h-full">
                      <div className={mainBox} style={{
                        minWidth: "0%"
                      }}>
                        <div className="flex justify-end" id="xmark">
                          <button onClick={close}>
                            <XMark />
                          </button>
                        </div>
                        <ul className="flex flex-col gap-6 items-start justify-start">
                          {Object.entries(SideMenuItems).map(([name, href], index) => {
                            if (name == "Shop By Category") {
                              return (
                                <li key={name} className="w-full sm:hidden xs: block ">
                                  <LocalizedClientLink
                                    href={href}
                                    className={LinkText}
                                    onClick={() => {
                                      handleClick()
                                      setShowCategory(true)
                                    }}
                                  >
                                    {name} <div><Arrow size="30px" color="#fff" /></div>
                                  </LocalizedClientLink>
                                </li>)
                            } else {
                              return (
                                <li key={name}>
                                  <LocalizedClientLink
                                    href={href}
                                    className={LinkText}
                                    onClick={close}
                                  >
                                    {name}
                                  </LocalizedClientLink>
                                </li>
                              )
                            }

                          })}
                        </ul>
                        <div className="flex flex-col gap-y-6">
                          <div
                            className="flex justify-between"
                            onMouseEnter={toggleState.open}
                            onMouseLeave={toggleState.close}
                          >
                            {regions && (
                              <CountrySelect
                                toggleState={toggleState}
                                regions={regions}
                              />
                            )}
                            <ArrowRightMini
                              className={clx(
                                "transition-transform duration-150",
                                toggleState.state ? "-rotate-90" : ""
                              )}
                            />
                          </div>
                          <Text className="flex justify-between txt-compact-small">
                            © {new Date().getFullYear()} Sea Sky. All rights
                            reserved.
                          </Text>
                        </div>
                      </div>
                    </div>
                  }

                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
