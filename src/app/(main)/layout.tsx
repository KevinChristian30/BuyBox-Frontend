"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import useAIDrawer from "@/hooks/useAIDrawer";
import { CustomerServiceOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { drawer, showDrawer } = useAIDrawer();

  return (
    <div className="">
      <Header />
      {children}
      <Footer />
      <FloatButton
        tooltip={<div>AI Curator</div>}
        icon={<CustomerServiceOutlined />}
        shape="circle"
        type="primary"
        onClick={showDrawer}
      />
      {drawer()}
    </div>
  );
}
