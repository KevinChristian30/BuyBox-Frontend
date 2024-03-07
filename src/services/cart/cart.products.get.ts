import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";
import axiosClient from "../axios";
import CartResponseDTO from "@/dtos/responses/cart/cart.response.dto";

export const getCartProducts = async (): Promise<CartResponseDTO[]> => {
  try {
    const response = await axiosClient.get("/cart");
    console.log(response);

    const dto: CartResponseDTO[] = [
    ]
    return dto;
  } catch {
    return Promise.reject();
  }
};
