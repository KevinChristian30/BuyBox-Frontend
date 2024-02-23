"use client";

import {
  GoogleOutlined,
  KeyOutlined,
  LoginOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Card, Form, Input, Typography } from "antd";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState<boolean>();

  return (
    <Card className="w-[280px] sm:w-[400px] shadow-2xl">
      <Form
        layout="vertical"
        className="flex w-full flex-col items-center gap-4"
        onFinish={(values) => {
          // Todo: Sign In
        }}
        disabled={loading}
        requiredMark={false}
      >
        <Typography.Title>Sign In</Typography.Title>
        <div className="w-full flex flex-col items-center gap-1">
          <Form.Item
            name="email"
            label="Email"
            className="w-full"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input
              placeholder="Email"
              size="large"
              prefix={<MailOutlined />}
              type="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            className="w-full"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password
              placeholder="Password"
              size="large"
              prefix={<KeyOutlined />}
            />
          </Form.Item>
          <div className="flex flex-col w-full">
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              icon={<LoginOutlined />}
              loading={loading}
            >
              Sign In
            </Button>
            <Button type="link" loading={loading} href="/forgot-password">
              Forgot Password
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <Button
            type="default"
            block
            size="large"
            icon={<GoogleOutlined />}
            loading={loading}
          >
            Sign In with Google
          </Button>
          <Typography.Text>
            New to BuyBox? <Link href="/auth/sign-up">Sign Up</Link>
          </Typography.Text>
        </div>
      </Form>
    </Card>
  );
};

export default Page;
