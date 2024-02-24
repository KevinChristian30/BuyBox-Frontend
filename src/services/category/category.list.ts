import CategoryResponseDTO from "@/dtos/responses/categories/category.response.dto";

export const getCategories = async (): Promise<CategoryResponseDTO[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data: CategoryResponseDTO[] = [
    {
      name: "Shoes",
    },
    {
      name: "Gadget",
    },
    {
      name: "Food",
    },
    {
      name: "Apparel",
    },
  ];

  return data;
};
