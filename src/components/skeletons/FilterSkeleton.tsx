import { Card, CardContent, Skeleton } from '@ui'

const FilterSkeleton = () => (
  <Card className="w-full max-w-xs">
    <CardContent className="p-6 flex flex-col gap-4">
      <Skeleton className="h-6 w-32 mb-2" />
      <div className="flex gap-2 mt-4">
        <Skeleton className="h-5 w-5 flex-1" />
        <Skeleton className="h-5 w-5 flex-1" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-10 w-32 flex-1" />
        <Skeleton className="h-10 w-20 flex-1" />
      </div>
    </CardContent>
  </Card>
)

export default FilterSkeleton
