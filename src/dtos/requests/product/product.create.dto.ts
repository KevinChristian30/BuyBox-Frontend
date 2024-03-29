type ProductCreateRequestDTO = {
  category_id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image_url: string[];
};

export default ProductCreateRequestDTO;
