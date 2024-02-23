import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import React from "react";

interface IProductCardProps {
  product: ProductResponseDTO;
}

const ProductCard = (props: IProductCardProps) => {
  const { product } = props;

  return (
    <Card
      cover={
        <Image
          alt={product.name}
          src={product.medias[0].url}
          width={100}
          height={100}
        />
      }
      className="w-[200px] hover:cursor-pointer"
      hoverable
      bordered
    >
      <Meta
        title={product.name}
        description={<p className="text-primary">{product.price} ICP</p>}
      />
    </Card>
  );
};

export default ProductCard;
