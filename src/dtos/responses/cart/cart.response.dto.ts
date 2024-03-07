import ProductResponseDTO from "../product/product.response.dto";

type CartResponseDTO = {
  product: ProductResponseDTO;
  quantity: number;
};

export default CartResponseDTO;
