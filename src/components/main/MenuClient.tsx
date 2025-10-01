"use client";

import { useState } from "react";
import HeaderBar from "@/components/main/layout/HeaderBar";
import Categories from "@/components/main/Categories";
import MenuItemCard from "@/components/main/MenuItemCard";
import { FloatInput } from "@/components/shared/FloatInput";
import { Search } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  image: string;
}

export default function MenuClient({ branchId }: { branchId: string }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const menuItems: Record<string, MenuItem[]> = {
    ifl: [
      {
        id: "spicy-chicken-sandwich",
        name: "Spicy Chicken Sandwich",
        price: 5.9,
        description: "Fresh chicken sandwich with special sauce",
        image: "/images/foods/fried-chicken.png",
      },
      {
        id: "coca-cola",
        name: "Coca Cola (500ml)",
        price: 2.99,
        description: "Pack of Jowar Stick and more",
        image: "/images/foods/coca.png",
      },
      {
        id: "ice-cappuccino",
        name: "Ice Cappuccino",
        price: 2.79,
        description: "Nutritious toned milk",
        image: "/images/foods/coffee.png",
      },
      {
        id: "pizza",
        name: "Pizza",
        price: 5.99,
        description: "Delicious peanut butter snack",
        image: "/images/foods/pizza.png",
      },
      {
        id: "burger",
        name: "Burger",
        price: 4.99,
        description: "Tasty beef burger with fresh veggies",
        image: "/images/foods/burger.png",
      },
    ],
  };

  const categories = ["all", "beauty", "beverage", "food-meal"];

  const filteredItems =
    activeCategory === "all"
      ? menuItems[branchId] || []
      : menuItems[branchId]?.filter((item) =>
          item.name.toLowerCase().includes(activeCategory.toLowerCase())
        ) || [];

  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderBar variant="home" />
      <div className="px-4 py-3 border-b">
        <FloatInput id="password" type="text" icon={Search} label="ស្វែងរក" />
      </div>
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="grid grid-cols-2 gap-4 p-4">
        {filteredItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
