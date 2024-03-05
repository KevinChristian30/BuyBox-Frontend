import MediaResponseDTO from "../media/media.response.dto";

type ProductResponseDTO = {
  id: string;
  name: string;
  category: string;
  description: string;
  medias: MediaResponseDTO[];
  price: number;
  stock: number;
};

export default ProductResponseDTO;
