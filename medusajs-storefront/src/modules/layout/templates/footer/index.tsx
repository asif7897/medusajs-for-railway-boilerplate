import { Text, clx } from "@medusajs/ui"
import { getCategoriesList, getCollectionsList } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import './styles.css'
import { Address } from "../../../../lib/util/address-list"
import { Routes } from "@lib/util/footer-link-list"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)
  const newArr = [
    {
      id: 0,
      name: "Store Locator",
      text: "Find Our Store",
      image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722530900/location-icon_chzd0g.svg"
    },
    {
      id: 1,
      name: "Store Locator",
      text: "Find Our Store",
      image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722530900/location-icon_chzd0g.svg"
    }
  ]

  return (
    <footer className="border-t border-ui-border-base w-full bg-black text-white footer_class"> {/* Updated background and text color */}
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div className="flex flex-col">
            <div>
              <LocalizedClientLink
                href="/"
                className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-white uppercase"
              >
                S E A S K Y
              </LocalizedClientLink>
            </div>
            <div className="flex flex-col">

              <div className="flex gap-x-[13px] h-[74px] rounded-[100px] items-center border border-[#fff] border-solid py-[12px] px-[30px] pr-[40px]">
                <div className="">
                  <img className="h-[25px]" src="https://res.cloudinary.com/dqgrlf8uf/image/upload/v1722530900/location-icon_chzd0g.svg" />
                </div>
                <div className="w-[1px] bg-[#fff] h-[40px]" />
                <div className="pl-[7px] flex flex-col">
                  <p className="text-[14px] font-[400] poppins">Store Locator</p>
                  <p>Find Our Store</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-4">
            {/*  */}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">
                CATEGORIES
              </span>
              <ul className="grid grid-cols-1 gap-2">
                {Routes.map((item, index) => {
                  return (
                    <>
                      <li key={item.text}>
                        <LocalizedClientLink
                          className="hover:text-white poppins"
                          href={item.link}
                        >
                          {item.text}
                        </LocalizedClientLink>
                      </li>
                    </>
                  )
                })}
              </ul>
            </div>
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  CATEGORIES
                </span>
                <ul className="grid grid-cols-1 gap-2">
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return null;  // Ensure to return null when condition is met
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-white poppins",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children.map((child) => (
                              <li key={child.id}>
                                <LocalizedClientLink
                                  className="hover:text-white poppins"
                                  href={`/categories/${child.handle}`}
                                >
                                  {child.name}
                                </LocalizedClientLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  COLLECTIONS
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-white poppins"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">SEA SKY </span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <a
                    href="https://www.facebook.com/seasky.ltd"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white poppins"
                  >
                    Facebook Page Link
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/seasky.ltd"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white poppins"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white"
                  >

                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Sea Sky. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
