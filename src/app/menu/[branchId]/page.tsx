// src/app/menu/[branchId]/page.tsx
"use client";

export async function generateStaticParams() {
  const branches = [
    { id: "ifl" },
    { id: "exchange-square" },
    { id: "sorya" },
    { id: "tk-avenue" },
  ];

  return branches.map((branch) => ({
    branchId: branch.id,
  }));
}

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  image: string;
}

interface MenuProps {
  params: { branchId: string };
}

const MenuPage = ({ params }: MenuProps) => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Sample menu data - in real app you'd fetch this based on branchId
  const menuItems: Record<string, MenuItem[]> = {
    ifl: [
      {
        id: "spicy-chicken-sandwich",
        name: "Spicy Chicken Sandwich",
        price: 5.9,
        description: "Fresh chicken sandwich with special sauce",
        image: "/images/spicy-chicken-sandwich.jpg",
      },
      {
        id: "snackarmor-combo",
        name: "SnackArmor Combo",
        price: 4.99,
        description: "Pack of Jowar Stick and more",
        image: "/images/snackarmor-combo.jpg",
      },
      {
        id: "healthy-long-life-toned-milk",
        name: "Healthy Long Life Toned Milk",
        price: 2.79,
        description: "Nutritious toned milk",
        image: "/images/milk.jpg",
      },
      {
        id: "peanut-butter-bite",
        name: "Peanut Butter Bite",
        price: 5.99,
        description: "Delicious peanut butter snack",
        image: "/images/peanut-butter-bite.jpg",
      },
    ],
  };

  const categories = ["all", "beauty", "beverage", "food-meal"];

  const filteredItems =
    activeCategory === "all"
      ? menuItems[params.branchId] || []
      : menuItems[params.branchId]?.filter((item) =>
          item.name.toLowerCase().includes(activeCategory.toLowerCase())
        ) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top header with location and actions */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b">
        <div className="flex items-center">
          <span className="text-sm">កន្លែង</span>
          <span className="ml-2 text-sm font-medium">Bonchon IFL</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Image
              src="/images/user-avatar.png"
              alt="User"
              width={24}
              height={24}
              className="rounded-full"
            />
          </Button>
        </div>
      </div>

      {/* Search bar */}
      <div className="px-4 py-3 bg-white border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="ស្វែងរក..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-2 bg-white border-b">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm whitespace-nowrap rounded-full ${
                activeCategory === category
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Menu items grid */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {filteredItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>

      {/* Cart summary */}

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm">ចំណូល • 6 មុខម្ហូប</span>
          <span className="font-bold">18,000៛</span>
        </div>
        <Button className="w-full bg-red-500 text-white py-3 rounded-lg font-medium">
          ទិញឥឡូវនេះ
        </Button>
      </div>
    </div>
  );
};

const MenuItemCard = ({ item }: { item: MenuItem }) => {
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
          <span className="text-red-500 font-bold">
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
};

export default MenuPage;
