import ProductCreateRequestDTO from "@/dtos/requests/product/product.create.dto";
import axiosClient from "../axios";

export default async function createProduct(
  dto: ProductCreateRequestDTO
): Promise<void> {
  try {
    axiosClient.post("/product", { ...dto });
  } catch {
    return Promise.reject();
  }
}
