"use client";

import { useState } from "react";
import Image from "next/image";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  image: string;
}

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
      <div className="aspect-w-1 aspect-h-1 relative">
        <Image
          src={item.image}
          alt={item.name}
          width={150}
          height={150}
          className="w-full h-32 object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm">{item.name}</h3>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-[#E41E3F] font-normal">
            ${item.price.toFixed(2)}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm"
            >
              -
            </button>
            <span className="text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm"
            >
              +
            </button>
          </div>
        </div>
        {item.description && (
          <p className="text-xs text-gray-500 mt-1">{item.description}</p>
        )}
        <div className="mt-2 text-xs text-green-600">
          In Stock <span className="text-yellow-500 ml-1">New</span>
        </div>
      </div>
    </div>
  );
}
