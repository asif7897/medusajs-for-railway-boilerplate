import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import Carousel from "Components/Carousel/Carousel"

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
  const images: string[] = [
    'https://www.yellowclothing.net/cdn/shop/files/slider-ethnic.jpg?v=1715843122&width=2000',
    'https://www.yellowclothing.net/cdn/shop/files/slider-main.jpg?v=1715840962&width=2000',
    'https://www.yellowclothing.net/cdn/shop/files/Web-2_2c337e09-a006-463a-b823-d1a608f9e8b8.jpg?v=1716195778&width=2000',
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>

      <Carousel images={images} auto interval={5000} />
      {/* <Hero /> */}
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>


      <section className="pb-7 pt-10 space-y-1">
        <h2 className="w-full text-center text-2xl lg:text-3xl font-semibold">
          Hot Products
        </h2>
        <div className="flex flex-col md:flex-row justify-start items-start h-[95vh] md:h-[80vh]">
          <div className="w-full md:w-1/2 h-full category-card-1" />
          <div className="w-full md:w-1/2 h-full category-card-2" />
        </div>
      </section>




    </>
  )
}
