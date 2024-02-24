"use client";

import ChatBubble, {
  ChatBubbleAlignment,
  IChatBubbleProps,
} from "@/components/domain/ChatBubble";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Drawer, Empty, Form, Input } from "antd";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const useAIDrawer = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<IChatBubbleProps[]>([]);

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const hideDrawer = () => {
    setDrawerOpen(false);
  };

  const handleChat = (query: string) => {
    setMessages([
      ...messages,
      { alignment: ChatBubbleAlignment.RIGHT, text: query },
      { alignment: ChatBubbleAlignment.LEFT, text: "Ok" },
    ]);
  };

  const form = () => {
    return (
      <Form
        layout="vertical"
        className="flex w-full items-start gap-2"
        onFinish={(values) => {
          handleChat(values.query);
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
      <div className="flex flex-col-reverse w-full justify-center">
        {messages.length === 0 ? (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Start a new Chat"
          />
        ) : (
          <div className="">
            {messages.map((message) => {
              return <ChatBubble key={uuidv4()} {...message} />;
            })}
          </div>
        )}
      </div>
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
