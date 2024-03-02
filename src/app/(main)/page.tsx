"use client";

import Spacer, { SpacerDirection } from "@/components/commons/Spacer";
import ProductGrid from "@/components/domain/ProductGrid";
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
            id: product.id + "",
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

        <ProductGrid products={products} />
      </div>
    </div>
  );
}
