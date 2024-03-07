"use client";

import OrderAsBuyer from "@/components/domain/OrderAsBuyer";
import OrderAsSeller from "@/components/domain/OrderAsSeller";
import { Tabs, TabsProps } from "antd";
import React  from "react";

const Page = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "As Buyer",
      children: <OrderAsBuyer></OrderAsBuyer>
    },
    {
      key: "2",
      label: "As Seller",
      children: <OrderAsSeller></OrderAsSeller>
    },
  ];

  return (
    <div className="p-16">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default Page;
