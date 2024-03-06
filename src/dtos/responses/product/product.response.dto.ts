import MediaResponseDTO from "../media/media.response.dto";

type ProductResponseDTO = {
  id: string;
  store_id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  medias: string[];
};

export default ProductResponseDTO;
