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


     
      <section className="pb-7 pt-10 space-y-1">
  <h2 className="w-full text-center text-2xl lg:text-3xl font-semibold">
    ACCESSORIES
  </h2>
  <div className="flex flex-col md:flex-row justify-start items-start h-[95vh] md:h-[80vh]">
    <a href="/collections/luxury_belt" className="w-full md:w-1/2 h-full category-card-1 block">
      
    </a>
    <a href="/collections/box_tie" className="w-full md:w-1/2 h-full category-card-2 block">
      
    </a>
  </div>
</section>


      <section className="pb-7 pt-10 space-y-1">
  <div className="image-container flex items-center justify-center relative w-full h-full">
    <img
      className="object-cover object-fit h-full w-full lg:h-[95vh] md:h-[80vh] transition-transform duration-500 ease-in-out transform hover:scale-105"
      src="https://res.cloudinary.com/dqgrlf8uf/image/upload/v1724359760/Gift_Card_Banner_21-01_zzddwf.webp"
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
