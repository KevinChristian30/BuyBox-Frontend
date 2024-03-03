import UserResponseDTO from "@/dtos/responses/user/user.response.dto";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Dropdown, MenuProps } from "antd";
import React from "react";

const ProfileDetails = () => {
  return <div>ICP Token: 100</div>;
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <ProfileDetails />,
  },
];

interface IProfileCardProps {
  user: UserResponseDTO;
}

const ProfileCard = (props: IProfileCardProps) => {
  const { user } = props;

  return (
    <Dropdown menu={{ items }} placement="bottomRight" arrow>
      <Button
        type="primary"
        shape="round"
        icon={<UserOutlined />}
        size="large"
        className="flex"
      >
        {user.full_name.substring(0, 20)}
      </Button>
    </Dropdown>
  );
};

export default ProfileCard;
