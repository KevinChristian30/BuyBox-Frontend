"use client";

import { ArrowLeftOutlined, BackwardOutlined } from "@ant-design/icons";
import { Button, Empty } from "antd";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Empty
        image="/Error.svg"
        imageStyle={{ height: 160 }}
        description={
          <div>
            <p>We're sorry, but it seems that there's been an error.</p>
            <p>
              We apologize for any inconvenience this may have caused. In the
              meantime, feel free to explore the rest of our site. We appreciate
              your understanding.
            </p>
          </div>
        }
        className="flex flex-col items-center"
      >
        <Link href={'/'}>
          <Button
            type="primary"
            size="large"
            shape="round"
            icon={<ArrowLeftOutlined />}
          >
            Go Back
          </Button>
        </Link>
      </Empty>
    </div>
  );
};

export default Error;
