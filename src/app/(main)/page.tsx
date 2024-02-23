import ProductCard from "@/components/commons/ProductCard";
import ProductResponseDTO from "@/dtos/responses/product/product.response.dto";
import { getProducts } from "@/services/product/product.list";

export default function Home() {
  const products: ProductResponseDTO[] = getProducts();

  return (
    <div className="flex items-center justify-center px-48 flex-wrap">
      {products.map((product) => {
        return (
          <div className="m-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
}
