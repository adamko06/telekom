'use client'

import type { Product } from '@types'
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from '@ui'
import { useCallback, useEffect, useState } from 'react'

type PriceFilterProps = {
  products: Product[]
  onFilteredProductsChange: (filteredProducts: Product[]) => void
}

const PriceFilter = ({
  products,
  onFilteredProductsChange,
}: PriceFilterProps) => {
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const handleApplyFilter = useCallback(() => {
    let filtered = products

    if (minPrice) {
      const min = parseFloat(minPrice)
      if (!isNaN(min)) {
        filtered = filtered.filter(product => (product.price || 0) >= min)
      }
    }

    if (maxPrice) {
      const max = parseFloat(maxPrice)
      if (!isNaN(max)) {
        filtered = filtered.filter(product => (product.price || 0) <= max)
      }
    }

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
            <Button onClick={handleApplyFilter} className="flex-1">
              Apply Filter
            </Button>
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default PriceFilter
