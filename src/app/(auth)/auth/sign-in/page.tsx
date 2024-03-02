"use client";

import SignInRequestDTO from "@/dtos/requests/auth/auth.sign-in.dto";
import SignInResponseDTO from "@/dtos/responses/auth/auth.sign-in.dto";
import signIn from "@/services/auth/auth.sign-in";
import { KeyOutlined, LoginOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Typography, notification } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useCookies } from "next-client-cookies";
import tokenKey from "@/utils/constants";

const Page = () => {
  const [loading, setLoading] = useState<boolean>();
  const [api, contextHolder] = notification.useNotification();
  const router = useRouter();
  const cookies = useCookies();

  const attemptSignIn = async (formValues: any) => {
    const dto: SignInRequestDTO = {
      email: formValues.email,
      password: formValues.password,
    };

    try {
      setLoading(true);
      const response: SignInResponseDTO = await signIn(dto);
      api.success({
        message: "Sign in successful",
        description: "Hang on, we're redirecting you.",
        placement: "top",
      });

      cookies.set(tokenKey, response.token);
      router.push("/");
    } catch (error) {
      api.error({
        message: "Something Went Wrong",
        description: "Please try again.",
        placement: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-[280px] sm:w-[400px] shadow-2xl">
      {contextHolder}
      <Form
        layout="vertical"
        className="flex w-full flex-col items-center gap-4"
        onFinish={(values) => attemptSignIn(values)}
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
          <Typography.Text>
            New to BuyBox? <Link href="/auth/sign-up">Sign Up</Link>
          </Typography.Text>
        </div>
      </Form>
    </Card>
  );
};

export default Page;
