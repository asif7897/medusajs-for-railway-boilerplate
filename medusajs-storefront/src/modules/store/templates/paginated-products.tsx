import { getProductsListWithSort, getRegion } from "@lib/data";
import ProductPreview from "@modules/products/components/product-preview";
import { Pagination } from "@modules/store/components/pagination";
import { SortOptions } from "@modules/store/components/refinement-list/sort-products";

const PRODUCT_LIMIT = 12;

type PaginatedProductsParams = {
  limit: number;
  collection_id?: string[];
  category_id?: string[];
  id?: string[];
};

export default async function PaginatedProducts({
  sortBy,
  page,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
}: {
  sortBy?: SortOptions;
  page: number;
  collectionId?: string;
  categoryId?: string;
  productsIds?: string[];
  countryCode: string;
}) {
  const region = await getRegion(countryCode);

  if (!region) {
    return null;
  }

  const queryParams: PaginatedProductsParams = {
    limit: PRODUCT_LIMIT,
  };

  if (collectionId) {
    queryParams["collection_id"] = [collectionId];
  }

  if (categoryId) {
    queryParams["category_id"] = [categoryId];
  }

  if (productsIds) {
    queryParams["id"] = productsIds;
  }

  const {
    response: { products, count },
  } = await getProductsListWithSort({
    page,
    queryParams,
    sortBy,
    countryCode,
  });

  const totalPages = Math.ceil(count / PRODUCT_LIMIT);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Product Grid */}
      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-6">
        {products.map((p) => (
          <li
            key={p.id}
            className="p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <ProductPreview productPreview={p} region={region} />
          </li>
        ))}
      </ul>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination page={page} totalPages={totalPages} />
        </div>
      )}
    </div>
  );
}
