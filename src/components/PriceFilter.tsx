'use client'

import type { Product } from '@types'
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from '@ui'
import { filterProductsByPrice } from '@utils'
import { useCallback, useEffect, useState } from 'react'

type PriceFilterProps = {
  products: Product[]
  filteredProducts: Product[]
  onFilteredProductsChange: (filteredProducts: Product[]) => void
}

const PriceFilter = ({
  products,
  filteredProducts,
  onFilteredProductsChange,
}: PriceFilterProps) => {
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const handleApplyFilter = useCallback(() => {
    const filters: { minPrice?: number; maxPrice?: number } = {}

    if (minPrice) {
      const min = parseFloat(minPrice)
      if (!isNaN(min)) {
        filters.minPrice = min
      }
    }

    if (maxPrice) {
      const max = parseFloat(maxPrice)
      if (!isNaN(max)) {
        filters.maxPrice = max
      }
    }

    const filtered = filterProductsByPrice(products, filters)
    onFilteredProductsChange(filtered)
  }, [minPrice, maxPrice, products, onFilteredProductsChange])

  const handleReset = () => {
    setMinPrice('')
    setMaxPrice('')
    onFilteredProductsChange(products)
  }

  useEffect(() => {
    handleApplyFilter()
  }, [handleApplyFilter])

  return (
    <div className="lg:sticky lg:top-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filter by Price</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="min-price" className="text-sm font-medium">
                  Min Price
                </label>
                <Input
                  id="min-price"
                  type="number"
                  placeholder="0"
                  value={minPrice}
                  onChange={e => setMinPrice(e.target.value)}
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="max-price" className="text-sm font-medium">
                  Max Price
                </label>
                <Input
                  id="max-price"
                  type="number"
                  placeholder="1000"
                  value={maxPrice}
                  onChange={e => setMaxPrice(e.target.value)}
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="default"
                className="w-full"
                onClick={handleReset}
              >
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="mt-4">
        <p className="text-sm text-muted-foreground">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>
    </div>
  )
}

export default PriceFilter
