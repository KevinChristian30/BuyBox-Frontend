"use client";

import IsAuthenticated from "@/components/guards/IsAuthenticated";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NotificationResponseDTO from "@/dtos/responses/notification/notification.response.dto";
import useAIDrawer from "@/hooks/useAIDrawer";
import { getCartProducts } from "@/services/cart/cart.products.get";
import { getNotifications } from "@/services/notification/notification.list";
import { CustomerServiceOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import React, { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { drawer, showDrawer } = useAIDrawer();
  const [notifications, setNotifications] = useState<NotificationResponseDTO[]>(
    []
  );
  const [cartItemCount, getCartItemCount] = useState<number | undefined>(0);

  const fetchNotifications = async () => {
    const response = await getNotifications();
    setNotifications(response);
  };

  const fetchCartItemCount = async () => {
    const response = await getCartProducts();
    getCartItemCount(response.length);
  };

  useEffect(() => {
    fetchNotifications();
    fetchCartItemCount();
  }, []);

  return (
    <IsAuthenticated>
      <Header data={notifications} cartItems={1} />
      {children}
      <Footer />
      <FloatButton
        icon={<CustomerServiceOutlined />}
        shape="circle"
        type="primary"
        onClick={showDrawer}
      />
      {drawer()}
    </IsAuthenticated>
  );
}
