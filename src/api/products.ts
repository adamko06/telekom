import type {
  CategoriesResponse,
  ProductResponse,
  ProductsResponse,
} from '@types'
import { API_BASE_URL, CACHE_REVALIDATE_TIME } from '@utils'

const fetchAPI = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    next: { revalidate: CACHE_REVALIDATE_TIME },
  })

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`)
  }

  return response.json()
}

export const getProducts = async (): Promise<ProductsResponse> => {
  try {
    return await fetchAPI<ProductsResponse>('/products')
  } catch {
    throw new Error('Failed to fetch products')
  }
}

export const getProduct = async (id: number): Promise<ProductResponse> => {
  try {
    return await fetchAPI<ProductResponse>(`/products/${id}`)
  } catch {
    throw new Error(`Failed to fetch product ${id}`)
  }
}

export const getCategories = async (): Promise<CategoriesResponse> => {
  try {
    return await fetchAPI<CategoriesResponse>('/products/categories')
  } catch {
    throw new Error('Failed to fetch categories')
  }
}
