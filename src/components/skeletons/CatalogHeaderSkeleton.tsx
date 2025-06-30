import { Skeleton } from '@ui'

const CatalogHeaderSkeleton = () => (
  <div className="mb-8 text-center">
    <Skeleton className="h-10 w-64 mx-auto mb-2" />
    <Skeleton className="h-5 w-80 mx-auto" />
  </div>
)

export default CatalogHeaderSkeleton
