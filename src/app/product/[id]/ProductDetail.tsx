import type { Product } from '@types'
import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from '@ui'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type ProductDetailProps = {
  product: Product
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button asChild variant="ghost" className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft />
            Back to Products
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative aspect-square bg-white rounded-lg overflow-hidden border">
          <Image
            src={product.image || '/placeholder-image.jpg'}
            alt={product.title || 'Product'}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-3">
              {product.category || 'Uncategorized'}
            </Badge>
            <h1 className="text-3xl font-bold mb-4">
              {product.title || 'Untitled Product'}
            </h1>
            <div className="text-4xl font-bold text-primary mb-6">
              ${product.price ? product.price.toFixed(2) : '0.00'}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {product.description || 'No description available'}
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1">
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              Buy Now
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Availability:</span>
              <span className="ml-2 text-green-600 font-medium">In Stock</span>
            </div>
            <div>
              <span className="text-muted-foreground">Product ID:</span>
              <span className="ml-2">{product.id}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
