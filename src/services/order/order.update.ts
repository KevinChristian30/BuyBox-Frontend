import OrderUpdateRequestDTO from "@/dtos/requests/order/order.update.request.dto";
import axiosClient from "../axios";

export default async function updateOrder(
  dto: OrderUpdateRequestDTO
): Promise<void> {
  try {
    await axiosClient.put(`/order`, { ...dto });
  } catch(error) {
    return Promise.reject();
  }
}
