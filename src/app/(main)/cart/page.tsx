"use client";

import Loading from "@/components/commons/Loading";
import BillCard from "@/components/domain/BillCard";
import CartProductList from "@/components/domain/CartProductList";
import React from "react";
import { useCurrentUser } from "../layout";
import { Empty } from "antd";

const Page = () => {
  const { user, loading, cartItems } = useCurrentUser();

  return (
    <div className="py-16 px-32 flex flex-col items-center">
      {loading ? (
        <Loading />
      ) : cartItems.length == 0 ? (
        <Empty description="You're cart is empty" />
      ) : (
        <div className="flex gap-8">
          <CartProductList products={cartItems} />
          <BillCard />
        </div>
      )}
    </div>
  );
};

export default Page;
