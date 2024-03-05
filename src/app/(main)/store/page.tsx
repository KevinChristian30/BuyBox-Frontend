"use client";

import Spacer, { SpacerDirection } from "@/components/commons/Spacer";
import { ProductOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="my-16 mx-24">
      <Typography.Title>Your Store</Typography.Title>
      <Spacer direction={SpacerDirection.VERTICAL} space={40} />
      <div className="">
        <Link href={"/products/create"}>
          <Button type="primary" size="large" icon={<ProductOutlined />}>
            Add New Product
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
