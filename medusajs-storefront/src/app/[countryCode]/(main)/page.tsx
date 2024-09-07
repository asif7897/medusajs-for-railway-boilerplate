import { Product } from "@medusajs/medusa"
import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache, useEffect, useState } from "react"
import Carousel from "Components/Carousel/Carousel"
import CategorySlick from "Files/HomePage/Category-slider"

export const metadata: Metadata = {
  title: "Sea Sky",
  description:
    "SEA SKY ",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)
  if (!collections || !region) {
    return null
  }


  const slides = [
    {
      image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720379189/PKC_7433copy_grcqfn.jpg",
      name: "Suit",
      value: "suit"
    },
    {
      image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720379758/st1366_tiwmqi.jpg",
      name: "Blazer",
      value: "blazer"
    },
    {
      image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720379503/PKC_6783copy_jfer1o.jpg",
      name: "Punjabi",
      value: "punjabi"
    },
    {
      image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720379885/09-05-2024product00376_1024x1024_2x_j7tk27.jpg",
      name: "Formal shirt",
      value: "shirt"
    },
    {
      image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720380349/90_1010982-1A07978_1B000_10_WoolFormalPants-Clothing-Versace-online-store_1_3_x7zrpk.png",
      name: "Pant",
      value: "pant"
    },
    {
      image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720380496/A23WS0152363408_BLUE_vmxomo.jpg",
      name: "Shirt",
      value: "shirt"
    },
  ]

  return (
    <>

      <Carousel  auto interval={5000} />
      <div className="w-full ">
        <div className="px-[10px]">
          <CategorySlick slides={slides} />
        </div>
      </div>
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>





      <section className="pb-4 pt-6 space-y-1 px-4 md:px-8">
      <h2 className="w-full text-center text-2xl lg:text-3xl font-semibold mb-4">
  ACCESSORIES
</h2>

  <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between items-start h-[80vh] md:h-[70vh]">
    
    <a
      href="/collections/luxury_belt"
      className="w-full md:w-[calc(50%-8px)] h-full relative flex items-center justify-center overflow-hidden rounded-lg shadow-lg bg-gray-700 group"
      style={{ backgroundImage: 'url("https://res.cloudinary.com/dqgrlf8uf/image/upload/v1724359769/Belt_Banner_e49irb.webp")' }}
    >
      <img
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        src="https://res.cloudinary.com/dqgrlf8uf/image/upload/v1724359769/Belt_Banner_e49irb.webp"
        alt="Luxury Belt"
      />
      <img
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100"
        src="https://res.cloudinary.com/dqgrlf8uf/image/upload/v1723909870/eghjh_1723909870068.png"
        alt="Luxury Belt Hover"
      />
      <svg className="absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
      
      <button className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-gray-300 text-4xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  Shop Now
</button>



      
    </a>

    <a
      href="/collections/box_tie"
      className="w-full md:w-[calc(50%-8px)] h-full relative flex items-center justify-center overflow-hidden rounded-lg shadow-lg bg-gray-700 group"
      style={{ backgroundImage: 'url("https://res.cloudinary.com/dqgrlf8uf/image/upload/v1724359771/tie_section_mgdjoo.webp")' }}
    >
      <img
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        src="https://res.cloudinary.com/dqgrlf8uf/image/upload/v1724359771/tie_section_mgdjoo.webp"
        alt="Box Tie"
      />
      <img
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100"
        src="https://res.cloudinary.com/dqgrlf8uf/image/upload/v1723126267/RC-TIE-2.2_1723126266942.jpg"
        alt="Box Tie Hover"
      />
      <svg className="absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
      <button className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-gray-300 text-4xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  Shop Now
</button>

    </a>
  </div>
</section>







      <section className="pb-7 pt-10 space-y-1">
  <div className="image-container flex items-center justify-center relative w-full h-full">
    <img
      className="object-cover object-fit h-full w-full lg:h-[95vh] md:h-[80vh] transition-transform duration-500 ease-in-out transform hover:scale-105"
      src="https://res.cloudinary.com/dqgrlf8uf/image/upload/v1725661059/Gift_card_web_banner_o178kb.webp"
      alt="Gift Card Image"
    />
    <div className="blur-overlay absolute inset-0 bg-gray-900 opacity-50 z-10"></div>
    <LocalizedClientLink href="/collections/gift_card">
    <span className="absolute bottom-4 right-4 text-center text-2xl lg:text-3xl font-semibold text-white z-20 bg-gray-800 bg-opacity-70 p-4 rounded-lg shadow-lg border-2 border-gray-300 transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
      GIFT CARD
    </span>
    </LocalizedClientLink>
  </div>
</section>






    </>
  )
}
