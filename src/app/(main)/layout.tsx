"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AuthenticateResponseDTO from "@/dtos/responses/auth/auth.authenticate.dto";
import NotificationResponseDTO from "@/dtos/responses/notification/notification.response.dto";
import UserResponseDTO from "@/dtos/responses/user/user.response.dto";
import useAIDrawer from "@/hooks/useAIDrawer";
import authenticate from "@/services/auth/auth.authenticate";
import { getCartProducts } from "@/services/cart/cart.products.get";
import { getNotifications } from "@/services/notification/notification.list";
import { CustomerServiceOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import React, { createContext, useContext, useEffect, useState } from "react";

type CurrentUserContextData = {
  user: UserResponseDTO | null;
  loading: boolean;
};

const CurrentUserContext = createContext<CurrentUserContextData>({
  user: null,
  loading: true,
});

export function useCurrentUser() {
  return useContext(CurrentUserContext);
}

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
  const [user, setUser] = useState<UserResponseDTO | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchNotifications = async () => {
    const response = await getNotifications();
    setNotifications(response);
  };

  const fetchCartItemCount = async () => {
    const response = await getCartProducts();
    getCartItemCount(response.length);
  };

  const fetchCurrentUser = async () => {
    try {
      setLoading(true);
      const authenticateResponseDTO: AuthenticateResponseDTO =
        await authenticate();
      setUser(authenticateResponseDTO.user);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
    fetchCartItemCount();
    fetchCurrentUser();
  }, []);

  return (
    <CurrentUserContext.Provider value={{ user: user, loading: loading }}>
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
    </CurrentUserContext.Provider>
  );
}
