import OrderResponseDTO from "@/dtos/responses/order/order.response.dto";
import axiosClient from "../axios";

export const getOrdersBySeller = async (
  sellerId: string
): Promise<OrderResponseDTO[]> => {
  try {
    const response = await axiosClient.get(`/user/${sellerId}/order`);
    const dto: OrderResponseDTO[] = response.data.map((order: any) => {
      return {
        id: order.id,
        store_name: order.store_name,
        buyer_name: order.buyer_name,
        buyer_id: order.buyer_id,
        product: {
          id: order.product.id,
          name: order.product.name,
          category: order.product.category_name,
          description: order.product.description,
          medias: order.product.image_url,
          price: order.product.price,
          stock: order.product.stock,
          store_id: order.product.store_id,
        },
        order_date: order.order_date,
        quantity: order.quantity,
        status: order.status,
      };
    });

    return dto;
  } catch (error) {
    return Promise.reject();
  }
};
