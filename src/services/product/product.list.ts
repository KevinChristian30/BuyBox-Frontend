import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";
import axiosClient from "../axios";

export const getProducts = async (
  name: string = ""
): Promise<ProductResponseDTO[]> => {
  try {
    const response = await axiosClient.get(`product?name=${name}`);
    const dtos: ProductResponseDTO[] = response.data.map((product: any) => {
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
    });

    return dtos;
  } catch (error) {
    return Promise.reject();
  }
};
