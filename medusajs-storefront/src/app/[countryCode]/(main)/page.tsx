import { Product } from "@medusajs/medusa";
import { Metadata } from "next";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import { getCollectionsList, getProductsList, getRegion } from "@lib/data";
import FeaturedProducts from "@modules/home/components/featured-products";
import Hero from "@modules/home/components/hero";
import { ProductCollectionWithPreviews } from "types/global";
import { cache } from "react";
import Carousel from "Components/Carousel/Carousel";
import CategorySlick from "Files/HomePage/Category-slider";

export const metadata: Metadata = {
  title: "Sea Sky",
  description: "SEA SKY",
};

const getCollectionsWithProducts = cache(
  async (countryCode: string): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3);

    if (!collections) {
      return null;
    }

    const collectionIds = collections.map((collection) => collection.id);

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection;

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          );
        }

        if (!collection) {
          return;
        }

        collection.products = response.products as unknown as Product[];
      })
    );

    return collections as unknown as ProductCollectionWithPreviews[];
  }
);

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string };
}) {
  const collections = await getCollectionsWithProducts(countryCode);
  const region = await getRegion(countryCode);
  if (!collections || !region) {
    return null;
  }

  const slides = [
    {
      image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720379189/PKC_7433copy_grcqfn.jpg",
      name: "Suit",
      value: "suit",
    },
    {
      image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720379758/st1366_tiwmqi.jpg",
      name: "Blazer",
      value: "blazer",
    },
    {
      image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720379503/PKC_6783copy_jfer1o.jpg",
      name: "Punjabi",
      value: "punjabi",
    },
    {
      image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720379885/09-05-2024product00376_1024x1024_2x_j7tk27.jpg",
      name: "Formal shirt",
      value: "shirt",
    },
    {
      image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720380349/90_1010982-1A07978_1B000_10_WoolFormalPants-Clothing-Versace-online-store_1_3_x7zrpk.png",
      name: "Pant",
      value: "pant",
    },
    {
      image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720380496/A23WS0152363408_BLUE_vmxomo.jpg",
      name: "Shirt",
      value: "shirt",
    },
  ];

  return (
    <>
      <Carousel auto interval={5000} />
      {/* <div className="w-full">
        <div className="px-[10px]">
          <CategorySlick slides={slides} />
        </div>
      </div> */}


      {/* <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div> */}












      <section className="pb-4 pt-6 space-y-1 px-4 md:px-8">
        

        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between items-start h-[80vh] md:h-[70vh]">
          <a
            href="/collections/luxury_belt"
            className="w-full md:w-[calc(50%-8px)] h-full relative flex items-center justify-center overflow-hidden rounded-lg bg-gray-700 group"
            style={{ backgroundImage: 'url("https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/v2/banner/mens")' }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
              src="https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/v2/banner/mens"
              alt="Luxury Belt"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100"
              src="https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/v2/banner/mens"
              alt="Luxury Belt Hover"
            />
            <svg
              className="absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
              />
            </svg>
            <button className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-gray-300 text-4xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               SHOP NOW
            </button>
          </a>

          <a
            href="/collections/premium_suit"
            className="w-full md:w-[calc(50%-8px)] h-full relative flex items-center justify-center overflow-hidden rounded-lg bg-gray-700 group"
            style={{ backgroundImage: 'url("https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/v2/banner/womens")' }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
              
              src="https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/v2/banner/womens"


              alt="Box Tie"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100"
              src="https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/v2/banner/womens"
              alt="Box Tie Hover"
            />
            <svg
              className="absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
              />
            </svg>
            <button className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-gray-300 text-4xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               SHOP NOW
            </button>
          </a>
        </div>
      </section>
















      <section className="py-12 px-4 md:px-8">
  <h2 className="text-center text-2xl lg:text-3xl font-semibold mb-4 text-gray-700">GIFT CARD</h2>
  <div className="relative flex items-center justify-center w-full h-[50vh] md:h-[70vh] bg-gray-200 rounded-lg overflow-hidden">
    <img
      className="absolute inset-0 w-full h-full object-cover"
      src="https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/others/Gift_card_web_banner_jyzvs5.webp"
      alt="Gift Card"
    />
    <div className="relative z-10 flex flex-col items-end justify-center w-full h-full bg-opacity-10 text-white p-4 md:p-6">
      <h3 className="text-lg md:text-xl font-semibold mb-2 text-right text-gray-300">Get the Perfect Gift</h3>
      <p className="text-base mb-4 text-right text-gray-300">Our gift cards are perfect for any occasion.</p>
      <a
        href="/collections/gift_card"
        className="bg-white text-gray-800 py-2 px-4 rounded-lg text-right hover:bg-gray-300 hover:shadow-lg transition-colors duration-300"
      >
        Buy Now
      </a>
    </div>
  </div>
</section>




      {/* Facebook Pixel Integration */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
