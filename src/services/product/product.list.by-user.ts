import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";
import axiosClient from "../axios";

export const getProductsByStoreId = async (
  id: string
): Promise<ProductResponseDTO[]> => {
  try {
    const response = await axiosClient.get(`user/${id}/product`);
    const dtos: ProductResponseDTO[] = response.data.map((product: any) => {
      return {
        id: product.id,
        name: product.name,
        category: product.category_name,
        description: product.description,
        medias: product.image_url,
        price: product.price,
        stock: product.stock,
        store_id: product.store_id,
      };
    });

    return dtos;
  } catch (error) {
    return Promise.reject();
  }
};
