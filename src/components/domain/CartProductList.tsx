import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";
import React from "react";
import CartProduct from "./CartProduct";

interface ICardProductListProps {
  products: ProductResponseDTO[];
}

const CartProductList = (props: ICardProductListProps) => {
  const { products } = props;

  return (
    <div className="flex flex-col gap-4">
      {products?.map((product) => {
        return <CartProduct product={product} key={product.id} />;
      })}
    </div>
  );
};

export default CartProductList;
