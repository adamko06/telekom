import { getProducts } from '@api'
import { Suspense } from 'react'
import ClientPage from './ClientPage'

export const revalidate = 3600

const ProductList = async () => {
  const products = await getProducts()
  return <ClientPage products={products} />
}

const Loading = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
      <p className="mt-4 text-muted-foreground">Loading products...</p>
    </div>
  </div>
)

const HomePage = () => (
  <Suspense fallback={<Loading />}>
    <ProductList />
  </Suspense>
)

export default HomePage
