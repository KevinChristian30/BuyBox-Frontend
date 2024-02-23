"use client";

import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Drawer, Empty, Form, Input } from "antd";
import React, { useState } from "react";

const useAIDrawer = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const hideDrawer = () => {
    setDrawerOpen(false);
  };

  const form = () => {
    return (
      <Form
        layout="vertical"
        className="flex w-full items-start gap-2"
        onFinish={(values) => {
          // Todo: Search for Item Recommendations
        }}
        disabled={loading}
        requiredMark={false}
      >
        <Form.Item
          name="query"
          className="w-full"
          rules={[{ required: true, message: "Ask Anything..." }]}
        >
          <Input size="large" placeholder="Ask Anything..." />
        </Form.Item>
        <Button
          icon={<SearchOutlined />}
          htmlType="submit"
          size="large"
          type="primary"
          shape="default"
        />
      </Form>
    );
  };

  const chats = () => {
    return (
      <Card className="flex flex-col items-center">
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Start a new Chat"
        />
      </Card>
    );
  };

  const drawer = () => {
    return (
      <Drawer
        title="AI Curator"
        placement={"right"}
        onClose={hideDrawer}
        open={drawerOpen}
      >
        <div className="flex flex-col justify-end gap-4 h-full">
          {chats()}
          {form()}
        </div>
      </Drawer>
    );
  };

  return {
    drawer,
    showDrawer,
    hideDrawer,
  };
};

export default useAIDrawer;
