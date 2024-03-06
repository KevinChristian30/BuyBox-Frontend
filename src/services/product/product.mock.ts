import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";

export const getMockProducts = (): ProductResponseDTO[] => {
  let ids: string[] = [];
  for (let i = 0; i < 20; i++) {
    ids.push(i + "");
  }

  return ids.map((id) => {
    return {
      id: id,
      name: "Nike Dunk Low",
      category: "Apparel",
      description: "This is a good Product",
      medias: [
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9b26aa8f-0173-409b-b30a-7ce2d88573a4/custom-nike-dunk-low-by-you.png",
      ],
      price: 100,
      stock: 10,
      store_id: "asd",
    };
  });
};
