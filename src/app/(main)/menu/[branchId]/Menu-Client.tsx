// app/menu/[branchId]/MenuClient.tsx
"use client";

import { useState } from "react";
import {
  ArrowBigDownDash,
  ArrowDown,
  Barcode,
  BellDot,
  ChevronDown,
  Columns3Cog,
  Grid,
  Home,
  House,
  LayoutGrid,
  MapPinIcon,
  ScanBarcode,
  Search,
  Ticket,
  Truck,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import MenuBar from "@/components/main/menu-bar";
import BranchSelector from "@/components/main/branch-selector";
import { Input } from "@/components/ui/input";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  image: string;
}

export default function MenuClient({
  params,
}: {
  params: { branchId: string };
}) {
  const [activeCategory, setActiveCategory] = useState("all");

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
    <div className="min-h-screen bg-slate-50">
      {/* Top header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b">
        <BranchSelector />
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon">
            <ArrowBigDownDash />
          </Button>
          <Button variant="outline">
            <BellDot />
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
          <Input
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
                  ? "bg-[#E41E3F] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Menu items */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {filteredItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>

      <MenuBar />
    </div>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
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
