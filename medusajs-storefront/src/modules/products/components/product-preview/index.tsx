import { Text } from "@medusajs/ui"
import { ProductPreviewType } from "types/global"
import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div>
        <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="full"
          isFeatured={isFeatured}
        />
        <div className="flex flex-col mt-4 sm:flex-row sm:justify-between">
          {/* Title and price stack vertically on mobile, side-by-side on larger screens */}
          <div className="flex flex-col">
            <Text className="text-ui-fg-subtle">{productPreview.title}</Text>
            {/* Ensure price is below title on mobile */}
            {cheapestPrice && (
              <div className="mt-2 sm:mt-0">
                <PreviewPrice price={cheapestPrice} />
              </div>
            )}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}