import { Card, CardContent, CardFooter, CardHeader, Skeleton } from '@ui'

const ProductSkeleton = () => (
  <Card className="flex flex-col h-full" data-testid="product-skeleton">
    <CardHeader className="p-4 pb-2">
      <Skeleton className="w-full aspect-[4/3] rounded-lg" />
    </CardHeader>
    <CardContent className="flex-1 p-4 pt-2 flex flex-col">
      <Skeleton className="h-5 w-20 mb-2" />
      <Skeleton className="h-4 w-full mb-1" />
      <Skeleton className="h-4 w-3/4 mb-1" />
      <Skeleton className="h-3 w-full mb-2" />
      <Skeleton className="h-3 w-2/3 mb-2" />
    </CardContent>
    <CardFooter className="p-4 pt-0 flex flex-col gap-2">
      <Skeleton className="h-6 w-16" />
      <Skeleton className="h-9 w-full" />
    </CardFooter>
  </Card>
)

export default ProductSkeleton
