import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";
import axiosClient from "../axios";

export const getProduct = async (id: string): Promise<ProductResponseDTO> => {
  try {
    const response = await axiosClient.get(`/product/${id}`);
    const product = response.data;

    return {
      id: product.id,
      name: product.name,
      category: product.category_name,
      description: product.description,
      medias: product.medias.map((media: any) => {
        return {
          id: media.id,
          url: media.url,
        };
      }),
      price: product.price,
      stock: product.stock
    };
  } catch (error) {
    return Promise.reject();
  }
};
