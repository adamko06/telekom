import { describe, expect, it } from 'vitest'
import { filterProductsByPrice } from '../index'

const products = [
  { id: 1, price: 10 },
  { id: 2, price: 50 },
  { id: 3, price: 100 },
]

describe('filterProductsByPrice', () => {
  it('returns all products if no min/max', () => {
    expect(filterProductsByPrice(products, {})).toHaveLength(3)
  })

  it('filters by minPrice', () => {
    expect(filterProductsByPrice(products, { minPrice: 50 })).toEqual([
      { id: 2, price: 50 },
      { id: 3, price: 100 },
    ])
  })

  it('filters by maxPrice', () => {
    expect(filterProductsByPrice(products, { maxPrice: 50 })).toEqual([
      { id: 1, price: 10 },
      { id: 2, price: 50 },
    ])
  })

  it('filters by minPrice and maxPrice', () => {
    expect(
      filterProductsByPrice(products, { minPrice: 20, maxPrice: 80 }),
    ).toEqual([{ id: 2, price: 50 }])
  })

  it('returns empty if no products in range', () => {
    expect(filterProductsByPrice(products, { minPrice: 200 })).toEqual([])
  })
})
