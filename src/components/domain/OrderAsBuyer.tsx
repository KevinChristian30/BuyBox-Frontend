"use client";

import OrderResponseDTO from "@/dtos/responses/order/order.response.dto";
import { getOrders } from "@/services/order/order.list";
import React, { useEffect, useState } from "react";
import Loading from "../commons/Loading";
import { Card, Empty } from "antd";
import Spacer, { SpacerDirection } from "../commons/Spacer";

const OrderAsBuyer = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [orders, setOrders] = useState<OrderResponseDTO[]>([]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await getOrders();
      setOrders(response);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : orders.length == 0 ? (
        <Empty />
      ) : (
        <div className="">
          <Spacer direction={SpacerDirection.VERTICAL} space={32} />
          <div className="flex flex-col gap-4">
            {orders.map((order) => {
              return (
                <Card
                  title={`${order.product.name} - ${order.status}`}
                  className="shadow-2xl w-full"
                >
                  {loading ? (
                    <Loading />
                  ) : (
                    <div className="flex gap-4">
                      <img
                        src={order.product.medias[0]}
                        height={100}
                        width={100}
                        className="object-cover"
                      ></img>
                      <div className="flex flex-col justify-between">
                        <p>{order.product.description}</p>
                        <div className="">
                          <p>{`Quantity: ${order.quantity}`}</p>
                          <p>{`Total Price: ${order.product.price * order.quantity}`}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderAsBuyer;
