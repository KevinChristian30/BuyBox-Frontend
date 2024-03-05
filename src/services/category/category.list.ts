import CategoryResponseDTO from "@/dtos/responses/categories/category.response.dto";
import axiosClient from "../axios";

export const getCategories = async (): Promise<CategoryResponseDTO[]> => {
  try {
    const response = await axiosClient.get("/category");

    const dtos: CategoryResponseDTO[] = response.data.map((category: any) => {
      return {
        id: category.id,
        name: category.name,
      };
    });
    return dtos;
  } catch (error) {
    return Promise.reject();
  }
};
