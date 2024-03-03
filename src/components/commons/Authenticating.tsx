import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";

const Authenticating = () => {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="flex flex-col justify-center items-center gap-8">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 100 }} spin />} />
        <p className="text-3xl">Securing BuyBox</p>
      </div>
    </div>
  );
};

export default Authenticating;
