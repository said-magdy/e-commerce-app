"use client";

import { useCart } from "@/lib/cartContext";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} className="border p-4 mb-2">
          <h2>{item.name}</h2>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}
