import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Dropdown, MenuProps } from "antd";
import React from "react";

const ProfileDetails = () => {
  return (
    <div>
      ICP Token: 100
    </div>
  );
}

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <ProfileDetails />
    ),
  }
];

const ProfileCard = () => {
  return (
    <Dropdown menu={{ items }} placement="bottomRight" arrow>
      <Button
        type="primary"
        shape="round"
        className="flex"
        icon={<UserOutlined />}
        size="large"
      >
        Kevin
      </Button>
    </Dropdown>
  );
};

export default ProfileCard;
