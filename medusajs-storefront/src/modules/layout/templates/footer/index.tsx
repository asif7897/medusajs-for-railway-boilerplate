
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


          {/**     
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

        */}
           

<div className="flex flex-col gap-y-2">
  <span className="txt-small-plus txt-ui-fg-base">SEA SKY</span>


  <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
  {/* Facebook Logo */}
  <li className="flex items-center">
    <svg
      className="mr-2 text-blue-600"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.675 0h-21.35C0.595 0 0 0.595 0 1.325v21.351C0 23.404 0.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.661-4.788 1.325 0 2.462 0.099 2.794 0.144v3.24l-1.917 0.001c-1.504 0-1.795 0.715-1.795 1.762v2.31h3.588l-0.467 3.622h-3.121V24h6.116C23.404 24 24 23.404 24 22.676V1.325C24 0.595 23.404 0 22.675 0z"/>
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
  
  {/* Instagram Logo */}
  <li className="flex items-center">
    <svg
      className="mr-2 text-pink-500"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="currentColor"></rect>
      <path d="M12 7.5C9.5 7.5 7.5 9.5 7.5 12C7.5 14.5 9.5 16.5 12 16.5C14.5 16.5 16.5 14.5 16.5 12C16.5 9.5 14.5 7.5 12 7.5ZM12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5Z" fill="white"/>
      <circle cx="18.5" cy="5.5" r="1.5" fill="white"/>
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
