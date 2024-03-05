type ProductCreateRequestDTO = {
  category_id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  media_urls: string[];
};

export default ProductCreateRequestDTO;
