import { Text, clx } from "@medusajs/ui";
import { getCategoriesList, getCollectionsList } from "@lib/data";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import MedusaCTA from "@modules/layout/components/medusa-cta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6);
  const { product_categories } = await getCategoriesList(0, 6);

  return (
    <footer className="border-t border-white w-full bg-black text-white">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-white hover:text-gray-400 uppercase"
            >
              S E A S K Y
            </LocalizedClientLink>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-white">
                  Categories
                </span>
                 
                <hr className="border-white my-1" /> {/* White line below Categories */}


                <ul className="grid grid-cols-1 gap-2">
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return null;
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null;

                    return (
                      <li
                        className="flex flex-col gap-2 text-white txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-gray-400",
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
                                  className="hover:text-gray-400"
                                  href={`/categories/${child.handle}`}
                                >
                                  {child.name}
                                </LocalizedClientLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
               
              </div>
            )}
            
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-white">
                  Collections
                </span>
                <hr className="border-white my-2" /> {/* White line below Collections */}

                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-white txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-gray-400"
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
        
              <span className="txt-small-plus text-white">Sea Sky</span>
              <hr className="border-white my-2" /> {/* White line below Sea Sky */}
              <ul className="grid grid-cols-1 gap-y-2 text-white txt-small">
                <li>
                  <a
                    href="https://www.facebook.com/seasky.ltd"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-400 flex items-center gap-2 transition duration-300 ease-in-out transform hover:scale-110"
                  >
                    <FontAwesomeIcon icon={faFacebook} style={{ height: "20px", width: "20px" }} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/seasky.ltd"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-400 flex items-center gap-2 transition duration-300 ease-in-out transform hover:scale-110"
                  >
                    <FontAwesomeIcon icon={faInstagram} style={{ height: "20px", width: "20px" }} />
                  </a>
                </li>
              </ul>
            
            </div>
          </div>
        </div>
        <hr className="border-white w-full ysmall:hidden" />
        <div className="flex w-full mb-16 justify-between text-gray-400">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Sea Sky. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  );
}
