"use client";

import Spacer, { SpacerDirection } from "@/components/commons/Spacer";
import ProductGrid from "@/components/domain/ProductGrid";
import { Hero } from "@/components/ui/Hero";
import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";
import { getProducts } from "@/services/product/product.list";
import { getMockProducts } from "@/services/product/product.mock";
import { Typography } from "antd";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<ProductResponseDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data: ProductResponseDTO[] = await getProducts();
      setProducts(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Hero
        products={getMockProducts().map((product) => {
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
