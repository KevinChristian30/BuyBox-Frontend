import ProductResponseDTO from "../product/product.response.dto";

type OrderResponseDTO = {
  id: string;
  store_name: string;
  buyer_name: string;
  buyer_id: string;
  product: ProductResponseDTO;
  order_date: number;
  quantity: number;
  status: string;
};

export default OrderResponseDTO;