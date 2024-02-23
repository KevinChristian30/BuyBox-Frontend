"use client";

import ProductCard from "@/components/commons/ProductCard";
import Spacer, { SpacerDirection } from "@/components/commons/Spacer";
import { Hero } from "@/components/ui/Hero";
import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";
import { getProducts } from "@/services/product/product.list";
import { Typography } from "antd";

export default function Home() {
  const products: ProductResponseDTO[] = getProducts();

  return (
    <div>
      <Hero
        products={products.map((product) => {
          return {
            title: product.name,
            price: product.price,
            thumbnail: product.medias[0].url,
          };
        })}
      />

      <Spacer direction={SpacerDirection.VERTICAL} space={200} />

      <div className="flex flex-col items-center">
        <Typography.Title>Browse BuyBox</Typography.Title>
        <Spacer direction={SpacerDirection.VERTICAL} space={50} />

        <div className="flex items-center justify-center px-48 flex-wrap">
          {products.map((product) => {
            return (
              <div className="m-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
