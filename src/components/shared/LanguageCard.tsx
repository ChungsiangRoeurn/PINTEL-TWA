"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LanguageCard({
  src,
  label,
  onClick,
}: {
  src: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Button
      variant="outline"
      className="flex justify-start gap-4 w-full border rounded-sm px-4 py-6 shadow-sm hover:bg-gray-50 transition"
      onClick={onClick}
    >
      <Image src={src} alt={label} width={28} height={20} />
      <span className="text-gray-800 font-medium">{label}</span>
    </Button>
  );
}
