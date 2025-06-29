'use client'

import { PriceFilter, ProductGrid } from '@components'
import type { Product } from '@types'
import { useState } from 'react'

type ClientPageProps = {
  products: Product[]
}

const ClientPage = ({ products }: ClientPageProps) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-8 items-center">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Product Catalog</h1>
        <p className="text-muted-foreground">Discover our amazing products</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 w-full">
        <div className="w-full lg:w-1/4">
          <PriceFilter
            products={products}
            filteredProducts={filteredProducts}
            onFilteredProductsChange={setFilteredProducts}
          />
        </div>
        <div className="w-full lg:w-3/4">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  )
}

export default ClientPage
