import { ProductSkeleton } from '@components'

type ProductGridSkeletonProps = {
  count?: number
}

const ProductGridSkeleton = ({ count = 12 }: ProductGridSkeletonProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  )
}

export default ProductGridSkeleton
