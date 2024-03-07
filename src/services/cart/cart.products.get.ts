import axiosClient from "../axios";
import CartResponseDTO from "@/dtos/responses/cart/cart.response.dto";

export const getCartProducts = async (): Promise<CartResponseDTO[]> => {
  try {
    const response = await axiosClient.get("/cart");
    const dto: CartResponseDTO[] = response.data.map((cartItem: any) => {
      return {
        product_id: cartItem.product_id,
        quantity: cartItem.quantity,
        product: {
          id: cartItem.product.id,
          name: cartItem.product.name,
          category: cartItem.product.category_name,
          description: cartItem.product.description,
          medias: cartItem.product.image_url,
          price: cartItem.product.price,
          stock: cartItem.product.stock,
          store_id: cartItem.product.store_id,
        },
      };
    });
    return dto;
  } catch {
    return Promise.reject();
  }
};
