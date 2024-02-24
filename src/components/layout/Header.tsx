import React, { useState } from "react";
import Logo from "../commons/Logo";
import Link from "next/link";
import { Badge, Button, Dropdown, Input, List, MenuProps } from "antd";
import {
  AlertOutlined,
  MessageOutlined,
  NotificationOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ProfileCard from "../commons/ProfileCard";
import Spacer, { SpacerDirection } from "../commons/Spacer";
import NotificationResponseDTO from "@/dtos/responses/notification/notification.response.dto";

interface IHeaderProps {
  data: NotificationResponseDTO[];
  cartItems: number;
}

const Header = (props: IHeaderProps) => {
  const { data, cartItems } = props;
  const [open, setOpen] = useState<boolean>(false);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <List
          className="w-[400px]"
          pagination={{ position: "top", align: "end", pageSize: 2 }}
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={<AlertOutlined />}
                title={<p className="text-primary font-bold">{item.title}</p>}
                description={item.description}
                className="text-primary"
              />
            </List.Item>
          )}
        />
      ),
    },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full flex gap-4 items-center bg-white px-16 h-16">
      <Link href={"/"}>
        <Logo />
      </Link>
      <Input
        addonBefore={<SearchOutlined />}
        size="large"
        placeholder="Search BuyBox"
      />
      <Dropdown menu={{ items }} placement="bottomCenter" arrow open={open}>
        <Badge dot={data.length > 0} size="small">
          <Button
            type="default"
            icon={<NotificationOutlined />}
            onClick={() => {
              setOpen(!open);
            }}
          />
        </Badge>
      </Dropdown>
      <Link href={"/cart"}>
        <Badge dot={cartItems > 0} size="small">
          <Button type="default" icon={<ShoppingCartOutlined />} />
        </Badge>
      </Link>
      <Link href={"/"}>
        <Button type="default" icon={<MessageOutlined />} />
      </Link>
      {/* <ProfileCard /> */}
      <Spacer direction={SpacerDirection.HORIZONTAL} space={16} />
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
    </header>
  );
};

export default Header;
