"use client";

import React, { useState } from "react";
import Logo from "../commons/Logo";
import Link from "next/link";
import {
  Badge,
  Button,
  Dropdown,
  Form,
  Input,
  List,
  MenuProps,
  Spin,
} from "antd";
import {
  NotificationOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import ProfileCard from "../commons/ProfileCard";
import Spacer, { SpacerDirection } from "../commons/Spacer";
import NotificationResponseDTO from "@/dtos/responses/notification/notification.response.dto";
import { useCurrentUser } from "@/app/(main)/layout";
import { useRouter } from "next/navigation";

interface IHeaderProps {
  data: NotificationResponseDTO[];
}

const Header = (props: IHeaderProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { user, cartItems, loading } = useCurrentUser();
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <List
          className="w-[400px]"
          pagination={{ position: "top", align: "end", pageSize: 2 }}
          dataSource={[]}
          renderItem={(item, index) => (
            <List.Item>
              {/* <List.Item.Meta
                avatar={<AlertOutlined />}
                title={<p className="text-primary font-bold">{item.title}</p>}
                description={item.description}
                className="text-primary"
              /> */}
            </List.Item>
          )}
        />
      ),
    },
  ];

  const searchProduct = () => {
    router.push(`/products?name=${query}`);
  };

  return (
    <header className="sticky top-0 z-[100] w-full flex gap-4 items-center bg-white px-16 h-16">
      <Link href={"/"}>
        <Logo />
      </Link>
      <Form onFinish={searchProduct} className="w-full">
        <Input
          addonBefore={<SearchOutlined />}
          size="large"
          placeholder="Search BuyBox"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onSubmit={() => searchProduct()}
        />
      </Form>
      <Link href={user ? "/cart" : "/auth/sign-in"}>
        <Badge dot={cartItems.length > 0} size="small">
          <Button type="default" icon={<ShoppingCartOutlined />} />
        </Badge>
      </Link>
      <Link href={user ? "/orders" : "/auth/sign-in"}>
        <Button type="default" icon={<UnorderedListOutlined />} />
      </Link>
      <Spacer direction={SpacerDirection.HORIZONTAL} space={16} />
      {loading ? (
        <Spin />
      ) : user !== null ? (
        <ProfileCard user={user} />
      ) : (
        <div className="flex gap-4">
          <Link href={"/auth/sign-in"}>
            <Button type="default" size="large" shape="round">
              Sign In
            </Button>
          </Link>
          <Link href={"/auth/sign-up"}>
            <Button type="primary" size="large" shape="round">
              Sign Up
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
