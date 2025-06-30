import type { components, operations } from './generated'

export type Product = components['schemas']['Product']
export type ProductsResponse =
  operations['getAllProducts']['responses']['200']['content']['application/json']
export type ProductResponse =
  operations['getProductById']['responses']['200']['content']['application/json']
export type CategoriesResponse = string[]
