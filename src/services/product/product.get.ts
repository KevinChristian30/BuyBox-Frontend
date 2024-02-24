import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";

export const getProduct = async (id: string): Promise<ProductResponseDTO> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    id: id,
    name: "Nike Dunk Low",
    category: "Apparel",
    description: "This is a good Product. It is a cool looking shoe with comfortable support. It is also worn by Barrack Obama in the 1990s.",
    medias: [
      {
        id: "1",
        url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9b26aa8f-0173-409b-b30a-7ce2d88573a4/custom-nike-dunk-low-by-you.png",
      },
      {
        id: "2",
        url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9b26aa8f-0173-409b-b30a-7ce2d88573a4/custom-nike-dunk-low-by-you.png",
      },
      {
        id: "3",
        url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9b26aa8f-0173-409b-b30a-7ce2d88573a4/custom-nike-dunk-low-by-you.png",
      },
    ],
    price: 100,
  };
};
