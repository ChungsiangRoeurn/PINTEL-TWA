"use client";

interface Props {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export default function Categories({
  categories,
  activeCategory,
  setActiveCategory,
}: Props) {
  return (
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
  );
}
