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

  it('returns empty for empty product array', () => {
    expect(filterProductsByPrice([], { minPrice: 10 })).toEqual([])
  })

  it('handles products with undefined price', () => {
    const prods = [{ id: 1 }, { id: 2, price: 50 }]
    expect(filterProductsByPrice(prods, { minPrice: 10 })).toEqual([
      { id: 2, price: 50 },
    ])
  })

  it('handles minPrice > maxPrice', () => {
    expect(
      filterProductsByPrice(products, { minPrice: 100, maxPrice: 10 }),
    ).toEqual([])
  })

  it('works with negative prices (e.g. discounts)', () => {
    const prods = [
      { id: 1, price: -5 },
      { id: 2, price: 20 },
      { id: 3, price: 0 },
    ]
    expect(
      filterProductsByPrice(prods, { minPrice: -10, maxPrice: 0 }),
    ).toEqual([
      { id: 1, price: -5 },
      { id: 3, price: 0 },
    ])
  })

  it('filters products with very high prices', () => {
    const prods = [
      { id: 1, price: 999999 },
      { id: 2, price: 49.99 },
      { id: 3, price: 1500000 },
    ]
    expect(filterProductsByPrice(prods, { minPrice: 1000000 })).toEqual([
      { id: 3, price: 1500000 },
    ])
  })
})
