
import { Text, clx } from "@medusajs/ui"
import { getCategoriesList, getCollectionsList } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import './styles.css'
import { Routes } from "@lib/util/footer-link-list"
import ContactButtons from "@modules/layout/components/contact-button"

 




export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
 
  return (
    <footer className="border-t border-ui-border-base w-full bg-black text-white footer_class"> {/* Updated background and text color */}
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-20">
          <div className="flex flex-col">
            <div>
              <LocalizedClientLink
                href="/"
                className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-white uppercase"
              >
                S E A S K Y
              </LocalizedClientLink>
            </div>
            <ContactButtons />
          </div>

          <div className="text-small-regular gap-10 md:gap-x-13 grid grid-cols-2 sm:grid-cols-4 md:pl-[40px]">
            {/*  */}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">
                ABOUT US
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
  <span className="txt-small-plus txt-ui-fg-base">SEA SKY</span>
  <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
    <li className="flex items-center">
      <svg
        className="mr-2 text-blue-600"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 12.072C22 11.575 21.979 11.08 21.936 10.591H12V13.682H17.287C17.183 14.577 16.95 15.417 16.612 16.166V16.166C16.127 17.085 15.456 17.88 14.66 18.469V18.469C13.613 19.234 12.268 19.607 10.93 19.607C8.427 19.607 6.253 17.33 6.253 14.131C6.253 11.732 8.407 9.56 10.95 9.56C12.326 9.56 13.543 10.43 14.354 11.61C14.542 11.954 14.606 12.344 14.606 12.072C14.606 12.032 14.606 12.014 14.606 12.014C14.606 11.919 14.607 11.757 14.633 11.596C14.764 10.657 15.367 9.838 16.215 9.321C17.265 8.685 18.445 8.353 19.639 8.353C20.148 8.353 20.652 8.437 21.134 8.542C21.893 8.695 22.6 9.105 23.116 9.667C23.208 9.767 23.278 9.892 23.318 10.035C23.348 10.155 23.358 10.281 23.358 10.407C23.358 11.054 23.188 11.613 22.897 12.009C22.633 12.385 22.225 12.666 21.758 12.812C21.498 12.883 21.25 12.945 21 12.945C20.782 12.945 20.573 12.878 20.379 12.764C19.568 12.342 18.796 12.035 18.054 11.812C17.236 11.594 16.449 11.453 15.664 11.453C14.976 11.453 14.293 11.647 13.629 12.038C13.013 12.396 12.447 12.874 12.06 13.504H12V12.072H22Z" />
      </svg>
      <a
        href="https://www.facebook.com/seasky.ltd"
        target="_blank"
        rel="noreferrer"
        className="hover:text-white poppins"
      >
        Facebook
      </a>
    </li>
    <li className="flex items-center">
      <svg
        className="mr-2 text-pink-500"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2.5C6.76 2.5 2 7.26 2 12.5C2 17.78 6.76 22.5 12 22.5C17.24 22.5 22 17.78 22 12.5C22 7.26 17.24 2.5 12 2.5ZM12 20.35C8.28 20.35 5.05 17.19 5.05 12.5C5.05 7.86 8.28 4.5 12 4.5C15.72 4.5 18.95 7.86 18.95 12.5C18.95 17.19 15.72 20.35 12 20.35ZM14.74 15.68C14.6 15.68 14.47 15.69 14.34 15.69C13.85 15.69 13.37 15.49 12.94 15.15C12.51 14.82 12.3 14.36 12.3 13.88V13.87C12.3 13.54 12.45 13.25 12.69 13.09C12.89 12.92 13.14 12.8 13.39 12.8C13.67 12.8 13.96 12.94 14.2 13.2C14.44 13.47 14.59 13.78 14.59 14.1V14.1C14.59 14.65 14.33 15.15 13.86 15.41C13.57 15.57 13.25 15.68 12.94 15.68C12.8 15.68 12.65 15.65 12.51 15.58C12.3 15.5 12.11 15.33 12.05 15.08" />
      </svg>
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
        href="#"
        target="_blank"
        rel="noreferrer"
        className="hover:text-white"
      >
        {/* Add more links as needed */}
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
