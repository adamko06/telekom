import { getProduct } from '@api'
import { ProductDetailSkeleton } from '@components'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import ProductDetail from './ProductDetail'

type ProductPageProps = {
  params: Promise<{ id: string }>
}

const ProductData = async ({ id }: { id: string }) => {
  try {
    const product = await getProduct(parseInt(id))
    return <ProductDetail product={product} />
  } catch {
    notFound()
  }
}

const Loading = () => <ProductDetailSkeleton />

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params

  return (
    <Suspense fallback={<Loading />}>
      <ProductData id={id} />
    </Suspense>
  )
}

export default ProductPage
