"use client";

import OrderResponseDTO from "@/dtos/responses/order/order.response.dto";
import React, { useEffect, useState } from "react";
import Loading from "../commons/Loading";
import { Button, Card, Empty, notification } from "antd";
import Spacer, { SpacerDirection } from "../commons/Spacer";
import { getOrdersBySeller } from "@/services/order/order.seller.list";
import { useCurrentUser } from "@/app/(main)/layout";
import { CheckOutlined } from "@ant-design/icons";
import updateOrder from "@/services/order/order.update";

const OrderAsSeller = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [confirmOrderLoading, setConfirmOrderLoading] = useState<boolean>(false);
  const [orders, setOrders] = useState<OrderResponseDTO[]>([]);
  const { user, loading: currentUserLoading } = useCurrentUser();
  const [api, contextHolder] = notification.useNotification();

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await getOrdersBySeller(user?.id ?? "");
      setOrders(response);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const attemptConfirmOrder = async (order_id: string) => {
    try {
      setConfirmOrderLoading(true);
      await updateOrder({ order_id: order_id, status: "Finished" });
      api.success({
        message: "Success",
        description: "Order confirmed",
        placement: "top",
      });
      window.location.reload();
    } catch (error) {
      api.error({
        message: "Failed",
        description: "Please try again.",
        placement: "top",
      });
    } finally {
      setConfirmOrderLoading(false);
    }
  };

  return (
    <div className="">
      {contextHolder}
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
                        <div className="">
                          <p>{`Quantity: ${order.quantity}`}</p>
                          <p>{`Total Price: ${order.product.price * order.quantity}`}</p>
                        </div>

                        {order.status === "Pending" && (
                          <Button
                            type="primary"
                            shape="round"
                            icon={<CheckOutlined />}
                            onClick={() => attemptConfirmOrder(order.id)}
                            loading={confirmOrderLoading}
                          >
                            Confirm Order
                          </Button>
                        )}
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

export default OrderAsSeller;
