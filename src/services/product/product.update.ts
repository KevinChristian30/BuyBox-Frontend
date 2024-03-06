import ProductCreateRequestDTO from "@/dtos/requests/product/product.create.dto";
import axiosClient from "../axios";

export default async function updateProduct(
  id: string, 
  dto: ProductCreateRequestDTO
): Promise<void> {
  try {
    axiosClient.put(`/product/${id}`, { ...dto });
  } catch {
    return Promise.reject();
  }
}
