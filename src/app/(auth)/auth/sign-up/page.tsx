"use client";

import UserCreateRequestDTO from "@/dtos/requests/users/user.create.dto";
import UserCreateResponseDTO from "@/dtos/responses/user/user.create.response.dto";
import createUser from "@/services/user/user.create";
import tokenKey from "@/utils/constants";
import { KeyOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Typography, notification } from "antd";
import { useCookies } from "next-client-cookies";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState<boolean>();
  const [api, contextHolder] = notification.useNotification();
  const router = useRouter();
  const cookies = useCookies();

  const signUp = async (formValues: any) => {
    const dto: UserCreateRequestDTO = {
      email: formValues.email,
      full_name: formValues.fullName,
      password: formValues.password,
    };

    try {
      setLoading(true);
      const userData: UserCreateResponseDTO = await createUser(dto);
      api.success({
        message: "Account Created",
        description: "Please wait, we're navigating you.",
        placement: "top",
      });

      cookies.set(tokenKey, userData.token);
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
        disabled={loading}
        onFinish={(values) => signUp(values)}
        requiredMark={false}
      >
        <Typography.Title>Sign Up</Typography.Title>
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
            name="fullName"
            label="Full Name"
            className="w-full"
            rules={[{ required: true, message: "Full name is required" }]}
          >
            <Input
              placeholder="Full Name"
              size="large"
              prefix={<UserOutlined />}
              type="text"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            className="w-full"
            rules={[
              { required: true, message: "Password is required" },
              ({}) => ({
                validator(_, value) {
                  if (!value) return Promise.resolve();

                  if (value.length < 8)
                    return Promise.reject(
                      new Error("Password must be at least 8 characters long")
                    );

                  return value.match(
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{1,}$/
                  )
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error(
                          "Password must contain 1 uppercase letter, 1 lowercase letter, and 1 number"
                        )
                      );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Password"
              size="large"
              prefix={<KeyOutlined />}
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            className="w-full"
            rules={[
              { required: true, message: "Password Confirmation is required" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error("Passwords doesn't match"));
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Confirm Password"
              size="large"
              prefix={<KeyOutlined />}
            />
          </Form.Item>
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            loading={loading}
          >
            Sign Up
          </Button>
          <Typography.Text>
            Already Have an Account? <Link href="/auth/sign-in">Sign In</Link>
          </Typography.Text>
        </div>
      </Form>
    </Card>
  );
};

export default Page;
