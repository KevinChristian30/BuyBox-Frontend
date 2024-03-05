"use client";

import ProductGrid from "@/components/domain/ProductGrid";
import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";
import { getProducts } from "@/services/product/product.list";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Empty } from "antd";

const Page = () => {
  const [products, setProducts] = useState<ProductResponseDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data: ProductResponseDTO[] = await getProducts(
        searchParams.get("name") as string
      );
      setProducts(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  return (
    <div className="py-16">
      {products.length == 0 ? (
        <Empty description="The product you're searching for doesn't exist yet." />
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
};

export default Page;
