import { getProducts } from '@api'
import { ProductCatalogSkeleton } from '@components'
import { Suspense } from 'react'
import ClientPage from './ClientPage'

export const revalidate = 3600

const ProductList = async () => {
  const products = await getProducts()
  return <ClientPage products={products} />
}

const Loading = () => <ProductCatalogSkeleton />

const HomePage = () => (
  <Suspense fallback={<Loading />}>
    <ProductList />
  </Suspense>
)

export default HomePage
