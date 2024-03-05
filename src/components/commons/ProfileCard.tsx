"use client";

import UserResponseDTO from "@/dtos/responses/user/user.response.dto";
import becomeSeller from "@/services/auth/auth.become-seller";
import { ShopOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, notification } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface IProfileCardProps {
  user: UserResponseDTO;
}

const ProfileCard = (props: IProfileCardProps) => {
  const { user } = props;
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const [isStore, setIsStore] = useState<boolean>(user.is_store);
  const router = useRouter();

  const attemptBecomeSeller = async () => {
    try {
      setLoading(true);
      await becomeSeller();
      api.success({
        message: "Success",
        description: "Hang on, we're redirecting you.",
        placement: "top",
        duration: 3,
      });
      setIsStore(true);
      router.push("/store");
    } catch (error) {
      api.error({
        message: "Something Went Wrong",
        description: "Please try again.",
        placement: "top",
      });
      setIsStore(false);
    } finally {
      setLoading(false);
    }
  };

  const ProfileDetails = (user: UserResponseDTO) => {
    if (isStore) {
      return (
        <Link href={"/store"} className="flex gap-2">
          <ShopOutlined />
          <div>Manage Store</div>
        </Link>
      );
    } else {
      return (
        <div className="flex gap-2" onClick={attemptBecomeSeller}>
          <ShopOutlined />
          <div>Be a Seller</div>
        </div>
      );
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <ProfileDetails {...user} />,
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight" arrow>
      <div>
        {contextHolder}
        <Button
          type="primary"
          shape="round"
          icon={<UserOutlined />}
          size="large"
          className="flex"
          loading={loading}
        >
          {user.full_name.substring(0, 20)}
        </Button>
      </div>
    </Dropdown>
  );
};

export default ProfileCard;
