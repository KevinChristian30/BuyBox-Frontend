"use client";

import Loading from "@/components/commons/Loading";
import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";
import { getProduct } from "@/services/product/product.get";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Carousel, Descriptions } from "antd";
import React, { useEffect, useState } from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<ProductResponseDTO>();

  const fetchProductDetail = async () => {
    setLoading(true);
    const response = await getProduct(
      "asshafhiwuh-adaksjdha-asdlajkdklaj-alsdjjalsj"
    );

    setProduct(response);
    console.log(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  return (
    <div className="flex flex-col py-16 px-32 justify-center items-center">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex gap-8 items-center">
          <div className="w-[400px] border border-solid border-gray-200 rounded-lg shadow-2xl">
            <Carousel arrows autoplay>
              {product?.medias.map((product) => {
                return (
                  <img src={product.url} key={product.id} alt={product.id} />
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
            </Descriptions>
            <Button
              type="primary"
              size="large"
              shape="round"
              icon={<ShoppingCartOutlined />}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
