"use client";

import CartResponseDTO from "@/dtos/responses/cart/cart.response.dto";
import { deleteProductFromCart } from "@/services/cart/cart.product.delete";
import { Button, Card } from "antd";
import React, { useState } from "react";
import Loading from "../commons/Loading";

interface ICardProductProps {
  product: CartResponseDTO;
}

const CartProduct = (props: ICardProductProps) => {
  const { product } = props;
  const [loading, setLoading] = useState<boolean>(false);

  const attemptRemoveProduct = async () => {
    try {
      setLoading(true);
      await deleteProductFromCart({ product_id: product.product_id });
      window.location.reload();
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      title={`${product.product.name}`}
      style={{ width: 500 }}
      className="shadow-2xl"
      extra={
        <Button
          type="default"
          loading={loading}
          danger
          onClick={attemptRemoveProduct}
        >
          Remove
        </Button>
      }
    >
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </Card>
  );
};

export default CartProduct;
