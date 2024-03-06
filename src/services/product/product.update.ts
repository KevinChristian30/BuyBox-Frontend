import axiosClient from "../axios";
import ProductUpdateRequestDTO from "@/dtos/requests/product/product.update.dto";

export default async function updateProduct(
  id: string, 
  dto: ProductUpdateRequestDTO
): Promise<void> {
  try {
    axiosClient.put(`/product/${id}`, { ...dto });
  } catch {
    return Promise.reject();
  }
}
