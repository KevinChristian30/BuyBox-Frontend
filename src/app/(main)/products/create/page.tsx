"use client";

import Spacer, { SpacerDirection } from "@/components/commons/Spacer";
import CategoryResponseDTO from "@/dtos/responses/categories/category.response.dto";
import { getCategories } from "@/services/category/category.list";
import uploadFile from "@/services/file/file.create";
import {
  DatabaseOutlined,
  InboxOutlined,
  SaveOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  Select,
  Typography,
  Upload,
} from "antd";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const Page = () => {
  const [loading, setLoading] = useState<boolean>();
  const [categories, setCategories] = useState<CategoryResponseDTO[]>([]);
  const [files, setFiles] = useState<String[]>([]);

  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const fetchCategories = async () => {
    const response = await getCategories();
    setCategories(response);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const url = await uploadFile(e.target.files[0]);
      setFiles([...files, url]);
    }
  };

  return (
    <div className="px-32 py-16 flex flex-col">
      <Form
        layout="vertical"
        className="flex w-full flex-col items-start gap-4"
        onFinish={(values) => {
          console.log(values);
        }}
        disabled={loading}
        requiredMark={false}
      >
        <Typography.Title>Add Product</Typography.Title>
        <div className="w-full flex flex-col items-center gap-1">
          <Form.Item
            name="product_name"
            label="Product Name"
            className="w-full"
            rules={[{ required: true, message: "Product name is required" }]}
          >
            <Input
              placeholder="Product Name"
              size="large"
              prefix={<InboxOutlined />}
              type="text"
            />
          </Form.Item>
          <Form.Item
            name="description"
            label="Product Description"
            className="w-full"
            rules={[
              { required: true, message: "Product description is required" },
            ]}
          >
            <Input.TextArea
              showCount
              autoSize={{ minRows: 3 }}
              placeholder="Description"
              maxLength={255}
              allowClear
            />
          </Form.Item>
          <Form.Item
            name="category"
            label="Product Category"
            className="w-full"
            rules={[
              { required: true, message: "Product category is required" },
            ]}
          >
            <Select
              showSearch
              placeholder="Category"
              optionFilterProp="Category"
              filterOption={filterOption}
              size="large"
              options={categories?.map((categories) => {
                return {
                  label: categories.name,
                  value: categories.name,
                };
              })}
            />
          </Form.Item>
          <Form.Item
            name="price"
            label="Product Price"
            className="w-full"
            rules={[{ required: true, message: "Product price is required" }]}
          >
            <InputNumber addonAfter="ICP" min={1} size="large" />
          </Form.Item>
          <Form.Item name="images" label="Product Images" className="w-full">
            <div className="flex gap-2 flex-wrap w-full">
              {files.map((file) => {
                return (
                  <img
                    src={file as string}
                    alt="iamge"
                    height={100}
                    width={100}
                  />
                );
              })}
            </div>

            <input
              type="file"
              className="hidden"
              style={{ display: 'none' }}
              onChange={(e) => handleFileChange(e)}
              ref={hiddenFileInput}
            />

            <Button
              icon={<UploadOutlined />}
              onClick={() => hiddenFileInput?.current?.click()}
              size="large"
            >
              Upload Image
            </Button>
          </Form.Item>

          <Spacer direction={SpacerDirection.VERTICAL} space={20} />

          <div className="flex flex-col w-full">
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              icon={<SaveOutlined />}
              loading={loading}
            >
              Add Product
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Page;
