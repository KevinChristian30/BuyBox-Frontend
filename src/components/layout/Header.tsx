import React from "react";
import Logo from "../commons/Logo";
import Link from "next/link";
import { Badge, Button, Input } from "antd";
import {
  MessageOutlined,
  NotificationOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ProfileCard from "../commons/ProfileCard";
import Spacer, { SpacerDirection } from "../commons/Spacer";

const Header = () => {
  return (
    <header className="sticky top-0 z-[1] w-full flex gap-4 items-center bg-white px-16 h-16">
      <Link href={"/"}>
        <Logo />
      </Link>
      <Input
        addonBefore={<SearchOutlined />}
        size="large"
        placeholder="Search BuyBox"
      />
      <Link href={"/"}>
        <Badge dot>
          <Button type="default" icon={<NotificationOutlined />} />
        </Badge>
      </Link>
      <Link href={"/"}>
        <Button type="default" icon={<ShoppingCartOutlined />} />
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
