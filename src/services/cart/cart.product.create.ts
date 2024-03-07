import CartProductAddDTO from "@/dtos/requests/cart/product.create.dto";
import axiosClient from "../axios"

export async function addProductToCart(dto: CartProductAddDTO) {
  try {
    await axiosClient.post("/cart", { ...dto });
  } catch {
    return Promise.reject();
  }
}