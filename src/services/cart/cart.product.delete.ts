import CartProductDeleteDTO from "@/dtos/requests/cart/product.delete.dto";
import axiosClient from "../axios"

export async function deleteProductFromCart(dto: CartProductDeleteDTO) {
  try {
    await axiosClient.delete(`/cart/${dto.product_id}`);
  } catch {
    return Promise.reject();
  }
}