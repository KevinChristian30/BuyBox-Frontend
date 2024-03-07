import CartProductAddDTO from "@/dtos/requests/cart/product.create.dto";
import axiosClient from "../axios"

export async function addProductToCart(dto: CartProductAddDTO) {
  try {
    console.log(dto);
    await axiosClient.post("/cart", { ...dto });
  } catch {
    return Promise.reject();
  }
}