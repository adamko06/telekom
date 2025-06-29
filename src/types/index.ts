import type { components, operations } from './generated'

export type { components, operations, paths } from './generated'
export type { ProductFilters }

export type Product = components['schemas']['Product']
export type ProductsResponse =
  operations['getAllProducts']['responses']['200']['content']['application/json']
export type ProductResponse =
  operations['getProductById']['responses']['200']['content']['application/json']
export type CategoriesResponse = string[]

type ProductFilters = {
  minPrice?: number
  maxPrice?: number
  category?: string
}
