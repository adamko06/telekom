import type { Product } from '@types'
import { Badge, Card, CardContent, CardFooter, CardHeader } from '@ui'
import Image from 'next/image'
import Link from 'next/link'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => (
  <Card className="flex flex-col h-full">
    <CardHeader className="p-4 pb-2">
      <div className="relative w-full aspect-[4/3] bg-white rounded-lg overflow-hidden">
        <Image
          src={product.image || '/placeholder-image.jpg'}
          alt={product.title || 'Product'}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </CardHeader>
    <CardContent className="flex-1 p-4 pt-2 flex flex-col">
      <Badge variant="secondary" className="text-xs mb-2">
        {product.category || 'Uncategorized'}
      </Badge>
      <h3 className="font-semibold text-sm line-clamp-2 mb-1">
        {product.title || 'Untitled Product'}
      </h3>
      <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
        {product.description || 'No description available'}
      </p>
    </CardContent>
    <CardFooter className="p-4 pt-0 flex flex-col gap-2">
      <span className="text-lg font-bold">
        ${product.price ? product.price.toFixed(2) : '0.00'}
      </span>
      <Link
        href={`/product/${product.id || 'unknown'}`}
        className="w-full text-center bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
      >
        View Details
      </Link>
    </CardFooter>
  </Card>
)

export default ProductCard
