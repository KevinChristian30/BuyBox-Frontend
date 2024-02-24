import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";
import React from "react";
import ProductCard from "../commons/ProductCard";
import Link from "next/link";

interface IProductGridProps {
  products: ProductResponseDTO[];
}

const ProductGrid = (props: IProductGridProps) => {
  const { products } = props;

  return (
    <div className="flex items-center justify-center px-48 flex-wrap">
      {products.map((product) => {
        return (
          <div className="m-4" key={product.id}>
            <Link href={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductGrid;
