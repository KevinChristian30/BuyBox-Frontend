"use client";

import Loading from "@/components/commons/Loading";
import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";
import { getProduct } from "@/services/product/product.get";
import {
  DeleteOutlined,
  ProductOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button, Carousel, Descriptions, Empty, notification } from "antd";
import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../layout";
import deleteProduct from "@/services/product/product.delete";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<ProductResponseDTO | null>(null);
  const { user, loading: currentUserLoading } = useCurrentUser();
  const [api, contextHolder] = notification.useNotification();
  const router = useRouter();

  const fetchProductDetail = async () => {
    try {
      setLoading(true);
      const response = await getProduct(id);
      setProduct(response);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  const attemptDeleteProduct = async () => {
    try {
      setLoading(true);
      await deleteProduct(id);
      api.success({
        message: "Success",
        description: "Product deleted",
        placement: "top",
      });
      setProduct(null);
    } catch (error) {
      api.error({
        message: "Something Went Wrong",
        description: "Please try again.",
        placement: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col py-16 px-32 justify-center items-center">
      {contextHolder}
      {loading ? (
        <Loading />
      ) : product == null ? (
        <Empty description="Product doesn't exist" />
      ) : (
        <div className="flex gap-8 items-center justify-start w-full">
          <div className="w-[400px] border border-solid border-gray-200 rounded-lg shadow-2xl">
            <Carousel arrows autoplay>
              {product?.medias.map((product) => {
                return (
                  <img
                    src={product.url}
                    key={product.id}
                    alt={product.id}
                    className="w-[300px] aspect-square object-cover"
                  />
                );
              })}
            </Carousel>
          </div>
          <div className="flex flex-col gap-16">
            <Descriptions title={product?.name} bordered column={1}>
              <Descriptions.Item label="Category">
                {product?.category}
              </Descriptions.Item>
              <Descriptions.Item label="Description">
                {product?.description}
              </Descriptions.Item>
              <Descriptions.Item label="Price">
                {product?.price + " ICP"}
              </Descriptions.Item>
              <Descriptions.Item label="Stock">
                {product?.stock}
              </Descriptions.Item>
            </Descriptions>
            <div className="flex gap-2">
              {currentUserLoading ? (
                <Loading />
              ) : user?.id === product?.store_id ? (
                <div className="flex gap-2">
                  <Button
                    size="large"
                    shape="round"
                    type="primary"
                    icon={<ProductOutlined />}
                    loading={loading}
                    onClick={() => router.push(`/products/${product.id}/update`)}
                  >
                    Update
                  </Button>
                  <Button
                    size="large"
                    shape="round"
                    icon={<DeleteOutlined />}
                    danger
                    loading={loading}
                    onClick={attemptDeleteProduct}
                  >
                    Delete
                  </Button>
                </div>
              ) : (
                <Button
                  type="primary"
                  size="large"
                  shape="round"
                  icon={<ShoppingCartOutlined />}
                  loading={loading}
                >
                  Add to Cart
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
