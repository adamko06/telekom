export { cn } from './classNames'
export * from './constants'

export function filterProductsByPrice<T extends { price?: number }>(
  products: T[],
  filters: { minPrice?: number; maxPrice?: number },
): T[] {
  let filtered = products
  if (filters.minPrice !== undefined) {
    filtered = filtered.filter(p => (p.price ?? 0) >= filters.minPrice!)
  }
  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter(p => (p.price ?? 0) <= filters.maxPrice!)
  }
  return filtered
}
