"use client";
import Loading from "@/components/commons/Loading";
import BillCard from "@/components/domain/BillCard";
import CartProduct from "@/components/domain/CartProduct";
import CartProductList from "@/components/domain/CartProductList";
import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";
import { getCartProducts } from "@/services/cart/cart.products.get";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductResponseDTO[]>();

  const fetchCartProducts = async () => {
    setLoading(true);

    const response = await getCartProducts();
    setProducts(response);

    setLoading(false);
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  return (
    <div className="py-16 px-32 flex flex-col items-center">
      {loading || !products ? (
        <Loading />
      ) : (
        <div className="flex gap-8">
          <CartProductList products={products} />
          <BillCard />
        </div>
      )}
    </div>
  );
};

export default Page;
