import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";
import { Button, Card } from "antd";
import React from "react";

interface ICardProductProps {
  product: ProductResponseDTO;
}

const CartProduct = (props: ICardProductProps) => {
  const { product } = props;

  return (
    <Card
      title={product.name + " - " + product.price + " ICP"}
      style={{ width: 500 }}
      className="shadow-2xl"
      extra={<Button type="default" >Remove</Button>}
    >
      <div className="flex gap-4">
        <img
          src={product.medias[0].url}
          height={100}
          width={100}
          className="object-cover"
        ></img>
        <p>{product.description}</p>
      </div>
    </Card>
  );
};

export default CartProduct;
