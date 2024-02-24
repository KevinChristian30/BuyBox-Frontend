import CategoryResponseDTO from "@/dtos/responses/categories/category.response.dto";

export const getCategories = async (): Promise<CategoryResponseDTO[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data: CategoryResponseDTO[] = [
    {
      id: BigInt(1),
      name: "Shoes",
    },
    {
      id: BigInt(2),
      name: "Gadget",
    },
    {
      id: BigInt(3),
      name: "Food",
    },
    {
      id: BigInt(4),
      name: "Apparel",
    },
  ];

  return data;
};
