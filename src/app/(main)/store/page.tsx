"use client";

import Loading from "@/components/commons/Loading";
import Spacer, { SpacerDirection } from "@/components/commons/Spacer";
import ProductGrid from "@/components/domain/ProductGrid";
import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";
import { getProductsByStoreId } from "@/services/product/product.list.by-user";
import { ProductOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../layout";

const Page = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductResponseDTO[]>([]);
  const { user, loading: currentUserLoading } = useCurrentUser();

  const fetchProducts = async () => {
    if (currentUserLoading || user === null) return;

    try {
      setLoading(true);
      const response: ProductResponseDTO[] = await getProductsByStoreId(
        user.id
      );
      setProducts(response);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentUserLoading]);

  return (
    <div className="my-16 mx-24">
      <Typography.Title>Your Store</Typography.Title>
      <Spacer direction={SpacerDirection.VERTICAL} space={40} />
      <div className="">
        <Link href={"/products/create"}>
          <Button type="primary" size="large" icon={<ProductOutlined />}>
            Add New Product
          </Button>
        </Link>
      </div>
      <Spacer direction={SpacerDirection.VERTICAL} space={32} />
      {loading ? <Loading /> : <ProductGrid products={products} />}
    </div>
  );
};

export default Page;
