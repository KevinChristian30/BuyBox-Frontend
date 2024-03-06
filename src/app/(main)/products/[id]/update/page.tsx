"use client";

import Loading from "@/components/commons/Loading";
import Spacer, { SpacerDirection } from "@/components/commons/Spacer";
import ProductCreateRequestDTO from "@/dtos/requests/product/product.create.dto";
import CategoryResponseDTO from "@/dtos/responses/categories/category.response.dto";
import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";
import { getCategories } from "@/services/category/category.list";
import uploadFile from "@/services/file/file.create";
import { getProduct } from "@/services/product/product.get";
import updateProduct from "@/services/product/product.update";
import { InboxOutlined, SaveOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Empty,
  Form,
  Input,
  InputNumber,
  Select,
  Typography,
  notification,
} from "antd";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const [product, setProduct] = useState<ProductResponseDTO | null>(null);
  const [loading, setLoading] = useState<boolean>();
  const [categories, setCategories] = useState<CategoryResponseDTO[]>([]);
  const [files, setFiles] = useState<String[]>([]);
  const [api, contextHolder] = notification.useNotification();
  const router = useRouter();
  const [form] = Form.useForm();

  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const url = await uploadFile(e.target.files[0]);
      setFiles([...files, url]);
    }
  };

  const attemptUpdateProduct = async (values: any) => {
    const dto: ProductCreateRequestDTO = {
      name: values.product_name,
      category_id: values.category,
      description: values.description,
      price: values.price,
      stock: values.stock,
      media_urls: files.map((file) => file as string),
    };

    if (files.length == 0) {
      api.error({
        message: "Error",
        description: "A product must have at least one image",
        placement: "top",
      });
      return;
    }

    try {
      setLoading(true);
      updateProduct(id, dto);
      api.success({
        message: "Success",
        description: "Product saved",
        placement: "top",
      });
      form.resetFields();
      setFiles([]);
    } catch (error) {
      api.error({
        message: "Error",
        description: "Something went wrong",
        placement: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchProductDetail = async () => {
    try {
      setLoading(true);
      const response = await getProduct(id);
      setProduct(response);
      setFiles(response.medias.map(media => media.url));
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    const response = await getCategories();
    setCategories(response);
  };

  useEffect(() => {
    fetchProductDetail();
    fetchCategories();
  }, []);

  return (
    <div className="px-32 py-16 flex flex-col">
      {loading ? (
        <Loading />
      ) : product === null ? (
        <Empty description="Product doesn't exist" />
      ) : (
        <Form
          layout="vertical"
          className="flex w-full flex-col items-start gap-4"
          onFinish={(values) => attemptUpdateProduct(values)}
          disabled={loading}
          requiredMark={false}
          form={form}
        >
          {contextHolder}
          <Typography.Title>Edit Product</Typography.Title>
          <div className="w-full flex flex-col items-center gap-1">
            <Form.Item
              name="product_name"
              label="Product Name"
              className="w-full"
              rules={[{ required: true, message: "Product name is required" }]}
              initialValue={product.name}
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
              initialValue={product.description}
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
              initialValue={product.category}
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
                    value: categories.id,
                  };
                })}
              />
            </Form.Item>
            <Form.Item
              name="price"
              label="Product Price"
              className="w-full"
              rules={[{ required: true, message: "Product price is required" }]}
              initialValue={product.price}
            >
              <InputNumber addonAfter="ICP" min={1} size="large" />
            </Form.Item>
            <Form.Item
              name="stock"
              label="Product Stock"
              className="w-full"
              rules={[{ required: true, message: "Product stock is required" }]}
              initialValue={product.stock}
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
                      key={file as string}
                    />
                  );
                })}
              </div>

              <Spacer direction={SpacerDirection.VERTICAL} space={16} />

              <input
                type="file"
                className="hidden"
                style={{ display: "none" }}
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
      )}
    </div>
  );
};

export default Page;
