import axiosClient from "../axios";

export default async function deleteProduct(id: string): Promise<void> {
  try {
    axiosClient.delete(`/product/${id}`);
  } catch {
    return Promise.reject();
  }
}
