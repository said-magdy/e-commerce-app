"use client"; 
import { useCart } from "@/lib/cartContext";
import { products } from "@/lib/data";

export default async function ProductDetails({ params }: any) {
  const { id } = await params;

  const product = products.find((p) => p.id == id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-64 rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4">
        {product.name}
      </h1>

      <p className="text-xl text-green-600 mt-2">
        {product.price} $
      </p>

      <p className="mt-3 text-gray-600">
        {product.description}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>

    </div>
  );
}
