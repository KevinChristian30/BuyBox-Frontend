"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NotificationResponseDTO from "@/dtos/responses/notification/notification.response.dto";
import useAIDrawer from "@/hooks/useAIDrawer";
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
  const [notifications, setNotifications] = useState<NotificationResponseDTO[]>([]);

  const fetchNotifications = async () => {
    const response = await getNotifications();
    setNotifications(response);
  }

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="">
      <Header data={notifications} />
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
