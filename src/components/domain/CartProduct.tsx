import CartResponseDTO from "@/dtos/responses/cart/cart.response.dto";
import { Button, Card } from "antd";
import React from "react";

interface ICardProductProps {
  product: CartResponseDTO;
}

const CartProduct = (props: ICardProductProps) => {
  const { product } = props;

  return (
    <Card
      title={`${product.product.name}`}
      style={{ width: 500 }}
      className="shadow-2xl"
      extra={<Button type="default" danger>Remove</Button>}
    >
      <div className="flex gap-4">
        <img
          src={product.product.medias[0]}
          height={100}
          width={100}
          className="object-cover"
        ></img>
        <div className="flex flex-col justify-between">
          <p>{product.product.description}</p>
          <div className="">
            <p>{`Quantity: ${product.quantity}`}</p>
            <p>{`Price: @${product.product.price}`}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartProduct;
