import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="p-10 grid grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
