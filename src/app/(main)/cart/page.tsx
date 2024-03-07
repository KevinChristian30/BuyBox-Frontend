"use client";

import Loading from "@/components/commons/Loading";
import BillCard from "@/components/domain/BillCard";
import CartProductList from "@/components/domain/CartProductList";
import React, { useEffect, useState } from "react";
import { Empty } from "antd";
import CartResponseDTO from "@/dtos/responses/cart/cart.response.dto";
import { getCartProducts } from "@/services/cart/cart.products.get";

const Page = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<CartResponseDTO[]>([]);

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const response: CartResponseDTO[] = await getCartProducts();
      setCartItems(response);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className="py-16 px-32 flex flex-col items-center">
      {loading ? (
        <Loading />
      ) : cartItems.length == 0 ? (
        <Empty description="You're cart is empty" />
      ) : (
        <div className="flex gap-8">
          <CartProductList products={cartItems} />
          <BillCard
            total={cartItems.reduce(
              (accumulator, currentValue) =>
                accumulator +
                currentValue.product.price * currentValue.quantity,
              0
            )}
          />
        </div>
      )}
    </div>
  );
};

export default Page;
