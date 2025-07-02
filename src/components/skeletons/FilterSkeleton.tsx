import { Card, CardContent, CardHeader, Skeleton } from '@ui'

const FilterSkeleton = () => (
  <div className="lg:sticky lg:top-4">
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-32 mb-2" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-16 mb-1" />
              <Skeleton className="h-9 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-16 mb-1" />
              <Skeleton className="h-9 w-full" />
            </div>
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-9 w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
    <div className="mt-4">
      <Skeleton className="h-4 w-48" />
    </div>
  </div>
)

export default FilterSkeleton
