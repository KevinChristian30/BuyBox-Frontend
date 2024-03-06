type ProductUpdateRequestDTO = {
  id: string;
  store_id: string;
  category_id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image_url: string[];
};

export default ProductUpdateRequestDTO;
