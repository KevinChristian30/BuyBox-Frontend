"use client";

import checkout from "@/services/cart/cart.checkout";
import { Button, Card, notification } from "antd";
import React, { useState } from "react";

interface IBillCardProps {
  total: number;
}

const BillCard = (props: IBillCardProps) => {
  const { total } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [api, contextHolder] = notification.useNotification();

  const attemptCheckout = async () => {
    try {
      setLoading(true);
      await checkout();
      api.success({
        message: "Success",
        description: "Checkout successful",
        placement: "top",
      });
    } catch {
      api.error({
        message: "Failed",
        description: "Something went wrong, please try again.",
        placement: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="h-fit w-[300px] shadow-2xl" title={`Total: ${total} ICP`}>
      {contextHolder}
      <Button
        shape="round"
        size="large"
        type="primary"
        className="w-full"
        onClick={attemptCheckout}
        loading={loading}
      >
        Checkout
      </Button>
    </Card>
  );
};

export default BillCard;
