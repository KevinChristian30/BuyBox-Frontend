"use client";

import Loading from "@/components/commons/Loading";
import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";
import { getProduct } from "@/services/product/product.get";
import {
  DeleteOutlined,
  ProductOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import {
  Button,
  Carousel,
  Descriptions,
  Empty,
  InputNumber,
  notification,
} from "antd";
import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../layout";
import deleteProduct from "@/services/product/product.delete";
import { useRouter } from "next/navigation";
import { addProductToCart } from "@/services/cart/cart.product.create";
import CartProductAddDTO from "@/dtos/requests/cart/product.create.dto";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [loading, setLoading] = useState<boolean>(true);
  const [addToCartLoading, setAddToCardLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductResponseDTO | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [api, contextHolder] = notification.useNotification();
  const { user, loading: currentUserLoading } = useCurrentUser();
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

  const attemptAddToCart = async () => {
    try {
      setAddToCardLoading(true);
      const dto: CartProductAddDTO = {
        product_id: id,
        quantity: quantity
      }
      await addProductToCart(dto);
    } catch {
      api.error({
        message: "Something went wrong",
        description: "Please try again.",
        placement: "top",
      });
    } finally {
      setAddToCardLoading(false);
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
              {product?.medias.map((image) => {
                return (
                  <img
                    src={image}
                    key={image}
                    alt={product.name}
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
                    onClick={() =>
                      router.push(`/products/${product.id}/update`)
                    }
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
                <div className="flex gap-4">
                  <InputNumber
                    min={1}
                    size="large"
                    value={quantity}
                    onChange={(e: any) => setQuantity(e)}
                  />
                  <Button
                    type="primary"
                    size="large"
                    shape="round"
                    icon={<ShoppingCartOutlined />}
                    loading={addToCartLoading}
                    onClick={attemptAddToCart}
                  >
                    Add to Cart
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
