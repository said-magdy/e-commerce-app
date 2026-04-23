import Link from "next/link";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border p-4 rounded-lg cursor-pointer">
        <img src={product.image} alt={product.name} />
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p>{product.price} $</p>
      </div>
    </Link>
  );
}
