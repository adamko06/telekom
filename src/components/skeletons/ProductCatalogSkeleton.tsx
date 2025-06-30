import CatalogHeaderSkeleton from './CatalogHeaderSkeleton'
import FilterSkeleton from './FilterSkeleton'
import ProductGridSkeleton from './ProductGridSkeleton'

const ProductCatalogSkeleton = () => (
  <div className="container mx-auto px-4 py-8">
    <CatalogHeaderSkeleton />
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      <div className="w-full max-w-xs lg:sticky top-8">
        <FilterSkeleton />
      </div>
      <div className="flex-1">
        <ProductGridSkeleton count={8} />
      </div>
    </div>
  </div>
)

export default ProductCatalogSkeleton
