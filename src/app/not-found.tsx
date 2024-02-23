import { HomeOutlined } from "@ant-design/icons";
import { Button, Empty } from "antd";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Empty
        image="/NotFound.svg"
        imageStyle={{ height: 160 }}
        description={
          <p>
            Oops... looks like you got lost. Get back home by clicking the
            buttom below.
          </p>
        }
        className="flex flex-col items-center"
      >
        <Link href="/">
          <Button
            type="primary"
            size="large"
            shape="round"
            icon={<HomeOutlined />}
          >
            Go Home
          </Button>
        </Link>
      </Empty>
    </div>
  );
};

export default NotFoundPage;
