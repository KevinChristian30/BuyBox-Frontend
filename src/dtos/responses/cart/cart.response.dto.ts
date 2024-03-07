import ProductResponseDTO from "../product/product.response.dto";

type CartResponseDTO = {
  product_id: string;
  product: ProductResponseDTO;
  quantity: number;
};

export default CartResponseDTO;
