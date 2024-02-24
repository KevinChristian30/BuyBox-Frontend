import ProductGrid from '@/components/domain/ProductGrid'
import ProductResponseDTO from '@/dtos/responses/product/product.response.dto';
import { getProducts } from '@/services/product/product.list';
import React from 'react'

const Page = () => {
  const products: ProductResponseDTO[] = getProducts();

  return (
    <div className="py-16">
      <ProductGrid products={products} />
    </div>
  )
}

export default Page